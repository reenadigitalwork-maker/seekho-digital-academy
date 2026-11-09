# Seekho Digital Academy

A beginner-first digital marketing learning website built as a static site for GitHub Pages.

## Learning experience

- **Module 01 – Fundamentals & Digital Ecosystem:** 10 deep lessons, visual diagrams, checkpoints, 12-question assessment, scenario game, metrics calculator, flashcards, glossary and a Maple Lane campaign brief.
- **Modules 02–10:** four guided lessons each, lesson checkpoints, local progress tracking, a five-question quiz with explanations, a practical project worksheet and searchable glossary.
- **Practice Zone:** 53 original questions across all ten modules, module filters, instant explanations, retry of missed questions and local attempt history.
- **Projects:** ten connected practice briefs with suggested deliverables and links to each module worksheet.
- **Learning Workbook:** browser-saved notes with a Markdown export.
- **Interview Prep:** 25 beginner-friendly questions with answer frameworks.
- **Resources:** selected official and primary learning sources.

## Run locally

Open `index.html` in a current browser, or serve this folder with any static file server. No build step, framework, external font request or backend is required.

## Publish on GitHub Pages

The intended working branch is `platform-redesign`. Keep `main` untouched unless you deliberately decide to merge later. In GitHub Pages settings, publish from the intended branch and root folder.

## Important data and feature notes

- Lesson completion, project drafts, practice attempt counts and workbook notes are stored in the learner's browser using local storage. They are not synced to an account or server and may be lost if browser data is cleared or the learner changes devices. Export important work.
- Maple Lane Home Bakery is a fictional practice business. Its scenarios and numbers are illustrative, not client results or industry benchmarks.
- The student community and AI assistant are not live. They require secure backend services, privacy controls and (for AI) server-side API key handling.
- The website does not promise jobs, income, clients, conversions or search rankings.

## Main implementation files

- `assets/data/site-data.js` – shared navigation and canonical module roadmap.
- `assets/data/module-courses.js` – curriculum and project data for Modules 02–10.
- `assets/js/module-course.js` – reusable lesson, checkpoint, quiz, glossary and project worksheet experience.
- `assets/js/module-01.js` – Module 01 curriculum and learning interactions.
- `assets/js/practice.js` – filtered practice quiz and review.
- `assets/js/workbook.js` – local notes and export.
- `assets/js/projects.js` – project brief hub.
- `assets/css/course-modules.css` and `assets/css/learning-tools.css` – responsive learning interfaces.

No backend or real user account system is included in this static release.
