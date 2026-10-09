# ICT251 Activity 3 — Interactive Personal Website

**Student:** Latif Chilala  
**Programme:** Cybersecurity  
**Course:** ICT251 Web Technologies  
**Institution:** Mulungushi University

## About
This is an improved version of my Activity 2 personal website. It contains About Me, Hobbies, Learning Plan, Photos, Media, Projects & Skills, and Contact sections.

## Project structure
- `index.html` — semantic HTML page
- `css/styles.css` — responsive styles, layout, themes and focus states
- `js/script.js` — JavaScript interactions
- `images/` — the three photos supplied with Activity 2
- `videos/` — the self-introduction video supplied with Activity 2
- `audio/` — the audio file supplied with Activity 2

## JavaScript features
1. **Contact form validation and preview:** rejects blank/whitespace-only names and messages and invalid email addresses. Valid entries are previewed locally; no message is sent.
2. **Gallery viewer:** Previous and Next buttons cycle through the three photos and wrap around at the first and last photos.
3. **Project/skill filter:** searches three project/skill cards, provides a reset option, and reports when no cards match.
4. **Theme switch:** switches between light and dark themes.

## How to test locally
1. Open this folder in Visual Studio Code.
2. Use the Live Server extension to open `index.html`.
3. Test each navigation link.
4. In the gallery, click Previous and Next several times to test both ends.
5. Search for `HTML`, `CSS`, `JavaScript`, and a word that does not match; then click Reset.
6. Switch between light and dark themes.
7. Submit the contact form with empty fields, spaces only, an invalid email, and then valid sample data. The valid result must say that the data was validated, not delivered.
8. Check that the photos, video and audio load. If the audio file does not play in your browser, check the media encoding and browser support.
9. Test at phone and desktop widths. Check the browser Console for errors.

## GitHub and Render
1. Upload the **contents** of this folder to the root of a GitHub repository so `index.html` is at the repository root.
2. Replace the placeholder GitHub link in the footer of `index.html` with the URL of your own repository.
3. Render settings for a static site:
   - Root Directory: leave blank if `index.html` is at repository root
   - Build Command: `echo "No build required"`
   - Publish Directory: `.`
   - Auto Deploy: enabled for the branch you use
4. After deployment, open the public `.onrender.com` URL and repeat the tests.

## Notes before submission
- This folder is prepared from the Activity 2 files provided by the student. Review all content and test the media locally before submitting.
- Confirm the self-introduction video and audio are the intended recordings.
- Make a small improvement after the first Render deployment and confirm it appears online, as required by the activity sheet.
- Add the actual GitHub repository URL to the footer before submission.
