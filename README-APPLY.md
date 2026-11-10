# Seekho Digital — Homepage refresh (Phase 1)

This patch simplifies the first visit and reduces the number of items shown in the main navigation. It changes only the homepage, its dedicated stylesheet, the shared navigation data, and adds one local SVG illustration.

## Files in this patch

- `index.html` — new beginner-first homepage.
- `assets/css/home-refresh.css` — styling for the new homepage, including mobile layouts.
- `assets/data/site-data.js` — shorter primary navigation; supporting pages remain in the More menu or footer.
- `assets/images/home-journey.svg` — original local illustration used by the homepage.

## Apply safely

1. In GitHub, open `reenadigitalwork-maker/seekho-digital-academy`.
2. Switch to the `platform-redesign` branch. Do not edit `main`.
3. Replace the existing `index.html` with the file from this patch.
4. Create `assets/css/home-refresh.css` and paste the new file content.
5. Replace `assets/data/site-data.js` with the file from this patch.
6. Create `assets/images/home-journey.svg` and paste the new file content.
7. Commit the changes to `platform-redesign`.
8. Wait for the GitHub Pages workflow to finish, then open the homepage in a private/incognito tab.

## Quick acceptance test

- Homepage clearly says who the website is for and what to do first.
- The main button opens Module 01 at the classroom section.
- The learning path, projects, practice and supporting pages remain accessible.
- Main navigation shows Home, Start Learning, Practice and Projects; supporting pages are under More.
- At 360px mobile width, the hero buttons stack, cards stack, and no horizontal scroll appears.
- The Maple Lane example is clearly labelled fictional.

This is Phase 1, not a claim that all modules or the whole website are now ready. Test with at least three first-time learners before applying the same design approach to the remaining learning pages.
