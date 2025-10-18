## Profile Card
A responsive, accessible Profile Card built with HTML, CSS, and vanilla JavaScript for the HNG13 Stage 0 Frontend Task.
Features

### Semantic HTML (<article>, <figure>, <nav>, <section>)

Modern, responsive layout: vertical on mobile, avatar-left/content-right on desktop
Dynamic current time in milliseconds via Date.now()
Accessible avatar with alt text and keyboard-focusable social links
Testable elements with required data-testid attributes
Clean UI with Google Fonts, subtle animations, and truncation for long text
Distinct sections for hobbies/dislikes (columns on desktop, stacked on mobile)

### Live Demo

https://your-hosted-urlReplace with your Netlify, GitHub Pages, or other hosted URL after deployment.

---
<img src="./public/blard_profile_card.png" alt="Blard_profile card" width="50%">


### Getting Started

- Prerequisites
A modern web browser (e.g., Chrome, Firefox)
Git (for cloning)
A static file server (optional for local testing)

- Installation
Clone this repository:git clone 

```bash 
https://github.com/Blard-omu/hng13-stage-0-frontend.git
cd hng13-stage-0-frontend
```

Update index.html with your details (name, bio, social links, avatar URL).
Open index.html in a browser or serve locally i.e Live http-server

Access at ```http://127.0.0.1:5500/index.html```

### Usage

Open the live demo or local URL in a browser.
Navigate using mouse or keyboard (Tab key for links).
Verify data-testid attributes in DevTools (e.g., test-profile-card, test-user-name).
Check test-user-time matches Date.now() in milliseconds.
Test responsiveness on mobile, tablet, and desktop views.

### Project Structure

```bash
hng13-stage-0-frontend/
├── index.html    # Semantic HTML structure
├── style.css    # Responsive CSS with Grid
├── script.js     # JavaScript for dynamic time
└── README.md     # This file
```

### Deployment
Deploy to Netlify, GitHub Pages, or another static hosting platform:
- Netlify

Create a Netlify account and new site.
Connect your GitHub repo (Blard-omu/hng13-stage-0-frontend).
Set the public folder to . (root).
Deploy and access at ```https://your-site-name.netlify.app```.

- GitHub Pages

Push to GitHub.
Go to repo Settings > Pages.
Set source to main branch, root folder.
Access at ```https://Blard-omu.github.io/hng13-stage-0-frontend```.

### Testing

- Manual Testing:
Verify all elements (test-profile-card, test-user-name, etc.) exist via DevTools.
Check test-user-time matches Date.now() (within a small delta).
Test responsiveness: Resize browser or use DevTools mobile view.
Test keyboard navigation: Tab through links, verify focus styles.
Ensure bio truncates gracefully for long text.


- Automated Testing:
Example Cypress test:
```bash 
describe('Profile Card', () => {
  it('has all required elements', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('[data-testid="test-profile-card"]').should('exist');
    cy.get('[data-testid="test-user-name"]').should('have.text', 'BLARD');
    cy.get('[data-testid="test-user-time"]').invoke('text').should('match', /^\d+$/);
  });
});
```

### Technologies Used

HTML5 (semantic)
CSS3 (Grid, media queries, Google Fonts)
Vanilla JavaScript

### Author

Name: BLARD Omu
Email: peteromu76@gmail.com

### License
ISC