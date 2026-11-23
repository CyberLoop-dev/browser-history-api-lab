<div align="center">

![Header](https://capsule-render.vercel.app/api?type=waving&color=0:0c1726,100:0f766e&height=170&section=header&text=browser-history-api-lab&fontColor=ffffff&fontSize=37)

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=21&pause=1000&center=true&vCenter=true&width=620&lines=Explore+pushState+and+replaceState;Watch+popstate+and+history+navigation" alt="Typing title"/>

[![License](https://img.shields.io/github/license/CyberLoop-dev/browser-history-api-lab)](LICENSE)
![Language](https://img.shields.io/github/languages/top/CyberLoop-dev/browser-history-api-lab)
[![Stars](https://img.shields.io/github/stars/CyberLoop-dev/browser-history-api-lab?style=social)](https://github.com/CyberLoop-dev/browser-history-api-lab/stargazers)
![Last commit](https://img.shields.io/github/last-commit/CyberLoop-dev/browser-history-api-lab)

<img src="assets/mark.svg" width="520" alt="Browser history stack illustration"/>

</div>

## 🧭 Overview
A local browser playground for the History API. Push and replace same-origin entries, then navigate Back and Forward to observe the `popstate` event and stored state.

## ✨ Features
- ➕ Add entries with `history.pushState()`.
- ♻️ Replace the current entry with `history.replaceState()`.
- ↩️ Navigate with Back and Forward controls.
- 🧾 Inspect `location.pathname`, `history.state`, and event order.
- 🔒 Restricts demo routes to the current origin.

## 🖥️ Demo
Run the local Node.js server; no hosted demo is configured.

## 🚀 Quick Start
```bash
npm start
```
Open `http://127.0.0.1:4173`.

## 🧰 Tech Stack
- Node.js built-in HTTP server
- Browser History API
- Vanilla JavaScript, HTML, and CSS

## 🗂️ Folder Structure
```text
.
├── assets/mark.svg
├── public/app.js
├── public/index.html
├── public/styles.css
├── package.json
├── server.js
└── README.md
```

## 🗺️ Roadmap
- [ ] Add hash-navigation comparison.
- [ ] Add scroll-restoration experiments.
- [ ] Add a route-state serialization example.

## 🤝 Contributing
Keep examples local and same-origin. Include browser version and reproducible navigation steps in bug reports.

## 📄 License
MIT. See [LICENSE](LICENSE).

<div align="center">

![Footer](https://capsule-render.vercel.app/api?type=waving&color=0:0f766e,100:0c1726&height=100&section=footer)

</div>
