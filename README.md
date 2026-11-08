# TravelBloom — Travel Recommendation Website

A responsive travel recommendation website built with **HTML, CSS and vanilla JavaScript** for the IBM/Coursera final project.

## Features
- **Home**, **About Us**, and **Contact Us** pages with working navigation.
- Search by **beach / beaches**, **temple / temples**, or **country / countries**.
- Search by specific country such as **Japan**, **Brazil**, **Australia**, **Italy**, **Greece**, or **France**.
- Destination results with descriptions and **at least two photos** per recommendation.
- Search, Reset/Clear, keyboard Enter and suggested-search buttons.
- Responsive design for desktop, tablet and mobile.
- Validated Contact Us form (front-end demonstration; it does not send email to a server).
- No build tools, API keys, packages, or paid services required.

## Files
- `index.html` — home and search
- `about.html` — about the service and team
- `contact.html` — contact form
- `styles.css` — responsive styling
- `script.js` — search logic, results, menu and form

## Run locally
Download or clone the repository, then open `index.html` in a web browser.

## Enable GitHub Pages
1. Open this repository's **Settings**.
2. Open **Pages** in the left sidebar.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Select **Branch: main**, **Folder: /(root)**, and press **Save**.
5. Wait for deployment and open the published URL shown in the Pages settings.

Expected URL after publication (verify it actually loads):
`https://erajgjkdhdi8u.github.io/travel-recommendation/`

## Coursera grading checklist (20 points)
| Criterion | Points | Where to verify |
| --- | ---: | --- |
| Public GitHub repository | 1 | Repository visibility = Public |
| Home, About Us, Contact Us and home introduction | 4 | Navbar and each page |
| About Us components | 2 | `about.html` |
| Email form on Contact Us | 1 | `contact.html` |
| Navbar, search, action buttons | 6 | `index.html`; try beach, temple, country, Reset |
| Beach recommendations with 2 photos | 2 | Search `beach` |
| Temple recommendations with 2 photos | 2 | Search `temple` |
| Country recommendations with 2 photos | 2 | Search `country` or `Japan` |

**Total: 20 points available. Grading is performed by Coursera.** Keep screenshots of your search results and pages and include both the full HTTPS repository URL and the working HTTPS GitHub Pages URL in your submission.

## Image credits
Travel photos are loaded from [Unsplash](https://unsplash.com/) using their public image CDN. An internet connection is required to load these photos.

## Notes
This is a static-site project. Contact form submissions are validated locally and are not emailed or stored remotely.
