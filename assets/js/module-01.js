/* Seekho Digital · Module 01 curriculum + learning interactions
   Instructor-authored lesson HTML is local to this file. Learner drafts/progress stay in this browser. */
(() => {
  'use strict';
  const root = document.querySelector('.m1x-page');
  if (!root) return;
  const $ = (selector, scope = root) => scope.querySelector(selector);
  const $$ = (selector, scope = root) => [...scope.querySelectorAll(selector)];
  const STORAGE = 'seekho-module-01-deep-v1';

  const lessons = [
    {
      title: 'Marketing is about creating value—not shouting louder.',
      short: 'Marketing: the real meaning', category: 'THE BIG IDEA', time: '15–20 MIN',
      intro: 'Imagine opening a small bakery. You can bake the best bread in the neighbourhood, but that alone does not guarantee the right people will discover it, understand why it is useful, or feel confident enough to order. Marketing connects a real customer need with an offer that creates value—and helps both sides understand that value.',
      body: `
        <div class="m1x-definition"><b>Professional definition, in plain language</b><p>The American Marketing Association describes marketing as the activities and processes involved in creating, communicating, delivering and exchanging offerings that have value for customers, partners and society. In everyday words: understand people, make something useful, explain it honestly, make it available and learn from the experience. <a href="https://www.ama.org/the-definition-of-marketing-what-is-marketing/" target="_blank" rel="noopener">Read the AMA definition ↗</a></p></div>
        <h3>Marketing is bigger than promotion</h3>
        <p>Many beginners hear the word <strong>marketing</strong> and immediately think of Instagram posts, advertisements or sales calls. Those activities can be part of marketing, but they are not the whole discipline. Good marketing starts before a post is written: it asks who the customer is, what problem they are trying to solve, whether the offer is useful, what makes it different, what a fair price looks like and how the experience will work.</p>
        <div class="m1x-cards-3">
          <article class="m1x-concept-card"><span>🔎</span><b>Research</b><p>Learn about customers, needs, alternatives, context and barriers.</p></article>
          <article class="m1x-concept-card"><span>🧩</span><b>Design value</b><p>Shape a useful product or service, price and experience.</p></article>
          <article class="m1x-concept-card"><span>📣</span><b>Communicate</b><p>Help the right people discover, understand and act on the offer.</p></article>
        </div>
        <h3>Marketing, advertising, sales and branding: how are they different?</h3>
        <div class="m1x-table-wrap"><table class="m1x-content-table"><thead><tr><th>Term</th><th>What it means</th><th>Bakery example</th></tr></thead><tbody>
          <tr><td>Marketing</td><td>The full process of understanding needs, creating value and improving the exchange.</td><td>Researching breakfast habits, creating breakfast boxes, setting prices and planning discovery.</td></tr>
          <tr><td>Advertising</td><td>Paid communication used to promote an offer or message.</td><td>Paying to show a local breakfast-box ad to a relevant audience.</td></tr>
          <tr><td>Sales</td><td>Helping a potential customer make a purchase decision and completing the transaction.</td><td>Answering a question about ingredients, confirming an order and taking payment.</td></tr>
          <tr><td>Branding</td><td>Building recognisable identity and associations through actions, design, language and experience.</td><td>Consistent packaging, friendly service and a clear bakery identity.</td></tr>
        </tbody></table></div>
        <p>These activities work together. An advertisement may create attention, but if the website is confusing or the offer is poor, the business may still lose the customer. Marketing is not a clever way to hide a weak product. It works best when the promise and the real experience match.</p>
        <h3>The 4 Ps: a useful way to inspect an offer</h3>
        <p>The traditional marketing mix is often taught through four connected decisions. It is a thinking tool—not a magic formula and not a replacement for customer research.</p>
        <div class="m1x-cards-2">
          <article class="m1x-concept-card"><span>🥐</span><b>1 · Product</b><p>What are you offering? What need does it solve? Consider quality, features, benefits, variety, packaging and service.</p></article>
          <article class="m1x-concept-card"><span>₹</span><b>2 · Price</b><p>What does the customer pay or give up? Consider affordability, perceived value, costs, alternatives and payment options.</p></article>
          <article class="m1x-concept-card"><span>📍</span><b>3 · Place</b><p>Where and how can the customer access it? Consider location, delivery, collection, website and availability.</p></article>
          <article class="m1x-concept-card"><span>📢</span><b>4 · Promotion</b><p>How will people hear about it and understand its value? Consider content, search, social, email, partnerships and advertising.</p></article>
        </div>
        <figure class="m1x-diagram"><figcaption>THE 4 Ps SHOULD SUPPORT ONE CUSTOMER PROMISE</figcaption><svg class="m1x-svg" viewBox="0 0 660 260" role="img" aria-label="Four connected cards for product, price, place and promotion surrounding customer value"><circle cx="330" cy="130" r="73" fill="#312e81"/><text x="330" y="119" text-anchor="middle" fill="#fff" font-size="16" font-weight="700">CUSTOMER</text><text x="330" y="141" text-anchor="middle" fill="#ffd166" font-size="16" font-weight="700">VALUE</text><g stroke="#aaa5d7" stroke-width="3" fill="none"><path d="M260 90 L185 53 M400 90 L475 53 M260 170 L185 207 M400 170 L475 207"/></g><g font-size="16" font-weight="700" text-anchor="middle"><rect x="40" y="20" width="155" height="65" rx="13" fill="#e6f6f1"/><text x="117" y="47" fill="#167765">PRODUCT</text><text x="117" y="67" fill="#47766c" font-size="10">Useful offer</text><rect x="465" y="20" width="155" height="65" rx="13" fill="#fff2d5"/><text x="542" y="47" fill="#8a6418">PRICE</text><text x="542" y="67" fill="#947a47" font-size="10">Fair exchange</text><rect x="40" y="175" width="155" height="65" rx="13" fill="#f0edff"/><text x="117" y="202" fill="#51499e">PLACE</text><text x="117" y="222" fill="#726ca9" font-size="10">Easy access</text><rect x="465" y="175" width="155" height="65" rx="13" fill="#ffece9"/><text x="542" y="202" fill="#a84940">PROMOTION</text><text x="542" y="222" fill="#a76b66" font-size="10">Clear message</text></g></svg><p class="m1x-diagram-note">Illustrative model. If one decision is weak, the whole experience can feel disconnected.</p></figure>
        <div class="m1x-analogy"><b>Everyday analogy: a birthday party 🎂</b><p>A beautiful invitation cannot rescue a party with no food, an impossible venue or a confusing time. The invitation is promotion. The food and activities are the offer. The venue is place. The ticket or contribution is price. The whole experience must fit together.</p></div>
        <h3>Value is not only a low price</h3>
        <p>Customers weigh benefits against costs. Costs can include money, time, travel, effort, uncertainty and risk. A slightly more expensive breakfast box may still feel valuable if it saves time, lists ingredients clearly and is ready when promised. A marketer tries to understand what this particular customer values rather than assuming everyone wants the cheapest option.</p>
        <div class="m1x-example"><span>MAPLE LANE CASE</span><p>The bakery wants more breakfast orders. Before boosting a post, it checks whether the menu suits busy mornings, whether the price is clear, whether collection is convenient and whether the order process works. Only then does it decide how to promote the offer.</p></div>
        <h3>Common beginner mistakes</h3><ul class="m1x-list"><li>Thinking marketing means “posting every day”. Posting is an activity, not a strategy.</li><li>Trying to sell to everyone. A focused offer is easier to explain and evaluate.</li><li>Promising what the business cannot deliver. Trust is damaged when the real experience contradicts the message.</li><li>Looking only at attention numbers. A million views do not automatically mean useful customers or a healthy business.</li></ul>
        <p><strong>Remember:</strong> a marketer's first question is not “Which app should I use?” It is “Whose need am I helping, and what value can I genuinely provide?”</p>`,
      check:{q:'A bakery has many Instagram likes but very few orders. What should the marketer examine first?',options:['Buy more followers so the page looks popular','Check the offer, audience fit, price, ordering experience and message','Post at exactly the same time every day'],correct:1,why:'Likes are attention, not proof that the whole offer works. Check whether the right people see a relevant offer, understand it, trust it and can complete an order.'}
    },
    {
      title:'The digital ecosystem: every channel has a job.', short:'Map the digital ecosystem',category:'THE ONLINE WORLD',time:'15–20 MIN',
      intro:'Digital marketing is not one website or one social app. It is a connected environment of websites, search engines, social platforms, email, messaging, content, marketplaces, analytics tools and paid media. The goal is to make the customer experience feel connected, not to appear everywhere.',
      body:`
        <h3>Think in systems, not isolated posts</h3><p>A person might discover a bakery from a map listing, look at its website, see a review, ask a question through messaging and finally place an order. Each interaction is a <strong>touchpoint</strong>. If the opening hours differ across pages or the menu link is broken, the system feels unreliable. Digital marketing connects these touchpoints so people can move from discovery to action with less confusion.</p>
        <figure class="m1x-diagram"><figcaption>A SIMPLE DIGITAL MARKETING ECOSYSTEM</figcaption><svg class="m1x-svg" viewBox="0 0 720 340" role="img" aria-label="Customer at center connected to website, search, social, email, reviews and analytics"><g fill="none" stroke="#b8b2e3" stroke-width="3"><path d="M360 166 L130 70 M360 166 L360 48 M360 166 L590 70 M360 166 L130 265 M360 166 L590 265 M360 166 L360 290"/></g><circle cx="360" cy="166" r="70" fill="#312e81"/><text x="360" y="159" fill="#fff" font-size="18" text-anchor="middle" font-weight="700">CUSTOMER</text><text x="360" y="182" fill="#ffd166" font-size="12" text-anchor="middle">Need · Trust · Action</text><g text-anchor="middle" font-weight="700"><rect x="45" y="35" width="170" height="68" rx="13" fill="#e7f6f2"/><text x="130" y="63" fill="#147664" font-size="15">WEBSITE</text><text x="130" y="83" fill="#4a796f" font-size="10">Your online home</text><rect x="275" y="10" width="170" height="68" rx="13" fill="#fff2d5"/><text x="360" y="38" fill="#8c651b" font-size="15">SEARCH</text><text x="360" y="58" fill="#947b4a" font-size="10">Answer active needs</text><rect x="505" y="35" width="170" height="68" rx="13" fill="#ffece9"/><text x="590" y="63" fill="#a34c42" font-size="15">SOCIAL</text><text x="590" y="83" fill="#a36c66" font-size="10">Discovery & community</text><rect x="45" y="231" width="170" height="68" rx="13" fill="#f0edff"/><text x="130" y="259" fill="#51499d" font-size="15">EMAIL / CRM</text><text x="130" y="279" fill="#736eaa" font-size="10">Permission-based follow-up</text><rect x="505" y="231" width="170" height="68" rx="13" fill="#eaf4ff"/><text x="590" y="259" fill="#3c6892" font-size="15">REVIEWS</text><text x="590" y="279" fill="#617f9e" font-size="10">Experience & reputation</text><rect x="275" y="263" width="170" height="68" rx="13" fill="#fff0e9"/><text x="360" y="291" fill="#9b5948" font-size="15">ANALYTICS</text><text x="360" y="311" fill="#9e756a" font-size="10">Learn what happened</text></g></svg><p class="m1x-diagram-note">A conceptual map. The right mix depends on the audience, offer, location, resources and goal.</p></figure>
        <h3>Owned, paid, earned and shared media</h3><p>A useful planning model separates media by the kind of control or access a business has. The categories can overlap in real campaigns, so use them as a thinking aid rather than rigid boxes.</p>
        <div class="m1x-cards-2">
          <article class="m1x-concept-card"><span>🏠</span><b>Owned</b><p>Assets the business controls, such as its website, its own content library and a permission-based email list. The business still depends on hosting, providers and tools, but it has more direct control over the asset.</p></article>
          <article class="m1x-concept-card"><span>💳</span><b>Paid</b><p>Reach or placement bought through advertising, sponsorships or paid creator partnerships. Payment can help distribute a message, but does not guarantee attention, trust or sales.</p></article>
          <article class="m1x-concept-card"><span>⭐</span><b>Earned</b><p>Attention others choose to give: editorial mentions, independent recommendations, reviews and word of mouth. It cannot be demanded or fully controlled.</p></article>
          <article class="m1x-concept-card"><span>🤝</span><b>Shared</b><p>Content and conversations shared through social networks and communities. Other people can add context, questions and opinions that the brand cannot completely control.</p></article>
        </div>
        <p>For example, the bakery owns its website; it pays for a local ad; a food writer independently mentions it; and customers share a photo. A healthy plan does not rely entirely on one rented platform. Platform rules, algorithms, account access and prices can change.</p>
        <h3>What does a website actually do?</h3><p>A website can act as the place where important information is organised: menu, prices, location, opening times, ingredients, ordering instructions, contact details, accessibility information and policies. Social posts can attract attention, but a clear website or landing page helps people verify details and take the next step. A website is not automatically effective: it still needs useful content, clear navigation, mobile usability and working forms or links.</p>
        <h3>Search and social do different jobs</h3><div class="m1x-table-wrap"><table class="m1x-content-table"><thead><tr><th>Route</th><th>Typical customer situation</th><th>Useful business response</th></tr></thead><tbody><tr><td>Search</td><td>“I need a bakery near me now.”</td><td>Accurate location, hours, menu, reviews and clear next step.</td></tr><tr><td>Social discovery</td><td>“That breakfast box looks interesting.”</td><td>Useful, engaging content with honest details and a route to learn more.</td></tr><tr><td>Email</td><td>“I want updates from a business I already chose to hear from.”</td><td>Relevant, expected messages with a clear unsubscribe option.</td></tr><tr><td>Website</td><td>“I want to check the details before I decide.”</td><td>Fast, readable, trustworthy information and a simple action.</td></tr></tbody></table></div>
        <div class="m1x-analogy"><b>Think of a high street 🏬</b><p>The website is like your shop. Search is like a directory sign helping people find you. Social is like joining local conversations. Email is like a notice sent to people who asked to receive it. Reviews are like customers telling others what their experience was. Every part has a role.</p></div>
        <h3>Map your own ecosystem</h3><p>For any business, write down: (1) where new people discover it, (2) where they check details, (3) where they ask questions, (4) where they buy or book, and (5) how the business keeps in touch—with permission. Then look for gaps. If there is no clear route from a social post to a menu, the journey may break.</p>`,
      check:{q:'Which statement about a business social-media page is most accurate?',options:['It is fully owned by the business because the business posts there','The business controls its posts, but the platform controls its rules, features and access','It replaces the need for a website in every situation'],correct:1,why:'A business can control the content it publishes, but the platform controls the service. A business should not confuse access to a platform with owning the platform.'}
    },
    {
      title:'Audience research: stop guessing, start listening.',short:'Research real customers',category:'PEOPLE FIRST',time:'20–25 MIN',
      intro:'An audience is not just an age range or a follower count. It is a group of people with a context, needs, motivations, barriers and behaviours. The more carefully you understand those things, the more relevant your offer and communication can become.',
      body:`
        <h3>Why “everyone” is not a useful target</h3><p>When a business says “our audience is everyone who likes food”, it has not made a useful decision. A busy office worker looking for a quick breakfast, a parent planning a weekend celebration and a student with a tight budget may all like food—but they have different needs, decision factors, budgets and buying moments. A clear audience helps a business make choices about the product, the message and where to show up.</p>
        <h3>Four common ways to segment an audience</h3><div class="m1x-cards-2"><article class="m1x-concept-card"><b>📍 Geographic</b><p>Location, neighbourhood, travel distance, climate or local context. Example: people who can realistically collect from the bakery.</p></article><article class="m1x-concept-card"><b>👤 Demographic</b><p>Age group, life stage, household, occupation or other measurable population traits. Use only when genuinely relevant and avoid stereotypes.</p></article><article class="m1x-concept-card"><b>💭 Psychographic</b><p>Interests, values, attitudes, motivations and preferences. Example: people who value locally made food.</p></article><article class="m1x-concept-card"><b>🛒 Behavioural</b><p>Actions and patterns: purchase frequency, browsing, product usage, loyalty, timing or response to offers.</p></article></div>
        <p>These are lenses, not labels to blindly assign to individuals. A useful segment often combines more than one. For example: “people who work within a short walk of the bakery, buy breakfast on weekdays and value speed” contains location, behaviour and motivation.</p>
        <h3>Look at alternatives—not only named competitors</h3><p>A customer compares your offer with more than another business. They may choose a supermarket, make breakfast at home, skip breakfast or use a delivery app. These are all alternatives. A simple competitor scan can compare what each option offers, who it serves, price range, convenience, proof and possible gaps. Use public information respectfully. The goal is to understand the choice customers face—not copy another business or make unfair claims about it.</p>
        <div class="m1x-table-wrap"><table class="m1x-content-table"><thead><tr><th>Alternative</th><th>Possible strength</th><th>Question Maple Lane should investigate</th></tr></thead><tbody><tr><td>Nearby café</td><td>Established local habit and seating.</td><td>Could a pre-order option solve a different convenience need?</td></tr><tr><td>Supermarket bakery</td><td>One-stop shopping and broad availability.</td><td>Does freshness, specialisation or pickup fit a segment better?</td></tr><tr><td>Breakfast at home</td><td>Low travel and familiar routine.</td><td>What makes an outside purchase worth the time and cost?</td></tr></tbody></table></div>
        <h3>Use needs and “jobs to be done” thinking</h3><p>A customer is not buying a product in a vacuum. They are trying to make progress in a situation. Ask: <strong>What is this person trying to get done?</strong> A customer may not simply want a breakfast box; they may want to avoid skipping breakfast before a busy shift, bring something easy to a team meeting or enjoy a fresh treat without baking at home. The situation explains the need more clearly than a generic demographic label.</p>
        <div class="m1x-definition"><b>A useful audience statement</b><p>“[A specific group] in [a relevant context] wants to [make progress / solve a problem] but finds [barrier] difficult. They value [desired outcome].”</p></div>
        <div class="m1x-example"><span>MAPLE LANE · PRACTICE AUDIENCE</span><p>People who work within a short distance of Maple Lane and need a convenient weekday breakfast. They value knowing what is included, how much it costs and whether collection will be quick. Possible barriers: unclear menu, uncertainty about collection time and not knowing whether an item suits dietary needs. This is a working hypothesis to validate—not a claim about every local worker.</p></div>
        <h3>Build a useful persona without inventing a fake person</h3><p>A persona is a research-informed summary of a relevant audience pattern. It is not a fictional biography designed to look impressive. Give it a label based on the need, show the context and evidence, and clearly mark any assumptions.</p>
        <div class="m1x-definition"><b>Sample persona card · illustrative only</b><p><strong>“The time-pressed weekday customer”</strong><br>Context: works nearby and has limited time in the morning.<br>Goal: get a fresh breakfast without a long wait.<br>Decision factors: location, opening hours, price, ingredients and pickup speed.<br>Questions: Can I order ahead? What is included? Is the collection time reliable?<br>Evidence still needed: short interviews, actual questions received and observed orders.</p></div>
        <h3>How to do beginner-friendly customer research</h3><div class="m1x-steps"><div class="m1x-step"><div><b>Observe existing evidence</b><p>Read genuine customer questions, reviews, website search queries, support messages and sales patterns. Remove or protect personal information before analysing.</p></div></div><div class="m1x-step"><div><b>Talk to people respectfully</b><p>Ask a small number of relevant people open questions. Do not pressure them or collect information you do not need.</p></div></div><div class="m1x-step"><div><b>Look for repeated themes</b><p>Separate a single opinion from a recurring pattern. Record what people said, not only what you expected to hear.</p></div></div><div class="m1x-step"><div><b>Test a small improvement</b><p>Change one part of the offer or information, then observe whether the barrier becomes smaller.</p></div></div></div>
        <h3>Questions that reveal more than “Would you buy this?”</h3><ul class="m1x-list"><li>Tell me about the last time you needed this kind of product or service.</li><li>What were you trying to do at that moment?</li><li>What did you compare before choosing?</li><li>What nearly stopped you from buying or enquiring?</li><li>What information would have made the decision easier?</li><li>What happened after you purchased it?</li></ul>
        <p>Avoid leading questions such as “You love our new menu, don't you?” Better research gives people room to disagree. Also avoid collecting sensitive data just because a tool makes it possible. Explain why information is needed, ask permission where required, protect it and follow applicable privacy rules.</p>
        <h3>Research quality checklist</h3><ul class="m1x-list"><li>Is this based on observed evidence or only my assumption?</li><li>Am I describing a need and context rather than stereotyping?</li><li>Could the person reasonably access and use this offer?</li><li>Have I included people with different abilities, budgets and circumstances where relevant?</li><li>What evidence would change my mind?</li></ul>`,
      check:{q:'Which is the strongest research question for understanding customer behaviour?',options:['Would you like our bakery?','Why are you not following us on Instagram?','Tell me about the last time you bought breakfast before work. What did you need and how did you choose?'],correct:2,why:'It asks about a real past event and invites context. The other questions are leading or focus on a platform before understanding the need.'}
    },
    {
      title:'The customer journey: make every step feel easier.',short:'Customer journey & funnel',category:'THE CUSTOMER PATH',time:'20 MIN',
      intro:'Most customers do not see a post and instantly buy. They may notice a need, discover options, compare details, ask someone, return later and only then decide. After buying, the experience influences whether they come back or recommend the business.',
      body:`
        <h3>Journey and funnel: related but not identical</h3><p>A <strong>customer journey</strong> describes the experience and touchpoints a person moves through. A <strong>funnel</strong> is a simplified planning or measurement model showing how a larger group may narrow toward a chosen action. A funnel is useful for spotting drop-offs, but it should not be mistaken for the exact path every human follows.</p>
        <figure class="m1x-diagram"><figcaption>A BEGINNER-FRIENDLY JOURNEY MODEL</figcaption><svg class="m1x-svg" viewBox="0 0 720 255" role="img" aria-label="Five-stage customer journey from awareness through consideration, action, experience and advocacy"><g><rect x="10" y="38" width="130" height="125" rx="15" fill="#eeeaff"/><rect x="153" y="38" width="130" height="125" rx="15" fill="#e6f4ff"/><rect x="296" y="38" width="130" height="125" rx="15" fill="#fff2d4"/><rect x="439" y="38" width="130" height="125" rx="15" fill="#e8f7f1"/><rect x="582" y="38" width="128" height="125" rx="15" fill="#ffece9"/></g><g text-anchor="middle" font-weight="700"><g fill="#594e9d"><text x="75" y="79" font-size="14">AWARENESS</text><text x="75" y="106" font-size="10">Discover a need</text><text x="75" y="123" font-size="10">or a business</text></g><g fill="#3f719d"><text x="218" y="79" font-size="14">CONSIDER</text><text x="218" y="106" font-size="10">Compare options</text><text x="218" y="123" font-size="10">and reduce doubt</text></g><g fill="#916b1d"><text x="361" y="79" font-size="14">ACTION</text><text x="361" y="106" font-size="10">Enquire, book</text><text x="361" y="123" font-size="10">or purchase</text></g><g fill="#23715f"><text x="504" y="79" font-size="14">EXPERIENCE</text><text x="504" y="106" font-size="10">Use the product</text><text x="504" y="123" font-size="10">and get support</text></g><g fill="#a64e45"><text x="646" y="79" font-size="14">ADVOCACY</text><text x="646" y="106" font-size="10">Return or share</text><text x="646" y="123" font-size="10">an honest view</text></g></g><g fill="#8c86b9" font-size="23" text-anchor="middle"><text x="146" y="105">›</text><text x="289" y="105">›</text><text x="432" y="105">›</text><text x="575" y="105">›</text></g><text x="360" y="210" text-anchor="middle" fill="#6e698e" font-size="12">Real journeys can loop, pause, skip stages or begin again.</text></svg><p class="m1x-diagram-note">Use this map to plan helpful information at each stage—not to force people through a rigid script.</p></figure>
        <h3>What might a person need at each stage?</h3><div class="m1x-table-wrap"><table class="m1x-content-table"><thead><tr><th>Stage</th><th>Customer question</th><th>Helpful touchpoint</th><th>Possible measure</th></tr></thead><tbody><tr><td>Awareness</td><td>“What options exist near me?”</td><td>Useful social content, search visibility, local recommendations.</td><td>Relevant reach, search impressions, new visitors.</td></tr><tr><td>Consideration</td><td>“Is this right for me?”</td><td>Menu, prices, reviews, clear photos, ingredients, FAQs.</td><td>Menu views, useful clicks, enquiry starts.</td></tr><tr><td>Action</td><td>“How do I order?”</td><td>Simple form, clear phone number, booking or checkout steps.</td><td>Completed enquiries, bookings or orders.</td></tr><tr><td>Experience</td><td>“Did the promise match reality?”</td><td>Reliable product, collection, delivery and support.</td><td>Complaints, satisfaction feedback, repeat purchase.</td></tr><tr><td>Advocacy</td><td>“Would I recommend this?”</td><td>Good service, optional review request, referral experience.</td><td>Repeat customers, referrals, review themes.</td></tr></tbody></table></div>
        <h3>Friction: the hidden reason people leave</h3><p><strong>Friction</strong> is anything that makes the next step confusing, slow, risky or difficult. Examples include a slow page, missing price, tiny mobile text, a broken link, surprise fees, unclear collection times or a form that asks for unnecessary details. Improving marketing is not always about adding more posts. Sometimes the best improvement is removing one obstacle.</p>
        <div class="m1x-example"><span>MAPLE LANE JOURNEY</span><p>A nearby customer sees a breakfast-box photo. They tap the menu link but cannot find the price. They leave. A new campaign would not fix this problem by itself. The smarter action is to make the price and collection details clear, then test whether more people complete an enquiry.</p></div>
        <h3>Journey mapping exercise</h3><p>Choose one customer type. For each stage, write: what they are thinking, what they need to know, where they might look, what could block them and what helpful next step the business can provide. Do not assume the journey is linear. A person may compare options, leave, ask a friend and return a week later.</p>
        <h3>Do not confuse the journey with a sales script</h3><p>The purpose of journey mapping is to improve the experience and answer real questions—not pressure someone into buying. A good business gives accurate information, respects “no”, makes pricing and terms clear and supports customers after the transaction.</p>`,
      check:{q:'People visit the bakery menu page but leave because prices and pickup times are missing. What is the best first improvement?',options:['Increase follower count','Make the menu page clearer and show relevant price and collection details','Send more promotional messages to everyone'],correct:1,why:'The journey has a consideration-stage information gap. Removing the friction can help people make an informed decision.'}
    },
    {
      title:'Channels, platforms and formats: choose with purpose.',short:'Channels, platforms & formats',category:'DISTRIBUTION',time:'15–20 MIN',
      intro:'These three words are often mixed up. A channel is the broad route used to reach or communicate with people. A platform is a specific service or tool. A format is the shape of the content. Separating them makes a marketing plan easier to explain.',
      body:`
        <h3>Channel vs platform vs format</h3><div class="m1x-definition"><b>Remember this simple hierarchy</b><p><strong>Channel = route.</strong> <strong>Platform = specific place or service.</strong> <strong>Format = shape of the message.</strong></p></div>
        <div class="m1x-table-wrap"><table class="m1x-content-table"><thead><tr><th>Channel</th><th>Platform / service example</th><th>Format example</th></tr></thead><tbody><tr><td>Social media</td><td>Instagram, YouTube, LinkedIn</td><td>Short video, carousel, story, post</td></tr><tr><td>Search</td><td>Google Search, Bing</td><td>Organic result, text ad, product result</td></tr><tr><td>Email</td><td>Email service or marketing platform</td><td>Newsletter, welcome email, reminder</td></tr><tr><td>Website</td><td>Business website or landing page</td><td>Product page, menu page, article, form</td></tr><tr><td>Messaging</td><td>A messaging service</td><td>Customer-support reply, order update</td></tr></tbody></table></div>
        <p>Example: “We will use a short Instagram Reel” means the broad channel is social media, the platform is Instagram and the format is a Reel. In a real plan, you should also state the audience, purpose, message and action you hope the content helps with.</p>
        <h3>Inbound and outbound: who starts the interaction?</h3><p><strong>Inbound marketing</strong> aims to make useful information or experiences available so people can discover and approach the business when they have an interest or need. Search-friendly information, useful articles, resources and opt-in email content can support inbound activity. <strong>Outbound marketing</strong> is when the business initiates the message or places it in front of an audience, such as an advertisement or direct outreach. A channel is not automatically inbound or outbound in every situation: context, permission and the way it is used matter. The American Marketing Association provides a useful overview of these terms in its <a href="https://www.ama.org/the-definition-of-marketing-what-is-marketing/" target="_blank" rel="noopener">marketing definitions resource ↗</a>.</p>
        <h3>Organic and paid distribution</h3><p><strong>Organic</strong> means reach or activity that is not purchased as an ad placement. It may still require staff time, tools and production costs. <strong>Paid</strong> means money is spent to distribute or place the message. Paid reach can be useful for testing or scale, but it does not guarantee that people will care or convert. Both need a relevant offer and a clear destination.</p>
        <h3>Common channel families</h3><div class="m1x-cards-2"><article class="m1x-concept-card"><b>🔍 Search</b><p>Useful when people actively look for an answer, product or nearby service. Make information relevant, accessible and accurate.</p></article><article class="m1x-concept-card"><b>📱 Social</b><p>Useful for discovery, storytelling, community interaction and visual demonstrations. Requires consistency and conversation.</p></article><article class="m1x-concept-card"><b>🌐 Website / landing page</b><p>Useful for explaining an offer, answering questions, building trust and enabling a specific action.</p></article><article class="m1x-concept-card"><b>✉️ Email</b><p>Useful for expected updates and relationship-building with people who have given appropriate permission.</p></article><article class="m1x-concept-card"><b>🗣️ Reviews / referrals</b><p>Useful signals from customer experiences. Invite honest feedback; never fabricate or buy fake reviews.</p></article><article class="m1x-concept-card"><b>🤝 Partnerships</b><p>Useful when another organisation or creator already serves a relevant audience. Be transparent about paid relationships.</p></article></div>
        <h3>How to choose a channel: a six-question filter</h3><div class="m1x-steps"><div class="m1x-step"><div><b>Audience fit</b><p>Do relevant people use this route when they have this need? What evidence supports that?</p></div></div><div class="m1x-step"><div><b>Intent and context</b><p>Are people discovering, comparing, asking or buying? Does the channel fit that moment?</p></div></div><div class="m1x-step"><div><b>Message fit</b><p>Can the channel communicate the information clearly in a useful format?</p></div></div><div class="m1x-step"><div><b>Destination</b><p>Where will the person go next? Is that page, form or contact route ready?</p></div></div><div class="m1x-step"><div><b>Capacity and cost</b><p>Can the business create and maintain useful content here without neglecting service quality?</p></div></div><div class="m1x-step"><div><b>Measurement</b><p>Can you observe the action that matters, while respecting privacy and data rules?</p></div></div></div>
        <div class="m1x-analogy"><b>Don't buy every tool in the shop 🧰</b><p>A carpenter does not use every tool on every job. They choose the right tool for the material and task. Marketers should do the same with channels. Being present on ten platforms is not automatically better than being genuinely useful on two.</p></div>
        <h3>Build a simple channel plan</h3><p>Start with one primary channel that fits the customer's intent and one supporting channel if it adds a clear role. Write down the reason for each choice. Example: a local search listing helps people with immediate local intent find practical details; social content shows the product and answers common questions. The website holds the current menu and order instructions. Each route has a distinct job.</p>
        <p>Never choose a channel because someone claims it is guaranteed to go viral or because a competitor is using it. Platforms change. Recheck audience behaviour and your own results over time.</p>`,
      check:{q:'A local plumber wants to reach people actively searching for emergency repairs. Which channel is a logical first route to evaluate?',options:['A long entertainment video series with no service details','Search, with accurate service area, contact information and a clear landing page','A general follower-growth contest'],correct:1,why:'The customer has immediate intent. Search can meet that need, provided the business can serve the area and the destination answers the urgent questions clearly.'}
    },
    {
      title:'Value propositions and content: say something useful.',short:'Messages, offers & content',category:'COMMUNICATION',time:'20 MIN',
      intro:'Once you understand the audience and choose a relevant channel, you need a message. Strong messages explain who the offer helps, what useful outcome it supports, why it may be credible and what the person can do next.',
      body:`
        <h3>Features are not the same as benefits</h3><p>A <strong>feature</strong> describes what something has or does. A <strong>benefit</strong> explains why that feature matters to a particular person. “Made fresh at 6 am” is a feature. “A fresh breakfast ready for your morning collection” translates that feature into a practical benefit. The same feature can matter differently to different audiences, so the benefit must be connected to a real need.</p>
        <div class="m1x-table-wrap"><table class="m1x-content-table"><thead><tr><th>Feature</th><th>Possible benefit</th><th>Proof / detail that helps</th></tr></thead><tbody><tr><td>Pre-order option</td><td>Can reduce waiting at collection.</td><td>Clear cutoff time and accurate pickup process.</td></tr><tr><td>Ingredient list</td><td>Helps customers check what is included.</td><td>Current, complete ingredient and allergen information.</td></tr><tr><td>Neighbourhood pickup</td><td>May be convenient for nearby customers.</td><td>Exact address, collection window and directions.</td></tr></tbody></table></div>
        <h3>Write a simple value proposition</h3><p>A value proposition is a clear statement of the value an offer aims to provide. It should not be a vague slogan or an unsupported superlative. A beginner-friendly structure is:</p><div class="m1x-definition"><b>Message formula</b><p>For <strong>[specific audience]</strong> who need <strong>[need / outcome]</strong>, <strong>[offer]</strong> helps by <strong>[useful benefit]</strong>. Unlike <strong>[relevant alternative]</strong>, it offers <strong>[credible difference or proof]</strong>.</p></div>
        <div class="m1x-example"><span>MAPLE LANE · SAMPLE VALUE PROPOSITION</span><p>For nearby workers who want a fresh breakfast without a long morning wait, Maple Lane's pre-order breakfast boxes offer a ready-to-collect option with a clear menu and collection window. The claim should only be used if the bakery can reliably deliver that experience.</p></div>
        <h3>Positioning, value proposition and differentiation</h3><p><strong>Positioning</strong> is the place an offer aims to occupy in the minds of a chosen audience compared with alternatives. A <strong>value proposition</strong> explains the useful value an offer aims to provide. A <strong>differentiator</strong> is a credible way the offer is distinct or especially suitable. Do not claim “unique” or “the best” unless you can support the statement and define what it means.</p><div class="m1x-analogy"><b>Three different questions</b><p>Positioning: “How should the right people understand us compared with alternatives?” Value proposition: “What value do we promise to provide?” Differentiation: “What real feature, experience or proof makes this offer a relevant choice?”</p></div>
        <h3>Message ingredients: clarity beats cleverness</h3><ul class="m1x-list"><li><strong>Audience:</strong> who is this for?</li><li><strong>Need:</strong> what situation or problem matters?</li><li><strong>Benefit:</strong> what useful result might the offer support?</li><li><strong>Proof:</strong> what real evidence supports the claim—details, demonstration, credentials or honest reviews?</li><li><strong>Action:</strong> what should the person do next?</li></ul>
        <h3>Content should match the customer's question</h3><p>Content is not just text or video. It is information or an experience created for a purpose. A useful content plan answers questions at different stages of the customer journey.</p>
        <figure class="m1x-diagram"><figcaption>CONTENT IDEAS ACROSS A CUSTOMER JOURNEY</figcaption><svg class="m1x-svg" viewBox="0 0 700 220" role="img" aria-label="Content examples from awareness to decision and retention"><g><rect x="10" y="20" width="210" height="165" rx="15" fill="#eeeaff"/><rect x="245" y="20" width="210" height="165" rx="15" fill="#fff2d5"/><rect x="480" y="20" width="210" height="165" rx="15" fill="#e8f7f1"/></g><g text-anchor="middle"><text x="115" y="52" fill="#51499e" font-size="15" font-weight="700">DISCOVERY</text><text x="115" y="85" fill="#5d5879" font-size="11">Helpful tips</text><text x="115" y="106" fill="#5d5879" font-size="11">Behind-the-scenes</text><text x="115" y="127" fill="#5d5879" font-size="11">Local stories</text><text x="350" y="52" fill="#916b1d" font-size="15" font-weight="700">EVALUATION</text><text x="350" y="85" fill="#746349" font-size="11">Menu and pricing</text><text x="350" y="106" fill="#746349" font-size="11">FAQs and comparisons</text><text x="350" y="127" fill="#746349" font-size="11">Ingredients and proof</text><text x="585" y="52" fill="#23715f" font-size="15" font-weight="700">ACTION + CARE</text><text x="585" y="85" fill="#58776d" font-size="11">Ordering instructions</text><text x="585" y="106" fill="#58776d" font-size="11">Order updates</text><text x="585" y="127" fill="#58776d" font-size="11">Helpful follow-up</text></g><g fill="#8b85b4" font-size="23" text-anchor="middle"><text x="232" y="111">›</text><text x="467" y="111">›</text></g></svg><p class="m1x-diagram-note">Create the information the customer needs at that moment. Do not publish content just to fill a calendar.</p></figure>
        <h3>What makes a good call to action (CTA)?</h3><p>A <strong>call to action</strong> tells someone the next step. “Click here” is vague. “View this week's menu”, “Check collection times” or “Ask about ingredients” makes the destination clearer. A good CTA is specific, honest and appropriate to the person's stage. Do not use false urgency such as a fake countdown or hide important terms.</p>
        <h3>Content quality checklist</h3><ul class="m1x-list"><li>Does it answer a real audience question?</li><li>Is it accurate, current, readable and easy to scan?</li><li>Does the image or video have context and suitable alternative text where needed?</li><li>Are price, terms, limitations and important details clear?</li><li>Can the person take the next step without hunting for it?</li></ul>
        <p>Search guidance also emphasises content that is helpful, reliable and created for people. Do not write only to manipulate a ranking or repeat what everyone else says. <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener">Explore Google's people-first content guidance ↗</a></p>`,
      check:{q:'Which message is strongest for a customer who wants to avoid a long wait?',options:['The most amazing bakery in the universe!','Our breakfast boxes can be pre-ordered for a stated collection window. View the menu and pickup details.','We are better than every competitor. Buy now!'],correct:1,why:'It identifies a practical benefit and provides useful details and a relevant next action. The other options are vague or unsupported.'}
    },
    {
      title:'Goals and strategy: decide what success means.',short:'Goals, strategy & SMART',category:'PLANNING',time:'20 MIN',
      intro:'Marketing without a goal becomes a list of random activities. A good objective gives the team a result to work toward, a way to measure it and a time to review progress. It also helps you decide what not to do.',
      body:`
        <h3>Goal, objective, strategy, tactic and KPI</h3><div class="m1x-table-wrap"><table class="m1x-content-table"><thead><tr><th>Planning word</th><th>Question it answers</th><th>Bakery example</th></tr></thead><tbody><tr><td>Goal</td><td>What broad business outcome matters?</td><td>Grow weekday breakfast sales sustainably.</td></tr><tr><td>Objective</td><td>What measurable result by when?</td><td>Generate 20 qualified breakfast-box enquiries in 30 days.</td></tr><tr><td>Strategy</td><td>What overall approach will help?</td><td>Make pre-ordering easier for nearby weekday workers.</td></tr><tr><td>Tactic</td><td>What specific action will we take?</td><td>Publish clear menu details and a local search campaign.</td></tr><tr><td>KPI</td><td>Which measure tells us whether progress is happening?</td><td>Qualified breakfast-box enquiries per 30-day period.</td></tr></tbody></table></div>
        <p>These terms are sometimes used differently by different organisations, but separating them helps a beginner move from vague ambition to practical work.</p>
        <h3>Use SMART as a quality check</h3><div class="m1x-cards-2"><article class="m1x-concept-card"><b>S · Specific</b><p>State exactly what should happen. “More growth” is not specific; “more qualified breakfast enquiries” is clearer.</p></article><article class="m1x-concept-card"><b>M · Measurable</b><p>Decide what evidence or number will show progress and how it will be counted.</p></article><article class="m1x-concept-card"><b>A · Achievable</b><p>Check resources, baseline, capacity, time and constraints. Avoid fantasy targets.</p></article><article class="m1x-concept-card"><b>R · Relevant</b><p>Connect the objective to a real business or customer outcome, not a vanity number.</p></article><article class="m1x-concept-card"><b>T · Time-bound</b><p>Set a clear period and review date so you know when to evaluate the result.</p></article></div>
        <div class="m1x-analogy"><b>Think of planning a trip 🧭</b><p>The destination is the goal. “Arrive in Jaipur by Friday evening” is a more specific objective. The route is the strategy. Booking a train is a tactic. Checking the arrival time is one measure. If you only say “let's travel more”, nobody knows what to do next.</p></div>
        <h3>Write a SMART objective step by step</h3><div class="m1x-steps"><div class="m1x-step"><div><b>Choose one business result</b><p>Enquiries, bookings, orders, repeat purchases or another result the business values.</p></div></div><div class="m1x-step"><div><b>Define the count precisely</b><p>What qualifies? A message, a completed form, a paid order or a relevant local customer? Avoid counting duplicates as separate outcomes unless that is intended.</p></div></div><div class="m1x-step"><div><b>Choose a realistic target and time</b><p>Use baseline data if available. If no baseline exists, call it a test target and review it rather than presenting it as a forecast.</p></div></div><div class="m1x-step"><div><b>Connect the target to a KPI</b><p>Write the formula, data source, owner and review frequency.</p></div></div></div>
        <div class="m1x-example"><span>MAPLE LANE · ILLUSTRATIVE OBJECTIVE</span><p>“Generate 20 qualified breakfast-box enquiries from the bakery's local service area over the next 30 days.” This is specific, countable, time-bound and linked to the business offer. Whether 20 is achievable must be checked against capacity and baseline evidence. It is not a promise or an industry benchmark.</p></div>
        <h3>Choose a KPI that matches the objective</h3><p>If the objective is enquiries, count qualified enquiries—not merely impressions. If the objective is repeat purchases, measure repeat purchase behaviour over a defined period. You may also track supporting measures such as page visits or click-through rate to understand what might influence the KPI.</p>
        <h3>Leading and lagging indicators</h3><p>A <strong>leading indicator</strong> can provide an earlier signal, such as menu-page visits or order-form starts. A <strong>lagging indicator</strong> records an outcome after it happens, such as completed paid orders or revenue. Neither type is automatically good or bad. Use early signals to diagnose and final outcomes to judge whether the activity delivered useful results.</p>
        <h3>When a target is missed</h3><p>Do not instantly blame the platform or spend more money. Check the objective definition, audience quality, offer, price, message, landing page, response time, seasonality, capacity and data quality. A missed target is information. It is an invitation to investigate—not proof that a learner or business has failed.</p>`,
      check:{q:'Which is the strongest SMART-style objective?',options:['Become famous in the city','Get more likes as soon as possible','Generate 20 qualified breakfast-box enquiries from the local service area within 30 days'],correct:2,why:'It specifies the intended action, who it should come from, the quantity and the time period. The target still needs a reality check against capacity and evidence.'}
    },
    {
      title:'Metrics and measurement: turn numbers into decisions.',short:'Metrics & analytics',category:'MEASUREMENT',time:'25 MIN',
      intro:'A metric is a defined number. Analytics is the process of examining data to understand patterns, answer questions and support decisions. A dashboard is not useful just because it contains colourful charts; it is useful when each number has a clear meaning and a decision it can inform.',
      body:`
        <h3>Start with a question, not a dashboard</h3><p>Before looking at numbers, write the question you are trying to answer. Examples: Are the right people finding the menu? Do they click the order button? How many complete an order? Are customers returning? Then identify the event or action that would answer that question.</p>
        <h3>Understand the most common beginner metrics</h3><div class="m1x-table-wrap"><table class="m1x-content-table"><thead><tr><th>Metric</th><th>Plain meaning</th><th>What to check</th></tr></thead><tbody><tr><td>Reach</td><td>Estimated number of distinct people/accounts exposed to content, as defined by the platform.</td><td>Definition varies by tool; do not confuse it with total impressions.</td></tr><tr><td>Impressions</td><td>How many times content or an ad was shown.</td><td>One person may generate multiple impressions.</td></tr><tr><td>Clicks</td><td>Number of recorded click actions.</td><td>Check whether clicks are link clicks, all clicks or another event.</td></tr><tr><td>CTR</td><td>Click-through rate: clicks divided by impressions, multiplied by 100.</td><td>Use matching definitions and a consistent reporting period.</td></tr><tr><td>Conversion rate</td><td>Share of a defined group that completed a chosen action.</td><td>State the action and denominator: visitors, sessions, leads or something else.</td></tr><tr><td>CPC</td><td>Cost per click: ad spend divided by recorded clicks.</td><td>Only compare like-for-like campaigns and click definitions.</td></tr><tr><td>CPA</td><td>Cost per acquisition/action: cost divided by the defined acquisitions.</td><td>Define acquisition clearly and include the costs relevant to the question.</td></tr><tr><td>AOV</td><td>Average order value: revenue divided by number of orders.</td><td>Specify whether refunds, tax, delivery or discounts are included.</td></tr><tr><td>ROAS</td><td>Return on ad spend: attributed revenue divided by ad spend.</td><td>It is not profit and depends on the attribution definition.</td></tr></tbody></table></div>
        <h3>Work through a sample funnel</h3><p>Suppose a fictional campaign has 1,000 website visits, 60 enquiries and 18 orders. These are invented teaching numbers. The point is to practise the formulas, not compare the business with an external benchmark.</p>
        <figure class="m1x-diagram"><figcaption>ILLUSTRATIVE FUNNEL · VISIT TO ORDER</figcaption><svg class="m1x-svg" viewBox="0 0 680 250" role="img" aria-label="Funnel chart showing 1000 visits, 60 enquiries and 18 orders"><polygon points="60,20 620,20 550,90 130,90" fill="#7067c1"/><polygon points="130,103 550,103 487,170 193,170" fill="#9a91d8"/><polygon points="193,183 487,183 443,235 237,235" fill="#18a994"/><g fill="#fff" text-anchor="middle" font-weight="700"><text x="340" y="50" font-size="19">1,000 VISITS</text><text x="340" y="75" font-size="11">100% of visits</text><text x="340" y="133" font-size="18">60 ENQUIRIES</text><text x="340" y="154" font-size="11">6% of visits</text><text x="340" y="210" font-size="17">18 ORDERS</text><text x="340" y="226" font-size="10">1.8% of visits</text></g></svg><p class="m1x-diagram-note">The shape is a visual aid; always read the labels and formula before interpreting a chart.</p></figure>
        <div class="m1x-definition"><b>Calculate the example</b><p>Enquiry rate = 60 ÷ 1,000 × 100 = <strong>6%</strong>.<br>Visit-to-order rate = 18 ÷ 1,000 × 100 = <strong>1.8%</strong>.<br>Enquiry-to-order rate = 18 ÷ 60 × 100 = <strong>30%</strong>.</p></div>
        <p>Notice that “conversion rate” can mean different things depending on the denominator and action. Always write the formula beside the label. Saying “conversion rate is 30%” without explaining that it means orders divided by enquiries can mislead someone who assumes it is orders divided by all visitors.</p>
        <h3>Why vanity metrics can distract you</h3><p>Followers, likes and views may help describe attention, but they do not automatically show the business achieved its objective. If the goal is paid orders, completed orders are closer to the outcome. You might still use reach or clicks to understand the early stages, but keep the final KPI connected to the goal.</p>
        <h3>ROAS is not profit: a simple cost example</h3><p>Imagine an order brings in ₹500 revenue. Ingredients, packaging and other variable costs for that order are ₹300. That leaves ₹200 before advertising and other business expenses. If the ad cost attributable to that order is also ₹200, the contribution left after those two items is ₹0—before fixed overhead, delivery, payment fees, tax and the owner's time. The ROAS is 500 ÷ 200 = 2.5×, but that does not mean the business made a profit. Revenue, margin, advertising cost and all other costs must be considered together.</p>
        <div class="m1x-definition"><b>Profit-thinking reminder</b><p>ROAS answers “How much attributed revenue was recorded per unit of ad spend?” It does not answer “How much money did the business keep?” Always include the cost structure and attribution limits before recommending a larger budget.</p></div>
        <h3>Attribution: be careful about claiming credit</h3><p>A person might see a social post, search the business later, read a review and then buy. Which touchpoint caused the sale? Analytics tools use different attribution methods and tracking rules to assign credit. A report is not the complete reality of a human decision. Treat attribution as a model, explain its limits, and avoid claiming that one ad caused every sale simply because it was the last recorded click.</p>
        <h3>Five checks before trusting a report</h3><ul class="m1x-list"><li>Is the metric definition clear?</li><li>Are the date range, currency, time zone and filters stated?</li><li>Are tracking links/events working and duplicates controlled?</li><li>Are you comparing similar audiences, channels and time periods?</li><li>Does the number help answer the business question—or is it just impressive?</li></ul>
        <p>Analytics products have their own event and metric definitions. For example, Google documents how its Analytics reporting metrics are calculated. Learn the specific definition inside the tool you are using rather than assuming every platform counts the same way. <a href="https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema" target="_blank" rel="noopener">Google Analytics metric reference ↗</a></p>`,
      check:{q:'A report says the conversion rate is 30%. What must you ask before interpreting it?',options:['What colour is the dashboard?','What exact action is counted, and what is the denominator?','How many followers does the company have?'],correct:1,why:'A rate is a ratio. Without the event definition and denominator, 30% is ambiguous and could describe very different things.'}
    },
    {
      title:'Testing, improvement and ethical marketing.',short:'Test, improve & act ethically',category:'BETTER DECISIONS',time:'20 MIN',
      intro:'A first campaign plan is a hypothesis, not a guarantee. Professional marketers observe what happens, investigate why, run sensible tests and improve. They also respect people: they communicate honestly, handle information carefully and design experiences that do not trick or exclude users.',
      body:`
        <h3>Use a simple test-and-learn loop</h3><div class="m1x-steps"><div class="m1x-step"><div><b>Observe</b><p>Describe what is happening with evidence. Example: visitors open the menu, but few tap the enquiry button.</p></div></div><div class="m1x-step"><div><b>Ask why</b><p>List possible explanations. Perhaps price, collection details, menu clarity or mobile layout is confusing. Do not jump to one explanation.</p></div></div><div class="m1x-step"><div><b>Make a hypothesis</b><p>State a testable idea: “If we show pickup times next to the menu, more relevant visitors may start an enquiry.”</p></div></div><div class="m1x-step"><div><b>Change one meaningful thing</b><p>Keep the audience, period and measurement as consistent as practical. Avoid changing many variables at once if you need to understand the effect.</p></div></div><div class="m1x-step"><div><b>Measure and learn</b><p>Compare results, check data quality and note limitations. Keep, revise or stop the change based on evidence.</p></div></div></div>
        <h3>What makes a fair A/B test?</h3><p>An A/B test compares two versions of an experience—Version A and Version B—while trying to keep other conditions comparable. For example, two subject lines may be tested with similar groups of email subscribers. The primary metric might be click-through rate, but the marketer should also check whether the test is large enough, whether the groups are comparable and whether the outcome matters to the business.</p>
        <div class="m1x-analogy"><b>Do not call every difference a “winner” 🏁</b><p>If one version gets 3 clicks and the other gets 4, that tiny difference may be random noise. Small samples are uncertain. Do not make strong claims from weak evidence. Record the sample size, time period and limitations. For a beginner exercise, you are learning the logic—not conducting a statistically conclusive experiment.</p></div>
        <h3>Test one clear hypothesis</h3><div class="m1x-definition"><b>Hypothesis template</b><p>“For <strong>[audience]</strong>, changing <strong>[one element]</strong> from <strong>[current version]</strong> to <strong>[new version]</strong> may improve <strong>[defined metric]</strong> because <strong>[reason based on evidence]</strong>.”</p></div>
        <h3>Ethical marketing is part of good marketing</h3><div class="m1x-cards-2"><article class="m1x-concept-card"><b>🧾 Be truthful</b><p>Do not invent testimonials, fake scarcity, hide costs or make claims you cannot support.</p></article><article class="m1x-concept-card"><b>🔐 Respect privacy</b><p>Collect only what you need, explain why, protect it, respect permissions and follow applicable laws.</p></article><article class="m1x-concept-card"><b>🤝 Disclose relationships</b><p>Make paid partnerships, gifts, affiliate links or other material connections clear to the audience.</p></article><article class="m1x-concept-card"><b>♿ Design accessibly</b><p>Use readable text, clear contrast, captions where needed, descriptive links and keyboard-friendly controls.</p></article></div>
        <h3>Trust is built in details</h3><ul class="m1x-list"><li>Show the real price and important conditions before a person commits.</li><li>Do not use pre-ticked boxes or confusing wording to obtain consent.</li><li>Make unsubscribe and preference controls understandable.</li><li>Do not buy fake reviews or pressure customers to post only positive feedback.</li><li>Correct misleading information when you find it.</li><li>Do not target people with sensitive assumptions or collect unnecessary personal information.</li></ul>
        <p>Advertising and endorsement rules differ by country and context. The FTC's guidance is one useful reference for understanding clear disclosures in the United States; it is not a substitute for checking the rules that apply where your campaign runs. <a href="https://www.ftc.gov/business-guidance/advertising-marketing/endorsements-influencers-reviews" target="_blank" rel="noopener">FTC guidance on endorsements and reviews ↗</a></p>
        <h3>When should you stop or change a campaign?</h3><p>Pause if the offer is inaccurate, the experience is broken, people are being misled, the budget is not controlled or the data cannot be trusted. Improve the customer experience before buying more attention. A responsible marketer knows when not to spend.</p>`,
      check:{q:'Your campaign result is poor and the order form is broken on phones. What should happen first?',options:['Increase ad spend to get more visitors','Fix the broken customer experience, check tracking and then reassess','Hide the form error and continue'],correct:1,why:'More traffic cannot repair a broken conversion path. Fix the experience and tracking before making more people encounter the problem.'}
    },
    {
      title:'Your first campaign: connect every decision.',short:'Build a complete campaign plan',category:'CAPSTONE PROJECT',time:'25–35 MIN',
      intro:'You have learned the building blocks. Now connect them into one focused plan. A good campaign brief is not a pile of tactics; it is a logical chain from customer evidence to a useful offer, a clear message, a suitable route and a measurable learning goal.',
      body:`
        <h3>The capstone scenario</h3><div class="m1x-example"><span>YOUR CLIENT · MAPLE LANE HOME BAKERY (FICTIONAL)</span><p>Maple Lane sells fresh breakfast boxes for local customers. The owner has limited time, a small experimental budget and a desire to receive more relevant enquiries and orders. There is no verified audience research or performance baseline yet. Your job is to plan a careful first campaign and state what must be checked before it launches.</p></div>
        <h3>See a worked example—from brief to plan</h3><div class="m1x-table-wrap"><table class="m1x-content-table"><thead><tr><th>Planning element</th><th>Worked example</th><th>Why it matters</th></tr></thead><tbody><tr><td>Business goal</td><td>Increase sustainable weekday breakfast orders.</td><td>Connects marketing to a business outcome.</td></tr><tr><td>Audience hypothesis</td><td>People working close enough to collect during weekday mornings.</td><td>Defines who the offer is designed for; must be validated.</td></tr><tr><td>Customer need</td><td>Fresh breakfast that is convenient and predictable.</td><td>Explains the reason the offer could matter.</td></tr><tr><td>Offer</td><td>Pre-order breakfast box with clear contents and collection window.</td><td>Turns the idea into something specific.</td></tr><tr><td>Message</td><td>“Fresh breakfast, ready when you are.” Then show menu, price and pickup details.</td><td>Communicates a benefit and supports trust.</td></tr><tr><td>Primary route</td><td>Accurate local search information and a mobile-friendly menu/order page.</td><td>Meets people who may already be looking for a local option.</td></tr><tr><td>Support route</td><td>Useful social content answering common menu questions.</td><td>Helps discovery and sends people to current details.</td></tr><tr><td>Objective</td><td>Set a 30-day enquiry target only after checking baseline and capacity.</td><td>Avoids inventing a guaranteed outcome.</td></tr><tr><td>KPI</td><td>Qualified local enquiries; secondary measures include order completions and cost per enquiry.</td><td>Shows whether the plan is producing relevant action.</td></tr><tr><td>Test</td><td>Improve menu and pickup clarity, then observe enquiry completion.</td><td>Tests a likely friction point before scaling spend.</td></tr></tbody></table></div>
        <h3>Build the logic chain</h3><figure class="m1x-diagram"><figcaption>THE CAMPAIGN LOGIC CHAIN</figcaption><svg class="m1x-svg" viewBox="0 0 720 155" role="img" aria-label="Five connected stages: customer insight, offer, message, channel, measurement"><g><rect x="5" y="25" width="125" height="88" rx="12" fill="#eeeaff"/><rect x="150" y="25" width="125" height="88" rx="12" fill="#e7f5ff"/><rect x="295" y="25" width="125" height="88" rx="12" fill="#fff2d5"/><rect x="440" y="25" width="125" height="88" rx="12" fill="#e7f6f1"/><rect x="585" y="25" width="130" height="88" rx="12" fill="#ffece9"/></g><g fill="#4b467c" font-size="13" font-weight="700" text-anchor="middle"><text x="67" y="62">CUSTOMER</text><text x="67" y="81">INSIGHT</text><text x="212" y="62">USEFUL</text><text x="212" y="81">OFFER</text><text x="357" y="62">CLEAR</text><text x="357" y="81">MESSAGE</text><text x="502" y="62">SUITABLE</text><text x="502" y="81">CHANNEL</text><text x="650" y="62">MEASURE</text><text x="650" y="81">& LEARN</text></g><g fill="#8c86b9" font-size="22" text-anchor="middle"><text x="140" y="80">›</text><text x="285" y="80">›</text><text x="430" y="80">›</text><text x="575" y="80">›</text></g></svg><p class="m1x-diagram-note">If one link is weak, improve that link before adding more tactics.</p></figure>
        <h3>Launch-readiness checklist</h3><ul class="m1x-list"><li>Is the product, price, availability and service area confirmed?</li><li>Is the audience hypothesis supported by at least some evidence?</li><li>Does the landing page work on a phone and explain the next step?</li><li>Are contact details, opening hours, menu and policies accurate?</li><li>Is the tracking event defined and tested?</li><li>Is there a spending limit, a review date and a stop condition?</li><li>Are privacy, consent, disclosures and accessibility considered?</li><li>Can the business actually fulfil the demand if the campaign works?</li></ul>
        <h3>How to present your plan professionally</h3><p>Keep your brief short enough for an owner to understand, but detailed enough to act on. State assumptions, evidence, risks and what you still need to learn. Separate facts from hypotheses. Never promise a specific number of sales, guaranteed search position or guaranteed income. A strong beginner project demonstrates clear thinking, not exaggerated confidence.</p>
        <div class="m1x-definition"><b>Your portfolio reflection</b><p>After completing the form below, write three notes in your own words: (1) the most important thing you learned about the customer, (2) the biggest risk or assumption in your plan, and (3) the next piece of evidence you would collect. These reflections will help you explain your decisions in future projects and interviews.</p></div>
        <p><strong>Congratulations:</strong> when you can explain why your audience, offer, message, channel and metric belong together, you are no longer just memorising marketing vocabulary. You are beginning to think like a marketer.</p>`,
      check:{q:'What makes a campaign brief coherent?',options:['It lists many platforms and posting times','It connects a researched audience need to an offer, message, channel, objective and measure','It guarantees a fixed number of sales'],correct:1,why:'A coherent plan explains why each decision follows from the customer and business context. It states assumptions and measures outcomes without guaranteeing them.'}
    }
  ];

  const quiz = [
    {q:'Which statement best describes marketing?',a:['Posting daily on social media','Creating, communicating, delivering and exchanging value','Paying for advertisements'],c:1,w:'Marketing is the wider value-creation process. Advertising is one possible promotional activity within it.'},
    {q:'A business improves its product, price, collection process and promotion. Which framework is it using?',a:['The 4 Ps','The 4 stages of SEO','A social content calendar'],c:0,w:'The 4 Ps are Product, Price, Place and Promotion. They help inspect whether the offer and experience work together.'},
    {q:'Which is an example of an owned digital asset?',a:['A newspaper article written independently','A business website it controls','A paid ad placement on a social platform'],c:1,w:'A website is a more directly controlled asset. The business still relies on hosting and service providers, but it controls its own site content and structure.'},
    {q:'Which customer description is most useful for a first campaign?',a:['Everyone who likes food','People who use the internet','Nearby weekday workers who want a quick breakfast before work'],c:2,w:'It describes context, location and a practical need. It is still a hypothesis to validate with evidence.'},
    {q:'Which research question is least leading?',a:['You like our breakfast boxes, right?','Tell me about the last time you bought breakfast before work.','Would you agree that our prices are fair?'],c:1,w:'A question about a real past event invites details without pushing the person toward a preferred answer.'},
    {q:'Someone checks menu details, prices and reviews before buying. Which journey stage fits best?',a:['Awareness','Consideration','Advocacy'],c:1,w:'The person is evaluating options and reducing uncertainty. That is the consideration stage.'},
    {q:'In “an Instagram Reel”, what is Instagram?',a:['The platform','The content format','The customer need'],c:0,w:'Instagram is the platform. Social media is the channel. A Reel is a content format.'},
    {q:'Which content is most useful for a person evaluating a breakfast box?',a:['A fake countdown timer','Clear menu, ingredients, price and collection details','A generic motivational quote'],c:1,w:'Consideration-stage customers need information that helps them judge fit and make an informed choice.'},
    {q:'Which is the strongest SMART-style objective?',a:['Become famous soon','Get more likes','Generate 20 qualified local enquiries in 30 days'],c:2,w:'It names the action, the quality/context of the result, the quantity and the time period. Feasibility still needs evidence.'},
    {q:'A website receives 1,000 visits and 20 orders. What is the visit-to-order rate?',a:['0.2%','2%','20%'],c:1,w:'20 ÷ 1,000 × 100 = 2%. Always state the exact event and denominator.'},
    {q:'A campaign has ₹2,000 ad spend and ₹8,000 attributed revenue. What is ROAS?',a:['0.25×','2×','4×'],c:2,w:'ROAS = attributed revenue ÷ ad spend = 8,000 ÷ 2,000 = 4×. This is not profit.'},
    {q:'The order form is broken on phones. What should the marketer do?',a:['Fix the experience and check tracking before scaling spend','Increase the ad budget','Hide the problem and keep running the campaign'],c:0,w:'More visits do not fix a broken customer journey. Repair the page, test it and then reassess performance.'}
  ];

  const glossary = [
    ['Audience','The group of people a business wants to understand and serve.'],['A/B test','A controlled comparison of two versions to learn which performs better against a defined measure.'],['Attribution','A model or rule used to assign credit for an outcome to marketing touchpoints.'],['Brand','A set of identifiers and associations that helps people recognise and distinguish an offer.'],['Call to action (CTA)','A clear prompt that tells a person the next step, such as viewing a menu or booking.'],['Campaign','A coordinated set of activities designed around an objective, audience, message, timing and measurement plan.'],['Channel','A broad route used to communicate or distribute a message, such as search, email or social media.'],['Click-through rate (CTR)','Clicks divided by impressions, multiplied by 100. The exact click definition should be stated.'],['Conversion','A defined action that matters to a goal, such as an enquiry, booking or purchase.'],['Conversion rate','The percentage of a defined group that completes a defined action. Always state the denominator.'],['Cost per acquisition (CPA)','Cost divided by the number of defined acquisitions or actions.'],['Customer journey','The experiences and touchpoints a person may move through before and after a decision.'],['Earned media','Attention others choose to give, such as independent mentions or recommendations.'],['Funnel','A simplified model showing how a group may move toward a chosen outcome.'],['Key performance indicator (KPI)','A measure selected because it helps evaluate progress toward an objective.'],['Metric','A defined quantitative measure such as a count, ratio or percentage.'],['Owned media','Channels or assets a business controls more directly, such as its website or permission-based email list.'],['Paid media','Distribution or placement for which the business pays.'],['Persona','A research-informed summary of a relevant audience pattern, not a made-up stereotype.'],['Platform','A specific service or product through which a channel operates, such as Instagram.'],['Positioning','How an offer is intended to be understood in relation to alternatives by a chosen audience.'],['Return on ad spend (ROAS)','Attributed revenue divided by advertising spend; it is not the same as profit.'],['SMART objective','An objective checked for specificity, measurability, achievability, relevance and a time limit.'],['Touchpoint','An interaction between a person and a business, such as a search result, website visit or support message.'],['Value proposition','A clear explanation of the value an offer aims to provide to a particular audience.']
  ];

  const flashcards = [
    ['Audience','The group of people whose needs and context you want to understand.'],
    ['Value proposition','A clear statement of the value an offer aims to provide and why it may suit a customer.'],
    ['Channel','The broad route used to connect with people, such as search, email or social.'],
    ['Platform','The specific service or tool used within a channel, such as Instagram.'],
    ['Conversion','A defined action that matters to your objective, such as an enquiry or order.'],
    ['KPI','A measure chosen because it shows progress toward an important objective.'],
    ['Customer journey','The sequence of experiences and touchpoints a person may have with a business.'],
    ['ROAS','Attributed revenue divided by ad spend. It does not account for all business costs.']
  ];

  let currentLesson = 0;
  let completed = [];
  let quizIndex = 0;
  let quizScore = 0;
  let quizAnswered = false;

  function readSaved() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE) || '{}');
      if (Array.isArray(saved.completed)) completed = [...new Set(saved.completed.filter(n => Number.isInteger(n) && n >= 0 && n < lessons.length))];
      if (saved.brief && typeof saved.brief === 'object') {
        Object.entries(saved.brief).forEach(([key, value]) => {
          const field = $$('textarea', $('#m1x-brief')).find(item => item.name === key);
          if (field && typeof value === 'string') field.value = value;
        });
      }
    } catch (_) { /* Continue without persistence if local storage is unavailable. */ }
  }
  function save(extra = {}) {
    try {
      const old = JSON.parse(localStorage.getItem(STORAGE) || '{}');
      localStorage.setItem(STORAGE, JSON.stringify({...old, completed, ...extra}));
    } catch (_) { /* Private browsing and storage restrictions should not block learning. */ }
  }
  function renderProgress() {
    const percent = Math.round(completed.length / lessons.length * 100);
    $('#m1x-progress-pct').textContent = `${percent}%`;
    $('#m1x-progress-bar').style.width = `${percent}%`;
    $('#m1x-progress-copy').textContent = `${completed.length} of ${lessons.length} lessons complete · Your progress is saved on this device.`;
    $$('.m1x-lesson-link').forEach((button, index) => {
      button.classList.toggle('active', index === currentLesson);
      button.classList.toggle('complete', completed.includes(index));
      button.setAttribute('aria-current', index === currentLesson ? 'step' : 'false');
      const status = $('span:last-child', button);
      if (status) status.textContent = completed.includes(index) ? '✓' : '›';
    });
    const done = completed.includes(currentLesson);
    $('#m1x-complete-btn').classList.toggle('done', done);
    $('#m1x-complete-btn').textContent = done ? 'Lesson completed ✓' : 'Mark lesson complete ✓';
  }
  function renderLessonList() {
    $('#m1x-lesson-list').innerHTML = lessons.map((lesson, i) => `<button type="button" class="m1x-lesson-link" data-index="${i}" aria-label="Open lesson ${i+1}: ${lesson.short}"><span>${String(i+1).padStart(2,'0')}</span><b>${lesson.short}</b><span>›</span></button>`).join('');
    $$('.m1x-lesson-link').forEach(button => button.addEventListener('click', () => showLesson(Number(button.dataset.index))));
  }
  function attachCheck(check) {
    const host = $('#m1x-lesson-check');
    if (!host) return;
    const buttons = $$('.m1x-check-options button', host);
    buttons.forEach((button, index) => button.addEventListener('click', () => {
      if (buttons.some(item => item.disabled)) return;
      const correct = index === check.correct;
      buttons.forEach((item, i) => {
        item.disabled = true;
        if (i === check.correct) item.classList.add('correct');
        else if (i === index) item.classList.add('incorrect');
      });
      $('#m1x-check-feedback', host).innerHTML = `<b>${correct ? 'Exactly right.' : 'Good attempt—learn from this.'}</b> ${check.why}`;
    }));
  }
  function showLesson(index, focus = false) {
    currentLesson = Math.max(0, Math.min(lessons.length - 1, index));
    const lesson = lessons[currentLesson];
    $('#m1x-lesson-count').textContent = `LESSON ${String(currentLesson+1).padStart(2,'0')} / ${String(lessons.length).padStart(2,'0')}`;
    $('#m1x-lesson-time').textContent = lesson.time;
    $('#m1x-lesson-category').textContent = lesson.category;
    $('#m1x-lesson-content').innerHTML = `<h2>${lesson.title}</h2><p class="m1x-lesson-intro">${lesson.intro}</p>${lesson.body}<div class="m1x-checkpoint" id="m1x-lesson-check"><span>PAUSE & CHECK · LESSON ${String(currentLesson+1).padStart(2,'0')}</span><h4>${lesson.check.q}</h4><div class="m1x-check-options">${lesson.check.options.map((option, i) => `<button type="button">${String.fromCharCode(65+i)}. ${option}</button>`).join('')}</div><p class="m1x-check-feedback" id="m1x-check-feedback" role="status" aria-live="polite">Choose an answer to see a helpful explanation.</p></div><p class="m1x-resource-note">Teaching note: examples in this module are illustrative learning scenarios. Platform features, laws and reporting definitions can change; check official documentation before applying them in a live campaign.</p>`;
    attachCheck(lesson.check);
    $('#m1x-prev').disabled = currentLesson === 0;
    $('#m1x-next').textContent = currentLesson === lessons.length - 1 ? 'Go to capstone ↓' : 'Next lesson →';
    renderProgress();
    if (focus) $('#m1x-lesson-content').focus({preventScroll:true});
  }

  // Lesson path and progress.
  renderLessonList();
  readSaved();
  showLesson(0);
  $('#m1x-complete-btn').addEventListener('click', () => {
    if (!completed.includes(currentLesson)) completed.push(currentLesson);
    save(); renderProgress();
  });
  $('#m1x-prev').addEventListener('click', () => showLesson(currentLesson - 1, true));
  $('#m1x-next').addEventListener('click', () => {
    if (currentLesson < lessons.length - 1) showLesson(currentLesson + 1, true);
    else document.getElementById('project').scrollIntoView({behavior:'smooth'});
  });
  $('#m1x-reset-progress').addEventListener('click', () => {
    if (!window.confirm('Reset all completed lessons on this device? Your project draft will stay saved.')) return;
    completed = []; save(); renderProgress();
  });

  // Metrics simulator: all values are practice data, not forecasts.
  const fmt = new Intl.NumberFormat('en-IN');
  const currency = value => `₹${fmt.format(Math.round(value))}`;
  const fields = ['visits','enquiries','orders','spend','revenue'];
  function updateLab() {
    const v = Number($('#m1x-visits').value), e = Number($('#m1x-enquiries').value), o = Number($('#m1x-orders').value), s = Number($('#m1x-spend').value), r = Number($('#m1x-revenue').value);
    $('#m1x-visits-out').textContent = fmt.format(v); $('#m1x-enquiries-out').textContent = fmt.format(e); $('#m1x-orders-out').textContent = fmt.format(o); $('#m1x-spend-out').textContent = currency(s); $('#m1x-revenue-out').textContent = currency(r);
    const inconsistent = e > v || o > e;
    const enquiryRate = v ? e / v * 100 : 0;
    const orderRate = v ? o / v * 100 : 0;
    const costOrder = o ? s / o : null;
    const roas = s ? r / s : null;
    $('#m1x-enquiry-rate').textContent = `${enquiryRate.toFixed(1)}%`;
    $('#m1x-order-rate').textContent = `${orderRate.toFixed(1)}%`;
    $('#m1x-cost-order').textContent = costOrder === null ? '—' : currency(costOrder);
    $('#m1x-roas').textContent = roas === null ? '—' : `${roas.toFixed(1)}×`;
    $('#m1x-funnel-visits').textContent = fmt.format(v); $('#m1x-funnel-enquiries').textContent = fmt.format(e); $('#m1x-funnel-orders').textContent = fmt.format(o);
    const ew = v ? Math.max(28, Math.min(100, e/v*100)) : 28;
    const ow = v ? Math.max(22, Math.min(88, o/v*100)) : 22;
    $('.m1x-funnel-enquiries').style.width = `${ew}%`; $('.m1x-funnel-orders').style.width = `${ow}%`;
    $('#m1x-lab-insight').textContent = inconsistent
      ? 'Check the input sequence: in this simplified funnel, enquiries should not exceed visits and orders should not exceed enquiries. Change the sample values to make the journey consistent.'
      : `${fmt.format(o)} of ${fmt.format(v)} visits became orders (${orderRate.toFixed(1)}%). ${costOrder === null ? 'There are no orders, so cost per order cannot be calculated.' : `At this spend, the calculated cost per order is ${currency(costOrder)}.`}`;
  }
  fields.forEach(id => $(`#m1x-${id}`).addEventListener('input', updateLab));
  $('#m1x-lab-reset').addEventListener('click', () => {
    const defaults = {visits:1000,enquiries:60,orders:18,spend:1800,revenue:9000};
    Object.entries(defaults).forEach(([id,value]) => $(`#m1x-${id}`).value = value);
    updateLab();
  });
  updateLab();

  // Multi-question quiz.
  function renderQuiz() {
    const item = quiz[quizIndex];
    $('#m1x-quiz-number').textContent = `QUESTION ${quizIndex+1} / ${quiz.length}`;
    $('#m1x-quiz-track-bar').style.width = `${quizIndex/quiz.length*100}%`;
    $('#m1x-quiz-question').textContent = item.q;
    $('#m1x-quiz-options').innerHTML = item.a.map((answer,i) => `<button type="button" data-choice="${i}">${String.fromCharCode(65+i)}. ${answer}</button>`).join('');
    $('#m1x-quiz-feedback').textContent = 'Choose the best answer.';
    $('#m1x-quiz-next').disabled = true;
    $('#m1x-quiz-next').textContent = quizIndex === quiz.length-1 ? 'See my result →' : 'Next question →';
    $('#m1x-quiz-result').hidden = true; $('#m1x-quiz-stage').hidden = false; quizAnswered = false;
    $$('#m1x-quiz-options button').forEach(button => button.addEventListener('click', () => {
      if (quizAnswered) return;
      quizAnswered = true;
      const choice = Number(button.dataset.choice), correct = choice === item.c;
      if (correct) quizScore++;
      $$('#m1x-quiz-options button').forEach((b,i) => { b.disabled = true; if (i === item.c) b.classList.add('correct'); else if(i === choice) b.classList.add('incorrect'); });
      $('#m1x-quiz-feedback').textContent = `${correct ? 'Correct. ' : 'Not quite. '}${item.w}`;
      $('#m1x-quiz-next').disabled = false;
    }));
  }
  renderQuiz();
  $('#m1x-quiz-next').addEventListener('click', () => {
    if (!quizAnswered) return;
    if (quizIndex < quiz.length - 1) { quizIndex++; renderQuiz(); return; }
    $('#m1x-quiz-track-bar').style.width = '100%';
    $('#m1x-quiz-stage').hidden = true;
    const pct = Math.round(quizScore/quiz.length*100);
    $('#m1x-quiz-result').hidden = false;
    $('#m1x-quiz-result').innerHTML = `<h3>${quizScore} / ${quiz.length} · ${pct}%</h3><p>${quizScore >= 10 ? 'Excellent foundation. You are making strong connections across the module.' : quizScore >= 7 ? 'Good progress. Review the explanations for the questions you missed, then try again.' : 'This is a first attempt, not a final judgement. Revisit the lessons and use the examples to strengthen your understanding.'}</p><p>Learning is not about one score. Focus on explaining why an answer is correct.</p><button type="button" id="m1x-quiz-retry">Try the challenge again ↻</button>`;
    $('#m1x-quiz-retry').addEventListener('click', () => { quizIndex=0; quizScore=0; renderQuiz(); });
  });

  // Three-case marketing detective game.
  const cases = [
    {label:'THE MISSING ORDERS',q:'Lots of people visit a menu page, but very few place an order. What should you inspect first?',a:['Buy more reach immediately','Check whether price, menu details, trust signals and the order process answer customer questions','Change the bakery logo'],c:1,why:'The problem may be friction during consideration or checkout. Inspect the actual journey and ask users what is unclear before paying for more visitors.'},
    {label:'THE WRONG CROWD',q:'A post gets thousands of views, but nearly all enquiries come from people outside the service area. What is the smartest next move?',a:['Celebrate the view count and repeat the same post','Clarify the target location and audience, then adjust message and distribution','Hide the service area so more people enquire'],c:1,why:'Reach is only useful in context. The audience needs to be relevant and realistically served. Make the location and offer clear, then check the quality of enquiries.'},
    {label:'THE SECOND VISIT',q:'Customers enjoy their first order and ask how they can hear about new menus. What is a responsible follow-up?',a:['Add every phone number to a marketing list without asking','Offer an optional, clear sign-up and send relevant updates only with appropriate permission','Message them every day from a personal account'],c:1,why:'A useful relationship is permission-based and expected. Explain what updates people will receive and make it easy to change preferences or unsubscribe.'}
  ];
  let gameIndex = 0, gameScore = 0, gameAnswered = false;
  function renderGame() {
    const item = cases[gameIndex];
    $('#m1x-game-card').querySelector('.m1x-game-top span').textContent = `CASE FILE ${String(gameIndex+1).padStart(2,'0')} / ${cases.length}`;
    $('#m1x-game-score').textContent = `${gameScore} point${gameScore===1?'':'s'}`;
    $('#m1x-game-progress').style.width = `${gameIndex/cases.length*100}%`;
    $('#m1x-case-label').textContent = item.label;
    $('#m1x-game-question').textContent = item.q;
    $('#m1x-game-options').innerHTML = item.a.map((answer,i)=>`<button type="button" data-case-choice="${i}">${String.fromCharCode(65+i)}. ${answer}</button>`).join('');
    $('#m1x-game-feedback').textContent = 'Read the clue, then choose your next move.';
    $('#m1x-game-next').disabled = true;
    $('#m1x-game-next').textContent = gameIndex===cases.length-1?'See your detective score →':'Next case →';
    gameAnswered = false;
    $$('#m1x-game-options button').forEach(button=>button.addEventListener('click',()=>{
      if(gameAnswered) return;
      gameAnswered=true;
      const choice=Number(button.dataset.caseChoice), correct=choice===item.c;
      if(correct) gameScore++;
      $$('#m1x-game-options button').forEach((b,i)=>{b.disabled=true;if(i===item.c)b.classList.add('correct');else if(i===choice)b.classList.add('incorrect');});
      $('#m1x-game-score').textContent=`${gameScore} point${gameScore===1?'':'s'}`;
      $('#m1x-game-feedback').textContent=`${correct?'Good detective work. ':'Not quite—here is the clue. '}${item.why}`;
      $('#m1x-game-next').disabled=false;
    }));
  }
  renderGame();
  $('#m1x-game-next').addEventListener('click',()=>{
    if(!gameAnswered) return;
    if(gameIndex<cases.length-1){gameIndex++;renderGame();return;}
    $('#m1x-game-progress').style.width='100%';
    $('#m1x-case-label').textContent='CASE FILES CLOSED';
    $('#m1x-game-question').textContent=`You earned ${gameScore} out of ${cases.length} points.`;
    $('#m1x-game-options').innerHTML='';
    $('#m1x-game-feedback').textContent=gameScore===3?'Excellent judgement. You looked for relevance, customer experience and trust.':gameScore===2?'Nice work. Revisit the explanations and notice how the best choice starts with the customer.':'Good first investigation. The lesson is simple: diagnose the real problem before adding more tactics.';
    $('#m1x-game-next').textContent='Play again ↻';
    $('#m1x-game-next').onclick=()=>{gameIndex=0;gameScore=0;renderGame();$('#m1x-game-next').onclick=null;};
    gameAnswered=false;
  });

  // Flashcards.
  $('#m1x-flash-grid').innerHTML = flashcards.map(([term,definition],i) => `<button type="button" class="m1x-flashcard" aria-pressed="false"><span>FLASHCARD ${String(i+1).padStart(2,'0')} · TAP TO FLIP</span><b>${term}</b><small>Think of the meaning, then tap to reveal.</small><span class="m1x-flash-answer" hidden>${definition}</span></button>`).join('');
  $$('.m1x-flashcard').forEach(card => card.addEventListener('click', () => {
    const flipped = card.getAttribute('aria-pressed') === 'true';
    card.setAttribute('aria-pressed', String(!flipped));
    const answer = $('.m1x-flash-answer', card);
    answer.hidden = flipped;
    $('small',card).textContent = flipped ? 'Think of the meaning, then tap to reveal.' : answer.textContent;
  }));

  // Portfolio brief: local autosave, explicit save, and downloadable copy.
  const brief = $('#m1x-brief');
  const briefFields = $$('textarea', brief);
  function getBrief() { return Object.fromEntries(briefFields.map(field => [field.name, field.value.trim()])); }
  function updateBriefCount() {
    const filled = Object.values(getBrief()).filter(value => value.length > 0).length;
    $('#m1x-brief-count').textContent = `${filled} / ${briefFields.length} sections filled`;
  }
  function saveBrief(showMessage = true) {
    const data = getBrief(); save({brief:data}); updateBriefCount();
    if (showMessage) $('#m1x-brief-status').textContent = 'Saved on this device. Download a copy if you want to keep it outside this browser.';
  }
  briefFields.forEach(field => field.addEventListener('input', () => saveBrief(false)));
  brief.addEventListener('submit', event => { event.preventDefault(); saveBrief(true); });
  $('#m1x-brief-download').addEventListener('click', () => {
    const labels = {goal:'Business goal',audience:'Target audience',insight:'Customer insight',offer:'Offer and value proposition',message:'Main message and call to action',channels:'Channel and content plan',objective:'SMART objective and KPI',test:'Test, budget and learning plan'};
    const data = getBrief();
    const text = ['SEEKHO DIGITAL · MODULE 01','CAMPAIGN BLUEPRINT · MAPLE LANE HOME BAKERY (FICTIONAL)','',...Object.entries(labels).flatMap(([key,label]) => [`${label.toUpperCase()}`,data[key] || '(Not completed)','']), '','Learning exercise only. Maple Lane Home Bakery and all sample details are fictional. This plan does not guarantee business results.'].join('\n');
    const blob = new Blob([text], {type:'text/plain;charset=utf-8'});
    const url = URL.createObjectURL(blob); const link = document.createElement('a');
    link.href=url; link.download='seekho-module-01-campaign-brief.txt'; document.body.appendChild(link); link.click(); link.remove(); window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    $('#m1x-brief-status').textContent = 'Your campaign brief download has started.';
  });
  $('#m1x-brief-clear').addEventListener('click', () => {
    if (!window.confirm('Clear all answers in this campaign brief?')) return;
    brief.reset(); saveBrief(true); $('#m1x-brief-status').textContent='Draft cleared. You can begin again anytime.';
  });
  updateBriefCount();

  // Searchable beginner glossary.
  function renderGlossary(filter = '') {
    const q = filter.trim().toLowerCase();
    const matches = glossary.filter(([term,meaning]) => `${term} ${meaning}`.toLowerCase().includes(q));
    $('#m1x-glossary-grid').innerHTML = matches.map(([term,meaning]) => `<article class="m1x-glossary-item"><b>${term}</b><p>${meaning}</p></article>`).join('');
    $('#m1x-glossary-empty').hidden = matches.length > 0;
  }
  $('#m1x-glossary-search').addEventListener('input', event => renderGlossary(event.target.value));
  renderGlossary();
})();
