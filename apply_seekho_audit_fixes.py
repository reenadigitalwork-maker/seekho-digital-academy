#!/usr/bin/env python3
"""Apply the audited Seekho Digital fixes to an existing checkout.

Run only from the repository root, on platform-redesign, with a clean worktree.
This script does not access the network and does not push or commit changes.
"""
from __future__ import annotations

import html
import re
import shutil
import subprocess
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

REPO = "reenadigitalwork-maker/seekho-digital-academy"
BRANCH = "platform-redesign"
BASE = "https://reenadigitalwork-maker.github.io/seekho-digital-academy/"

MODULES = {
    2: ("Websites & Landing Pages", "Plan clear, mobile-friendly pages that help visitors understand an offer and take a useful next step.", [
        "A website should solve a visitor problem",
        "Domains, hosting and the path to a live site",
        "Plan the page: hierarchy, content and calls to action",
        "Mobile UX, accessibility and testing",
    ]),
    3: ("SEO & Search Marketing", "Learn how search intent, helpful pages, on-page SEO and local visibility work together.", [
        "Search starts with a person’s question",
        "How search engines discover and understand pages",
        "On-page SEO: make the page understandable",
        "Local SEO and measuring search progress",
    ]),
    4: ("Social Media & Brand Building", "Choose suitable platforms, build a consistent brand and plan useful content and conversations.", [
        "A brand is more than a logo",
        "Choose platforms by fit, not popularity",
        "Content pillars and a realistic calendar",
        "Community, conversations and measurement",
    ]),
    5: ("Performance Marketing & Ads", "Understand campaign objectives, creative, audience tests, budgets and responsible measurement.", [
        "Choose the objective before the ad format",
        "Campaign structure and audience hypotheses",
        "Creative, message and landing-page fit",
        "Budgets, metrics and optimisation",
    ]),
    6: ("Content, Blogging & Copywriting", "Research audience questions and create clear, useful content, blog outlines and honest copy.", [
        "Start with audience questions and content purpose",
        "Build a clear blog outline",
        "Write copy that is clear and honest",
        "Edit, publish and repurpose responsibly",
    ]),
    7: ("Email & Automation", "Learn permission-based email marketing, useful messages, audience segments and responsible automation.", [
        "Permission is the foundation",
        "Segment subscribers and set useful goals",
        "Write a helpful email",
        "Simple automation and responsible measurement",
    ]),
    8: ("Affiliate Marketing & Monetisation", "Understand relevant affiliate offers, transparent disclosures and useful recommendation content.", [
        "How affiliate marketing works",
        "Choose relevant programmes and products",
        "Disclosures and honest recommendations",
        "Build content and review performance",
    ]),
    9: ("Analytics & Data Decisions", "Define events, track campaigns and interpret marketing metrics before making evidence-led decisions.", [
        "Start with a business question",
        "Events, parameters and key actions",
        "Campaign tracking with UTMs",
        "Read reports and make cautious decisions",
    ]),
    10: ("Freelancing & Career Capstone", "Scope a service, present an honest portfolio and communicate project decisions professionally.", [
        "Choose a service you can deliver honestly",
        "Build a portfolio that shows your thinking",
        "Discovery, scope and proposals",
        "Communicate, deliver and learn professionally",
    ]),
}

PUBLIC_PAGES = [
    "index.html", "learning.html", "about.html", "blog.html", "faq.html",
    "interview.html", "practice.html", "projects.html", "resources.html", "updates.html",
    *[f"modules/module-{i:02d}.html" for i in range(1, 11)],
]
NOINDEX_PAGES = ["community.html", "my-learning.html", "workbook.html"]


def fail(message: str) -> None:
    print(f"ERROR: {message}", file=sys.stderr)
    raise SystemExit(1)


def read(path: Path) -> str:
    if not path.is_file():
        fail(f"Required file missing: {path}")
    return path.read_text(encoding="utf-8")


def replace_once(source: str, old: str, new: str, label: str) -> str:
    count = source.count(old)
    if count != 1:
        fail(f"Expected exactly one occurrence of {label}; found {count}. No files have been written yet.")
    return source.replace(old, new, 1)


