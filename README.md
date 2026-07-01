# Zuo Ye Academic Homepage — Simple Multipage Version

This version is designed for the GitHub Pages project site:

https://lalala422.github.io/zuoye/

## Files

- `index.html`: Home page. This is the only page that loads the page-view counter.
- `research.html`: Research themes and preprints.
- `publications.html`: Publications.
- `talks-teaching.html`: Talks, teaching, and service.
- `people.html`: Students and collaborators.
- `contact.html`: Contact and CV.
- `assets/styles.css`: Website style.
- `assets/main.js`: Navigation, update date, and index-only visit counter.

## Visit counter behavior

The visitor badge is loaded only on `index.html` and only once per browser tab session, using `sessionStorage`.
Returning to `index.html` from another page in the same tab will not load the counter image again.

## Upload

Upload the contents of this folder to the root of the `lalala422/zuoye` repository. Do not upload this folder as a nested folder.
