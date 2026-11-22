# 🎙️ Deep Voice

**A free, accessible online library of classic philosophy — read it, listen to it, or learn from it.**

Deep Voice is a web app that catalogues classic literature in philosophy, spanning all time periods — from roughly 7,000 B.C.E. to the present day. Its mission is simple: **make philosophy more accessible, digestible, and comprehensible to everyone**, regardless of prior knowledge.

---

## ✨ Features

### Browse & Discover
- **Search by title** — jump straight to a specific work
- **Personalised recommendations** — shown to returning users
- **Browse popular authors**
- **Currently trending schools of philosophy**
- **Browse by school** — Stoicism, Utilitarianism, Neoplatonism, Cynicism, Marxism, and many more
- **Browse by time period** or year of first publication
- **Filter by philosopher's ethnicity or background** — Jewish, African-American, Scandinavian, Chinese, and more

### Every Book Has Its Own Page
Each e-book gets a dedicated page featuring:
- A **promotional graphic** for the work
- **Read it or listen to it** — full e-book text and audiobook format, or both
- Author name, biography, and a brief description of the work
- Audiobook duration (secondary info)
- **Illustrations** — original artwork by the creator, tap any illustration to view it

### Two Learning Modes
| | 🧩 Interactive Mode | 🎧 Passive Mode |
|---|---|---|
| Reading or listening | ✅ Yes — or both | ✅ Yes — or both |
| Illustrations | ✅ Included | 🔒 Earned (see below) |
| Pop-quizzes | ✅ Every 2–3 chapters/sections | ❌ |
| Bonus illustration + in-app credits | ✅ Earned through quiz points | ❌ |

In **Interactive Mode**, users are quizzed periodically as they progress through a text. Accumulating enough points earns in-app credits and bonus illustrations.

In **Passive Mode**, the focus is on simply reading or listening. Unlocking illustrations requires earning access within the app — through the subscription (see below) or by completing quizzes.

---

## 💡 Business Model (planned)

The app's core library stays free and accessible — that's the mission. Monetisation is planned around optional enhancements, primarily a **subscription model** that grants full access to illustrations and premium audiobook features in Passive Mode, with an alternate *earn-it-yourself* path via quiz participation. The guiding principle: paywalls should reward engagement and support the project — never lock away the philosophy itself.

---

## 🛠 Tech

Deep Voice is a static web app (HTML/CSS/JavaScript).

```
Deep-Voice/
├── assets/
│   ├── audio/      # audiobook files
│   ├── images/     # illustrations, promotional graphics, screenshots
│   └── comics/     # bonus illustration sequences
├── css/            # stylesheets
├── js/             # application logic (search, quiz engine, credits)
├── index.html      # landing page: search → recommendations → authors → trending → schools → time periods
├── README.md
└── .gitignore
```

---

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/jspencer523/Deep-Voice.git
   cd Deep-Voice
   ```
2. Open `index.html` in your browser — no build step or dependencies required.
3. Add content to `assets/audio/` and `assets/images/` as the library grows.

---

## ⚖️ Copyright Note

Most classic philosophical texts are in the public domain and free to redistribute. **Not everything is** — works from the 20th century onward (and some translations) may still be under copyright. Please verify a text's or recording's licence status before uploading it to this repository. Original illustrations and promotional graphics are the property of the creator.

---

## 📄 License

_To be decided — MIT is a common starting point for open-source web apps._

---

## 👤 Author

Built by **jspencer523** ([@jspencer523](https://github.com/jspencer523)) — Spencer J.