def safe_write(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8", newline="\n")


def assert_clean_branch(root: Path) -> None:
    if not (root / ".git").exists():
        fail("Run this script from the checked-out repository root.")
    branch = subprocess.run(["git", "branch", "--show-current"], cwd=root, text=True, capture_output=True)
    if branch.returncode != 0:
        fail("Could not identify the current Git branch.")
    if branch.stdout.strip() != BRANCH:
        fail(f"Wrong branch: {branch.stdout.strip()!r}. Switch to {BRANCH!r}; main will not be changed.")
    status = subprocess.run(["git", "status", "--porcelain"], cwd=root, text=True, capture_output=True)
    if status.returncode != 0:
        fail("Could not inspect Git worktree status.")
    allowed_untracked = {
        "?? apply_seekho_audit_fixes.py",
        "?? README-PATCH-PACKAGE.txt",
        "?? seekho-digital-audit-patch.zip",
    }
    unexpected = [line for line in status.stdout.splitlines() if line not in allowed_untracked]
    if unexpected:
        fail("Your worktree has uncommitted changes. Commit or back them up first, then rerun this script.\n" + "\n".join(unexpected))


def patch_calculator_js(source: str) -> str:
    start_marker = "  // Campaign metrics calculator. Blank / zero denominators display an em dash."
    end_marker = "  // UTM builder. Existing query parameters and fragments are preserved."
    start = source.find(start_marker)
    end = source.find(end_marker, start + 1)
    if start < 0 or end < 0 or end <= start:
        fail("Could not safely locate the existing Blog calculator block in editorial-lab.js.")

    replacement = r'''  // Campaign metrics calculator. Keep the enquiry and order stages distinct.
  const metricIds = ['spend','impressions','clicks','enquiries','orders','revenue'];
  const metricInputs = Object.fromEntries(metricIds.map(id => [id, $(`#metric-${id}`)]));
  const results = $('#metric-results');
  if (results && metricIds.every(id => metricInputs[id])) {
    const number = id => {
      const raw = metricInputs[id].value.trim();
      if (raw === '') return null;
      const value = Number(raw);
      return Number.isFinite(value) && value >= 0 ? value : null;
    };
    const fmt = value => value === null || !Number.isFinite(value)
      ? '—'
      : value.toLocaleString('en-IN', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
    const calculate = () => {
      const spend = number('spend');
      const impressions = number('impressions');
      const clicks = number('clicks');
      const enquiries = number('enquiries');
      const orders = number('orders');
      const revenue = number('revenue');
      const values = [
        ['CTR', impressions > 0 && clicks !== null ? clicks / impressions * 100 : null, '%', 'Clicks ÷ impressions'],
        ['CPC', clicks > 0 && spend !== null ? spend / clicks : null, '₹', 'Spend ÷ clicks'],
        ['Click-to-enquiry rate', clicks > 0 && enquiries !== null ? enquiries / clicks * 100 : null, '%', 'Enquiries ÷ clicks'],
        ['Enquiry-to-order rate', enquiries > 0 && orders !== null ? orders / enquiries * 100 : null, '%', 'Orders ÷ enquiries'],
        ['Cost per enquiry', enquiries > 0 && spend !== null ? spend / enquiries : null, '₹', 'Spend ÷ enquiries'],
        ['Cost per order', orders > 0 && spend !== null ? spend / orders : null, '₹', 'Spend ÷ orders'],
        ['ROAS', spend > 0 && revenue !== null ? revenue / spend : null, '×', 'Attributed revenue ÷ spend']
      ];
      results.innerHTML = values.map(([label, value, suffix, description]) => {
        const formatted = value === null ? '—' : suffix === '%' ? `${fmt(value)}%` : suffix === '×' ? `${fmt(value)}×` : `₹${fmt(value)}`;
        return `<article><span>${label}</span><b>${formatted}</b><small>${description}</small></article>`;
      }).join('');
      const notes = [];
      if ([spend, impressions, clicks, enquiries, orders, revenue].some(value => value === null)) {
        notes.push('Enter valid non-negative numbers in every field.');
      }
      if (impressions !== null && clicks !== null && clicks > impressions) {
        notes.push('Clicks exceed impressions. Check that both values use the same scope and reporting period.');
      }
      if (clicks !== null && enquiries !== null && enquiries > clicks) {
        notes.push('Enquiries exceed clicks. Confirm that both counts use the same reporting period and attribution scope.');
      }
      if (enquiries !== null && orders !== null && orders > enquiries) {
        notes.push('Orders exceed enquiries. Check event definitions and the reporting window before interpreting the rate.');
      }
      if (spend === 0) notes.push('ROAS cannot be calculated when ad spend is zero.');
      if (clicks === 0) notes.push('CPC and click-to-enquiry rate need at least one click.');
      if (enquiries === 0) notes.push('Enquiry-to-order rate and cost per enquiry need at least one enquiry.');
      if (orders === 0) notes.push('Cost per order needs at least one order.');
      if (!notes.length) {
        notes.push('These are fictional practice calculations. Keep event definitions, attribution scope and reporting periods consistent when analysing real campaigns.');
      }
      $('#metric-explain').textContent = notes.join(' ');
    };
    metricIds.forEach(id => metricInputs[id].addEventListener('input', calculate));
    $('#metric-reset')?.addEventListener('click', () => {
      const sample = { spend: 1800, impressions: 10000, clicks: 600, enquiries: 60, orders: 18, revenue: 9000 };
      Object.entries(sample).forEach(([id, value]) => { metricInputs[id].value = String(value); });
      calculate();
    });
    calculate();
  }

'''
    return source[:start] + replacement + source[end:]


def meta_tags_for(path: str, title: str, description: str) -> str:
    url = BASE if path == "index.html" else BASE + path
    e_title, e_desc, e_url = html.escape(title, quote=True), html.escape(description, quote=True), html.escape(url, quote=True)
    return (
        f'\n  <link rel="canonical" href="{e_url}">'
        f'\n  <meta property="og:type" content="website">'
        f'\n  <meta property="og:site_name" content="Seekho Digital">'
        f'\n  <meta property="og:title" content="{e_title}">'
        f'\n  <meta property="og:description" content="{e_desc}">'
        f'\n  <meta property="og:url" content="{e_url}">'
        f'\n  <meta name="twitter:card" content="summary">'
        f'\n  <meta name="twitter:title" content="{e_title}">'
        f'\n  <meta name="twitter:description" content="{e_desc}">'
    )


def add_seo_head(path: str, source: str) -> str:
    title_match = re.search(r'<title[^>]*>(.*?)</title>', source, re.I | re.S)
    desc_match = re.search(r'<meta\s+name=["\']description["\']\s+content=["\']([^"\']*)["\'][^>]*>', source, re.I)
    if not title_match or not desc_match:
        fail(f"Could not read a unique title/description for {path}.")
    title = re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', title_match.group(1))).strip()
    description = desc_match.group(1).strip()
    if path == "about.html" and description == "Discover Seekho Digital":
        description = "Explore Seekho Digital, a free beginner-first digital marketing learning platform with clear lessons, a fictional business case study, guided practice and portfolio projects."
        source = source[:desc_match.start()] + f'<meta name="description" content="{html.escape(description, quote=True)}">' + source[desc_match.end():]
        desc_match = re.search(r'<meta\s+name=["\']description["\']\s+content=["\']([^"\']*)["\'][^>]*>', source, re.I)
        if not desc_match:
            fail(f"Could not re-read the updated About description for {path}.")
    if 'rel="canonical"' not in source:
        source = source[:desc_match.end()] + meta_tags_for(path, title, description) + source[desc_match.end():]
    if path in NOINDEX_PAGES and 'name="robots"' not in source:
        head_end = source.lower().find('</head>')
        source = source[:head_end] + '  <meta name="robots" content="noindex,follow">\n' + source[head_end:]
    return source


def fallback_markup(module_id: int) -> str:
    title, intro, lessons = MODULES[module_id]
    items = ''.join(f'<li>{html.escape(item)}</li>' for item in lessons)
    return f'''<div class="course-loading course-static-fallback">
    <div class="course-wrap">
      <span class="course-eyebrow">SEEKHO DIGITAL · MODULE {module_id:02d}</span>
      <h1>{html.escape(title)}</h1>
      <p class="course-lead">{html.escape(intro)}</p>
      <h2>Lessons in this module</h2>
      <ol>{items}</ol>
      <p>Enable JavaScript to use the interactive lessons, knowledge checks, quiz, glossary and project worksheet. You can still read this module outline without JavaScript.</p>
      <p><a href="../learning.html">Back to the learning roadmap</a></p>
    </div>
  </div>'''


def main() -> None:
    root = Path.cwd()
    assert_clean_branch(root)

    # Build all edits in memory first. If an anchor has drifted, stop before writing anything.
    pending: dict[Path, str] = {}

    my_learning_path = root / "assets/js/my-learning.js"
    js = read(my_learning_path)
    old_key = "'seekho-module-01-deep-v1','seekho-practice-history','seekho-workbook-v1',"
    new_key = "'seekho-module-01-deep-v1','seekho-practice-history','seekho-workbook-v1','seekho-project-checks-v1',"
    js = replace_once(js, old_key, new_key, "dashboard storage backup key list")
    pending[my_learning_path] = js

    editorial_path = root / "assets/js/editorial-lab.js"
    editorial = patch_calculator_js(read(editorial_path))
    pending[editorial_path] = editorial

    blog_path = root / "blog.html"
    blog = read(blog_path)
    conversion_label = re.compile(r'<label>\s*<span>Conversions</span>\s*<input id="metric-conversions"[^>]*>\s*</label>', re.I | re.S)
    blog, count = conversion_label.subn(
        '<label><span>Enquiries</span><input id="metric-enquiries" type="number" min="0" step="1" value="60" inputmode="numeric"></label>'
        '<label><span>Orders</span><input id="metric-orders" type="number" min="0" step="1" value="18" inputmode="numeric"></label>',
        blog, count=1
    )
    if count != 1:
        fail(f"Expected one Conversions field in blog.html; found {count}.")
    result_grid = re.compile(r'<div class="lab-result-grid" id="metric-results" aria-live="polite">.*?</div>', re.I | re.S)
    static_results = '''<div class="lab-result-grid" id="metric-results" aria-live="polite">
          <article><span>CTR</span><b>6.00%</b><small>Clicks ÷ impressions</small></article>
          <article><span>CPC</span><b>₹3.00</b><small>Spend ÷ clicks</small></article>
          <article><span>Click-to-enquiry rate</span><b>10.00%</b><small>Enquiries ÷ clicks</small></article>
          <article><span>Enquiry-to-order rate</span><b>30.00%</b><small>Orders ÷ enquiries</small></article>
          <article><span>Cost per enquiry</span><b>₹30.00</b><small>Spend ÷ enquiries</small></article>
          <article><span>Cost per order</span><b>₹100.00</b><small>Spend ÷ orders</small></article>
          <article><span>ROAS</span><b>5.00×</b><small>Attributed revenue ÷ spend</small></article>
        </div>'''
    blog, count = result_grid.subn(static_results, blog, count=1)
    if count != 1:
        fail("Could not safely replace the static result grid in blog.html.")
    blog = replace_once(
        blog,
        "Change the sample numbers and see how each metric is calculated. Use attributed revenue only when your measurement method supports it.",
        "Change the sample numbers and see how attention, enquiries, orders and attributed revenue relate. Keep event definitions and reporting periods consistent.",
        "Blog calculator introduction"
    )
    blog = blog.replace(
        "Sample: 600 clicks from 10,000 impressions gives a 6% click-through rate. The sample figures are fictional.",
        "Sample figures are fictional: 600 clicks, 60 enquiries and 18 orders. Enquiry-to-order rate = 18 ÷ 60 × 100 = 30%. This differs from orders divided by all website visits."
    )
    pending[blog_path] = blog

    # Keep the fictional case study consistent across the homepage.
    index_path = root / "index.html"
    index = read(index_path)
    if "discover her cakes" in index:
        index = index.replace("discover her cakes", "discover its breakfast boxes")
    pending[index_path] = index

    # Provide a meaningful no-JavaScript fallback for the dynamic Projects Hub.
    projects_path = root / "projects.html"
    projects = read(projects_path)
    loading_projects = '<article class="tool-panel"><p>Loading project briefs…</p></article>'
    project_fallback = '<article class="tool-panel project-fallback"><h3>Explore the ten guided practice projects</h3><p>Each project is linked to its module worksheet. The exercises use the fictional Maple Lane Home Bakery; label any portfolio work as practice.</p><ol>' + ''.join(
        f'<li><a href="modules/module-{i:02d}.html#project">Module {i:02d} — {html.escape(("Digital Marketing Foundations", "Websites & Landing Pages", "SEO & Search Marketing", "Social Media & Brand Building", "Performance Marketing & Ads", "Content, Blogging & Copywriting", "Email & Automation", "Affiliate Marketing & Monetisation", "Analytics & Data Decisions", "Freelancing & Career Capstone")[i-1])}</a></li>'
        for i in range(1, 11)
    ) + '</ol><p>Interactive checklists and downloadable templates become available when JavaScript is enabled.</p></article>'
    projects = replace_once(projects, loading_projects, project_fallback, "Projects Hub loading placeholder")
    pending[projects_path] = projects

    # Warn learners that the workbook needs JavaScript for autosave and export controls.
    workbook_path = root / "workbook.html"
    workbook = read(workbook_path)
    workbook = replace_once(
        workbook,
        '<body data-root="">',
        '<body data-root="">\n<noscript><p class="status-note" style="margin:16px;padding:14px">JavaScript is disabled. The workbook fields are visible, but automatic saving, download and clear controls need JavaScript. Copy any notes you want to keep before leaving this page.</p></noscript>',
        "Workbook no-JavaScript notice"
    )
    pending[workbook_path] = workbook

    # Replace the Module 02–10 loading-only placeholders with crawlable/readable outlines.
    for module_id in range(2, 11):
        path = root / f"modules/module-{module_id:02d}.html"
        source = read(path)
        source = replace_once(
            source,
            '<div class="course-loading"><p>Preparing your classroom…</p></div>',
            fallback_markup(module_id),
            f"Module {module_id:02d} classroom placeholder"
        )
        pending[path] = source

    # Add canonical and social metadata to public pages; keep personal/planned tools out of Search.
    for rel in PUBLIC_PAGES + NOINDEX_PAGES:
        path = root / rel
        source = pending.get(path, read(path))
        pending[path] = add_seo_head(rel, source)

    # Expose the shared data object for the dashboard's legacy window.SITE guard.
    site_js_path = root / "assets/js/site.js"
    site_js = pending.get(site_js_path, read(site_js_path))
    marker = 'const R=document.body.dataset.root||"",S=SITE,page=location.pathname.split("/").pop()||"index.html";'
    site_js = replace_once(site_js, marker, marker + '\nwindow.SITE = SITE;', "shared SITE bootstrap")
    pending[site_js_path] = site_js

    home = pending[root / "index.html"]
    if '"@type":"WebSite"' not in home and '"@type": "WebSite"' not in home:
        schema = '''\n  <script type="application/ld+json">\n  {\n    "@context": "https://schema.org",\n    "@type": "WebSite",\n    "name": "Seekho Digital",\n    "url": "https://reenadigitalwork-maker.github.io/seekho-digital-academy/"\n  }\n  </script>\n'''
        home = home.replace('</head>', schema + '</head>', 1)
        pending[root / "index.html"] = home

    robots = '''User-agent: *\nAllow: /\n\nSitemap: https://reenadigitalwork-maker.github.io/seekho-digital-academy/sitemap.xml\n'''
    pending[root / "robots.txt"] = robots

    urls = [BASE if p == "index.html" else BASE + p for p in PUBLIC_PAGES]
    urlset = ET.Element("urlset", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")
    for url in urls:
        loc = ET.SubElement(urlset, "url")
        ET.SubElement(loc, "loc").text = url
    sitemap = ET.tostring(urlset, encoding="unicode", xml_declaration=True)
    pending[root / "sitemap.xml"] = sitemap + "\n"

    keyword_map = '''# Seekho Digital — keyword and search-intent map\n\nThis is a qualitative topic map, not keyword-volume research. No search volumes, difficulty scores, traffic forecasts or ranking outcomes are asserted. Validate real queries with Search Console and manual SERP review after deployment.\n\n| Intent | Topic cluster | Primary page | Supporting pages |\n|---|---|---|---|\n| Beginner discovery | digital marketing for beginners; digital marketing basics; learn digital marketing for free | Homepage | Learning roadmap; Module 01 |\n| Course exploration | beginner digital marketing roadmap; practical digital marketing learning | Learning roadmap | Modules 01–10; Projects |\n| Search learning | SEO for beginners; search intent; on-page SEO; local SEO basics | Module 03 | Blog; Resources |\n| Social learning | social media marketing for beginners; content calendar | Module 04 | Module 06; Blog |\n| Paid marketing | performance marketing basics; CTR; CPC; ROAS; cost per lead | Module 05 | Blog; Module 09 |\n| Content skills | content marketing basics; blog writing; copywriting for beginners | Module 06 | Blog; Projects |\n| Email learning | email marketing for beginners; email automation basics | Module 07 | Resources |\n| Affiliate learning | affiliate marketing for beginners; affiliate disclosure | Module 08 | Resources |\n| Measurement | marketing analytics for beginners; UTM tracking; conversion rate calculation | Module 09 | Blog; Module 05 |\n| Practical work | digital marketing projects for beginners; portfolio projects | Projects | All modules |\n| Career preparation | digital marketing portfolio; freelance proposal; interview questions | Module 10 | Interview Prep |\n\n## Content rules\n\n- Give each page one clear primary search intent.\n- Explain the complete task before suggesting tools.\n- Use Maple Lane Home Bakery only as a fictional practice case study.\n- Do not imply that a fictional exercise is client work or a measured result.\n- Do not add unverified keyword-volume or competition figures.\n'''
    pending[root / "SEO-KEYWORD-MAP.md"] = keyword_map

    qa_checklist = "# Seekho Digital — post-patch QA checklist\n\nRun these checks after the `platform-redesign` changes have been committed and GitHub Pages has deployed them. The local patch script does not prove live deployment or browser behaviour.\n\n## Functional checks\n\n- [ ] Homepage primary CTA opens Module 01.\n- [ ] Learning roadmap links to the matching 10 modules.\n- [ ] Modules 02–10 render interactive lessons when JavaScript is enabled.\n- [ ] Modules 02–10 show their static title and lesson outline with JavaScript disabled.\n- [ ] My Learning dashboard shows module cards and saved progress.\n- [ ] Mark one lesson complete, refresh and confirm it remains completed on the same browser/device.\n- [ ] Tick a Projects Hub deliverable and download a progress backup; confirm `seekho-project-checks-v1` is included in the JSON.\n- [ ] Restore a backup only after preserving current data; confirm dashboard and project checklist restore.\n- [ ] Projects page shows module links without JavaScript.\n- [ ] Practice filters, next question, score summary and missed-question retry work.\n- [ ] Workbook autosave, Markdown download and clear confirmation work.\n- [ ] Blog search/category filters and UTM builder/copy work.\n\n## Blog calculator sample values\n\nWith ₹1,800 spend, 10,000 impressions, 600 clicks, 60 enquiries, 18 orders and ₹9,000 attributed revenue, outputs should be:\n\n| Metric | Expected value |\n|---|---:|\n| CTR | 6.00% |\n| CPC | ₹3.00 |\n| Click-to-enquiry rate | 10.00% |\n| Enquiry-to-order rate | 30.00% |\n| Cost per enquiry | ₹30.00 |\n| Cost per order | ₹100.00 |\n| ROAS | 5.00× |\n\nAlso test zero denominators, blank values, negative values and inconsistent counts. State the event and denominator for every rate. ROAS is revenue divided by ad spend, not profit.\n\n## SEO and crawlability\n\n- [ ] Open `/robots.txt` and confirm it references `/sitemap.xml`.\n- [ ] Open `/sitemap.xml` and confirm it lists 20 public pages, without Community, My Learning or Workbook.\n- [ ] Check canonical URLs on the homepage, Learning page, Blog and several modules.\n- [ ] Check `noindex,follow` on `community.html`, `my-learning.html` and `workbook.html`.\n- [ ] Inspect homepage JSON-LD with Google's Rich Results Test. `WebSite` is descriptive structured data, not a promise of a rich result.\n- [ ] Inspect the homepage, learning roadmap, Module 03 and Blog with Search Console URL Inspection after property verification.\n- [ ] Submit the sitemap in Search Console. Acceptance is not a guarantee of indexing.\n\n## Responsive and accessibility checks\n\n- [ ] Test 320px, 360px, 390px, tablet and desktop widths.\n- [ ] Confirm no horizontal page overflow; inspect diagrams and tables separately.\n- [ ] Use keyboard only for the menu, tabs, quizzes, forms and calculators.\n- [ ] Confirm visible focus indicators, meaningful labels and readable contrast.\n- [ ] Check with reduced-motion enabled.\n- [ ] Check browser console on Homepage, Learning, Module 01, Module 03, Blog, Practice, Projects and My Learning.\n\n## Performance checks\n\nRun PageSpeed Insights on the deployed homepage, Learning page and a module page. Record actual results and field data if available; do not invent Lighthouse scores or Core Web Vitals. Fix real issues before adding animations or frameworks.\n"
    pending[root / "QA-CHECKLIST.md"] = qa_checklist

    apply_guide = '''# Apply the Seekho Digital audit fixes\n\n## Safety\n\n- This patch is intended only for `platform-redesign`.\n- It does not change `main`, commit, push, or deploy anything.\n- Review `git diff` before committing.\n- The script stops if the branch is wrong, the working tree is dirty, or an expected source-code anchor is missing.\n\n## Use GitHub Codespaces\n\n1. Open the repository on GitHub.\n2. Switch to `platform-redesign` before creating a Codespace.\n3. Select **Code → Codespaces → Create codespace on platform-redesign**.\n4. Upload this ZIP into the repository root in the Codespaces file explorer, then open the terminal.\n5. Run:\n\n```bash\nunzip -o seekho-digital-audit-patch.zip\npython3 apply_seekho_audit_fixes.py\n```\n\n6. Review the changes:\n\n```bash\ngit status --short\ngit diff --check\ngit diff --stat\n```\n\n7. Run the static checks (if Node.js is available):\n\n```bash\nfor f in assets/js/*.js assets/data/*.js; do node --check "$f" || exit 1; done\n```\n\n8. Inspect the homepage, Modules 02–10, Blog calculator and My Learning dashboard in the browser preview.\n9. Only after you are satisfied, commit and push from the Codespace:\n\n```bash\ngit add index.html learning.html about.html blog.html faq.html interview.html practice.html projects.html resources.html updates.html community.html my-learning.html workbook.html modules assets robots.txt sitemap.xml SEO-KEYWORD-MAP.md QA-CHECKLIST.md\ngit commit -m "Fix learning dashboard, funnel calculator and technical SEO"\ngit push origin platform-redesign\n```\n\n10. Check GitHub Actions / Pages deployment, then test the live site. Do not change the Pages publishing branch unless you have confirmed the current setting.\n\n## What the script changes\n\n- Fixes the dashboard's shared `SITE` global and includes the Projects Hub checklist in progress backups.\n- Adds enquiries, orders, enquiry-to-order rate, cost per enquiry and cost per order to the Blog metrics calculator.\n- Adds a static Modules 02–10 outline so the HTML source is useful before JavaScript renders the classroom.\n- Adds a static project directory fallback and Workbook no-JavaScript notice.\n- Adds canonical and social metadata to public pages.\n- Marks `community.html`, `my-learning.html` and `workbook.html` as `noindex,follow`.\n- Adds `robots.txt`, `sitemap.xml`, a qualitative keyword map and a post-deploy QA checklist.\n- Corrects the Maple Lane homepage example and improves the About description.\n\n## Important limitations\n\nThis is a code patch, not a live deployment. It does not run Lighthouse, browser automation, Google Search Console inspection or real-device testing. Those checks must be completed after the patch is deployed.\n'''
    pending[root / "APPLY-IN-CODESPACES.md"] = apply_guide

    # Write only after all transformations and guards have succeeded.
    for path, content in pending.items():
        safe_write(path, content)

    print(f"Applied {len(pending)} file updates on branch {BRANCH}.")
    print("No commit, push or deployment was performed.")
    print("Next: inspect git diff, run node --check, then test the site in a browser.")


if __name__ == "__main__":
    main()
