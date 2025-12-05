# 📚 Interactive Library: Two Glimmers of Light

> _"True friends know how to share the sky."_

**Interactive Library** is an immersive digital storytelling project built with modern web technologies, designed for children and the young at heart. The project greets visitors with a 3D library interface, and when a book is selected, it opens a magical tale controlled through scrolling.

![Project Status](https://img.shields.io/badge/Status-Complete-success) ![License](https://img.shields.io/badge/License-MIT-blue)

## 🌟 About the Project

This project transforms static reading into a dynamic adventure. The story follows the sweet journey of the **Sun and Moon** in the sky—their playful chase, mutual understanding, and the lesson that true friendship means making each other shine.

As users scroll down the page:

- Text flows naturally,
- Characters (Sun and Moon) move and react emotionally,
- Background and atmospheric events (stars, eclipses, light dust) change with the story's progression.

## ✨ Key Features

- **3D Library Interface:** Using CSS `transform-style: preserve-3d`, a realistic 3D bookshelf with depth perception.
- **Scroll-Triggered Narrative:** `Intersection Observer API` synchronizes scene transitions with the user's reading pace.
- **Dynamic Character Expressions:** Sun and Moon faces change expressions (happy, sad, surprised, angry, wistful) based on story emotions.
- **Advanced Visual Effects:**
  - ✨ Randomly generated and twinkling stars.
  - ☄️ Shooting star animations.
  - 🖱️ Mouse-tracking light trails.
  - 🌬️ **Enhanced Particle System:** When the Sun sneezes, light dust particles appear and fall with gravity simulation.
- **Memory Stars:** Interactive "Easter Egg" stars that reveal special messages when clicked.
- **Fully Responsive:** Perfect compatibility with mobile, tablet, and desktop devices.

## 🚀 Technologies Used

This project is built entirely with **Vanilla JavaScript** without any frameworks or libraries like React or jQuery.

- **HTML5:** Semantic structure and SEO optimization.
- **CSS3:** Flexbox, Grid, Keyframe Animations, and 3D Transforms.
- **JavaScript (ES6+):** DOM manipulation, Event Listeners, and Story Logic.

## 📂 File Structure

```text
interactive-library/
├── index.html      # Main Page (3D Library View)
├── story1.html     # Story Page (Two Glimmers of Light)
├── style.css       # All styles, animations, and responsive code
├── script.js       # Story engine, interactions, and animation logic
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

|   3D Library Interface    | Interactive Story Scene |
| :-----------------------: | :---------------------: |
| ![Library](library.png)   |  ![Story](story.png)    |

## 🔮 Future Plans

- [ ] Add more interactive stories to the library.
- [ ] Implement "Choose Your Own Adventure" branching narratives.
- [ ] Add sound effects and background music.
- [ ] Create multilingual support.

## 📝 License

This project was developed for educational and hobby purposes. Feel free to use and develop it further with proper attribution.

---

_Developer: [Yunus Mert Kök](https://github.com/YunusKok)_
