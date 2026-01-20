# 📚 Interactive Library: Two Glimmers of Light

> _"Every world is special. Every heart matters. You belong."_

**Interactive Library** is an immersive digital storytelling project built with modern web technologies, designed for children and the young at heart. The project greets visitors with a 3D library interface, and when a book is selected, it opens a magical tale controlled through scrolling.

![Project Status](https://img.shields.io/badge/Status-Complete-success) ![License](https://img.shields.io/badge/License-MIT-blue)

## 🌟 About the Project

This project transforms static reading into a dynamic adventure featuring two interactive stories:

### 📖 Story 1: Two Glimmers of Light
The sweet journey of the **Sun and Moon** in the sky—their playful chase, mutual understanding, and the lesson that true friendship means making each other shine.

### 🪐 Story 2: Pluto's Journey
A heartwarming **children's story about belonging and acceptance**. Little Pluto, excluded by the other planets for being a "dwarf planet," learns that size doesn't determine worth. A tale about peer acceptance and the importance of standing up for others.

As users scroll down the page:
- Text flows naturally,
- Characters move and react emotionally,
- Background and atmospheric events (stars, planets, ice crystals) change with the story's progression.

## ✨ Key Features

- **3D Library Interface:** Using CSS `transform-style: preserve-3d`, a realistic 3D bookshelf with depth perception.
- **Scroll-Triggered Narrative:** `Intersection Observer API` synchronizes scene transitions with the user's reading pace.
- **Dynamic Character Expressions:** Characters change expressions (happy, sad, surprised, angry, laughing, wistful) based on story emotions.
- **Advanced Visual Effects:**
  - ✨ Randomly generated and twinkling stars.
  - ☄️ Shooting star animations.
  - 🖱️ Mouse-tracking light trails.
  - 🌬️ **Enhanced Particle System:** Light dust and ice crystal effects.
  - 🪐 **Solar System:** All 9 planets with unique designs and Saturn's rings.
- **Memory Stars:** Interactive "Easter Egg" stars that reveal special messages when clicked.
- **Fully Responsive:** Perfect compatibility with mobile, tablet, and desktop devices.

## 🚀 Technologies Used

This project is built entirely with **Vanilla JavaScript** without any frameworks or libraries.

- **HTML5:** Semantic structure and SEO optimization.
- **CSS3:** Flexbox, Grid, Keyframe Animations, and 3D Transforms.
- **JavaScript (ES6+):** DOM manipulation, Event Listeners, and Story Logic.

## 📂 File Structure

```text
interactive-library/
├── index.html      # Main Page (3D Library View)
├── story1.html     # Story 1: Two Glimmers of Light (Sun & Moon)
├── story2.html     # Story 2: Pluto's Journey (Solar System)
├── style.css       # Styles for Story 1
├── style2.css      # Styles for Story 2 (Planets)
├── script.js       # Story 1 engine and animations
├── script2.js      # Story 2 engine and animations
└── README.md       # Project documentation
```

## 🛠️ Installation and Running

This is a static website—no installation required.

1. Clone the project to your computer:
   ```bash
   git clone https://github.com/YunusKok/interactive-library.git
   ```
2. Double-click the `index.html` file to open it in your browser.
3. Click on a book in the library to start the story.

## 📸 Screenshots

|  3D Library Interface   | Interactive Story Scene |
| :---------------------: | :---------------------: |
| ![Library](library.png) |   ![Story](story.png)   |

## 🔮 Future Plans

- [x] Add more interactive stories to the library.
- [x] Create a children's story with educational theme (Pluto's Journey).
- [ ] Implement "Choose Your Own Adventure" branching narratives.
- [ ] Add sound effects and background music.
- [ ] Create multilingual support.

## 📝 License

This project was developed for educational and hobby purposes. Feel free to use and develop it further with proper attribution.

---

_Developer: [Yunus Mert Kök](https://github.com/YunusKok)_
