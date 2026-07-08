# Cade's Academic Homepage

This is a simple personal academic homepage for a Computer Science undergraduate. It uses only HTML, CSS, and JavaScript, so it can be hosted directly with GitHub Pages.

## Files

- `index.html` contains the page content and section structure.
- `style.css` contains the layout, typography, colors, and responsive design.
- `script.js` adds the active navigation state and the back-to-top button.
- `README.md` explains how to edit and deploy the site.

## How to Edit Personal Information

Open `index.html` and update:

- `Cade` with your preferred display name if needed.
- `Computer Science Undergraduate` with your current role.
- `United States` with your city, state, or university location.
- `your.email@example.com` with your real email address.
- `University Name`, expected graduation year, coursework, projects, and notes.

Open `style.css` if you want to change the visual style. The main colors are defined near the top of the file in the `:root` block.

## Deploy to GitHub Pages

1. Create a GitHub repository named `Cade-Yi.github.io`.
2. Put these files in the root of that repository:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
3. Commit and push the files to GitHub.
4. Go to the repository on GitHub.
5. Open `Settings` > `Pages`.
6. Under `Build and deployment`, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
7. Save the settings.

After GitHub Pages finishes deploying, the website will be available at:

```text
https://Cade-Yi.github.io
```

## Local Preview

You can preview the site locally by opening `index.html` in a browser. No build step is required.

If you prefer using a local server, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```
