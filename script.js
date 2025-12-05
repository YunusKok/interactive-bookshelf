document.addEventListener("DOMContentLoaded", () => {
  const universe = document.getElementById("universe");
  const sun = document.getElementById("sun");
  const moon = document.getElementById("moon");
  const world = document.getElementById("world");
  const storyContainer = document.getElementById("story-scroll-container");
  const preloader = document.getElementById("preloader");
  const memoryModal = document.getElementById("memory-modal");
  const memoryText = document.getElementById("memory-text");
  const closeModal = document.querySelector(".close-modal");

  // ============================================================
  // === ENHANCED PARTICLE SYSTEM FOR LIGHT DUST ===
  // ============================================================

  function createSneezeDust() {
    document.querySelectorAll(".light-dust").forEach((el) => el.remove());

    const dustCount = 80;
    const sunCenterX = 42;
    const sunCenterY = 50;

    for (let i = 0; i < dustCount; i++) {
      const dust = document.createElement("div");
      dust.classList.add("light-dust");

      const angle = (Math.random() * Math.PI * 2);
      const distance = Math.random() * 15 + 5;
      const randomX = sunCenterX + Math.cos(angle) * distance;
      const randomY = sunCenterY + Math.sin(angle) * distance;

      dust.style.left = `${randomX}%`;
      dust.style.top = `${randomY}%`;

      const size = Math.random() * 5 + 2;
      dust.style.width = `${size}px`;
      dust.style.height = `${size}px`;

      dust.style.animationDelay = `${Math.random() * 0.5}s`;
      dust.style.setProperty('--dust-duration', `${Math.random() * 1.5 + 1.5}s`);

      universe.appendChild(dust);
    }
  }

  function removeSneezeDust() {
    const dusts = document.querySelectorAll(".light-dust");
    dusts.forEach((dust) => {
      dust.classList.add("falling");
    });

    setTimeout(() => {
      dusts.forEach((dust) => dust.remove());
    }, 2000);
  }

  // ============================================================
  // === ENHANCED STORY WITH BETTER NARRATIVE ===
  // ============================================================

  const storyData = [
    {
      text: `Once upon a time, in the vast playground of the sky, there lived two very best friends: one was the brilliant Sun, and the other was the gentle Moon.`,
      action: () => {},
    },
    {
      text: `The Sun would wake up early each morning, guiding children to school and tickling flowers awake with warmth. The Moon, however, was quite sleepy; appearing at night, singing lullabies to everyone.`,
      action: () => {},
    },
    {
      text: `These two friends loved each other dearly, but there was one problem: since one worked during the day and the other at night, they never had time to play together.`,
      action: () => {},
    },
    {
      text: `They would wave at each other from afar. The Moon admired the Sun's joyful light. "If only I could be as warm and bright as you," the Moon would sigh.`,
      action: () => {
        moon.classList.add("wistful");
      },
    },
    {
      text: `The Sun, meanwhile, grew tired from rushing everywhere. Watching the Moon's calm, silent glide through the sky, the Sun thought, "How wonderful, you never seem exhausted."`,
      action: () => {
        moon.classList.add("wistful");
        sun.classList.add("wistful");
      },
    },
    {
      text: `One day, the Moon grew restless. "I'm tired of watching from afar," it declared. "I'm going to play tag with the Sun!"`,
      action: () => {
        moon.style.left = "78%";
        moon.classList.add("wistful");
        moon.classList.add("hands-active");
      },
    },
    {
      text: `So the Moon slowly stepped out of its orbit and began tiptoeing toward the Sun. Would the Sun accept this invitation to play?`,
      action: () => {
        moon.style.left = "75%";
        moon.style.top = "45%";
        moon.style.transform = "translate(-50%, -50%) rotate(-10deg)";
        moon.classList.add("hands-active");
      },
    },
    {
      text: `As the Moon drew closer, excitement grew. Its heart began to race. The other stars whispered, "Hey Moon, where are you going?"`,
      action: () => {
        moon.classList.add("wistful");
        moon.style.left = "72%";
        moon.style.top = "42%";
        moon.style.transform = "translate(-50%, -50%) rotate(-20deg)";
        moon.classList.add("hands-active");
      },
    },
    {
      text: `The Sun looked up and saw its closest friend approaching! It was so surprised. "Oh! Moon friend, what are you doing here during daytime?" it asked.`,
      action: () => {
        sun.classList.add("surprised");
        moon.classList.add("wistful");
        moon.style.left = "70%";
        moon.style.top = "45%";
        moon.style.transform = "translate(-50%, -50%) rotate(0deg)";
        moon.classList.add("hands-active");
      },
    },
    {
      text: `The Moon smiled. "I was bored," it said. "I came to play tag with you!" The Sun was so delighted that its light began to dance with joy.`,
      action: () => {
        moon.style.left = "68%";
        moon.classList.add("happy");
        sun.classList.add("happy");
        moon.classList.add("hands-active");
      },
    },
    {
      text: `And so a great chase began across the sky. As the Moon ran toward the Sun, the distance between them grew smaller and smaller.`,
      action: () => {
        moon.style.left = "55%";
        moon.style.top = "35%";
        moon.style.transform = "translate(-50%, -50%) rotate(-30deg)";
        moon.classList.add("happy");
        moon.classList.add("hands-active");
        sun.classList.add("happy");
      },
    },
    {
      text: `The Sun was so warm that as the Moon approached, its cheeks grew hot and turned rosy pink. Like a shy child, it blushed.`,
      action: () => {
        moon.style.left = "45%";
        moon.style.top = "45%";
        moon.style.transform = "translate(-50%, -50%) rotate(-15deg)";
        moon.style.background = "#FFE4E1";
        moon.style.boxShadow = "0 0 20px #FFC0CB, 0 0 40px #FF69B4";
        moon.classList.add("happy");
        moon.classList.add("hands-active");
        sun.classList.add("happy");
      },
    },
    {
      text: `The Sun giggled at the Moon's shyness. "Be careful, Moon friend, get too close and you'll burn like me!" it teased. The Moon replied, "That's okay, being warm beside you feels wonderful."`,
      action: () => {
        sun.classList.add("surprised");
        moon.style.background = "#FFE4E1";
        moon.style.boxShadow = "0 0 20px #FFC0CB, 0 0 40px #FF69B4";
        moon.classList.add("happy");
        moon.style.left = "35%";
        moon.style.top = "55%";
        moon.classList.add("hands-active");
      },
    },
    {
      text: `Now they were so close that they looked like one giant ball of light in the sky. Both of them were laughing with pure joy.`,
      action: () => {
        sun.classList.remove("surprised");
        sun.classList.add("happy");
        moon.classList.add("happy");
        sun.style.left = "42%";
        moon.style.left = "58%";
        sun.style.transform = "translate(-50%, -50%) rotate(-10deg)";
        moon.style.transform = "translate(-50%, -50%) rotate(10deg)";
        moon.classList.add("hands-active");
      },
    },
    {
      text: `The Moon said, "Because of your light, I shine too. Thank you, Sun!" The Sun replied, "I should thank you! Without you, who would watch over the night?"`,
      action: () => {
        sun.classList.add("happy");
        moon.classList.add("happy");
        sun.style.left = "42%";
        moon.style.left = "58%";
        sun.style.transform = "translate(-50%, -50%) rotate(-10deg)";
        moon.style.transform = "translate(-50%, -50%) rotate(10deg)";
      },
    },
    {
      text: `Just then, the Sun sneezed with excitement and accidentally scattered light dust everywhere!`,
      action: () => {
        sun.classList.add("surprised");
        moon.classList.add("happy");
        sun.style.transform = "translate(-50%, -50%) scale(1.1) rotate(-5deg)";
        createSneezeDust();
      },
    },
    {
      text: `The Moon laughed heartily: "Bless you! Look, now everything is sparkling!" The Sun's clumsiness only added more joy to their game.`,
      action: () => {
        moon.classList.add("happy");
        sun.classList.remove("surprised");
        sun.classList.add("happy");
        moon.style.left = "65%";
        moon.style.transform = "translate(-50%, -50%) rotate(20deg)";
        moon.classList.add("hands-active");
        removeSneezeDust();
      },
    },
    {
      text: `"I thought I always had to shine perfectly," said the Sun. The Moon shook its head: "No, sometimes being silly is the most beautiful thing."`,
      action: () => {
        sun.classList.add("happy");
        moon.classList.add("happy");
        moon.style.left = "60%";
        moon.classList.add("hands-active");
      },
    },
    {
      text: `As the two friends stood side by side, they realized how much they loved each other's different qualities.`,
      action: () => {
        sun.style.left = "45%";
        moon.style.left = "55%";
        sun.classList.add("happy");
        moon.classList.add("happy");
      },
    },
    {
      text: `The Moon said, "I'm going to catch you!" and made another move. The greatest game of tag in the sky continued.`,
      action: () => {
        sun.classList.add("happy");
        moon.classList.add("happy");
        moon.style.left = "52%";
        moon.style.transform = "translate(-50%, -50%) scale(1.1)";
        moon.classList.add("hands-active");
      },
    },
    {
      text: `The Sun cried out joyfully: "You can't catch me!" But the Moon was determined, gliding steadily toward it.`,
      action: () => {
        sun.classList.add("happy");
        moon.classList.add("happy");
        sun.style.left = "40%";
        moon.style.left = "48%";
        moon.classList.add("hands-active");
      },
    },
    {
      text: `But the game was so wild that they suddenly lost their balance. Everything became confused!`,
      action: () => {
        sun.style.left = "70%";
        moon.style.left = "30%";
        sun.style.transform = "translate(-50%, -50%) rotate(180deg)";
        moon.style.transform = "translate(-50%, -50%) rotate(-180deg)";
        sun.classList.add("happy");
        moon.classList.add("happy");
        moon.classList.add("hands-active");
      },
    },
    {
      text: `The Moon paused for a moment. "I think we went too far. I've lost my place," it thought.`,
      action: () => {
        sun.classList.add("wistful");
        moon.classList.add("wistful");
        sun.style.transform = "translate(-50%, -50%) rotate(0deg)";
        moon.style.transform = "translate(-50%, -50%) rotate(0deg)";
      },
    },
    {
      text: `But the Sun reassured it: "Don't worry, we're a team. Wherever you go, my light goes with you."`,
      action: () => {
        sun.style.left = "60%";
        moon.style.left = "40%";
        sun.classList.add("happy");
        moon.classList.add("happy");
      },
    },
    {
      text: `And so they understood that even when they weren't side by side, their hearts beat together.`,
      action: () => {
        sun.style.left = "55%";
        moon.style.left = "45%";
        sun.classList.add("happy");
        moon.classList.add("happy");
      },
    },
    {
      text: `Just then, the Sun playfully frowned. "Hey! Look, all the planets are watching you. I think my luck has run out!"`,
      action: () => {
        sun.classList.add("angry");
        sun.style.boxShadow =
          "0 0 70px #FF4500, 0 0 140px #FF0000, 0 0 200px var(--sun-color)";
        moon.classList.add("surprised");
      },
    },
    {
      text: `The Moon quickly replied: "Not at all! I'm just reflecting your light. You're the real star."`,
      action: () => {
        sun.classList.remove("angry");
        moon.classList.add("happy");
      },
    },
    {
      text: `This time the Moon pouted a little: "But you share your light so generously with everyone. I'm afraid there won't be any left for me."`,
      action: () => {
        moon.classList.add("angry");
        moon.classList.remove("hands-active");
      },
    },
    {
      text: `The Sun laughed: "Light doesn't diminish when shared, silly! It multiplies!" The Moon felt relieved hearing this.`,
      action: () => {
        moon.classList.remove("angry");
        sun.classList.add("happy");
      },
    },
    {
      text: `One day, the Moon wanted to surprise the Sun. "I'm going to play such a trick that it will be amazed," it thought.`,
      action: () => {
        moon.classList.add("wistful");
        sun.classList.add("surprised");
        moon.style.left = "60%";
        moon.style.top = "30%";
        moon.style.transform = "translate(-50%, -50%) rotate(-45deg)";
        moon.classList.add("hands-active");
      },
    },
    {
      text: `And suddenly, the Moon jumped right in front of the Sun! "Surprise!"`,
      action: () => {
        sun.classList.add("angry");
        moon.classList.add("surprised");
        sun.style.left = "50%";
        moon.style.left = "50%";
        moon.style.top = "50%";
        sun.style.transform = "translate(-50%, -50%) scale(1.2)";
        moon.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";
        moon.style.zIndex = "15";
        moon.classList.add("hands-active");
      },
    },
    {
      text: `And that's when it happened. As the Moon moved in front of the Sun, the lights on Earth went out! This is what they call a "Solar Eclipse."`,
      action: () => {
        sun.classList.add("sad");
        moon.classList.add("sad");
        sun.style.left = "50%";
        moon.style.left = "50%";
        world.style.left = "50%";
        world.style.top = "80%";
        world.style.opacity = "1";
        moon.style.zIndex = "15";
      },
    },
    {
      text: `When Earth suddenly darkened, everyone was shocked. The Sun cried, "Moon! Move away! Children can't play, everything is dark!" The Moon felt terrible: "Oh no! I only wanted to play a trick!"`,
      action: () => {
        sun.classList.add("sad");
        moon.classList.add("sad");
        sun.style.left = "50%";
        moon.style.left = "50%";
        world.style.left = "50%";
        world.style.top = "80%";
        world.style.opacity = "1";
        moon.style.zIndex = "15";
        sun.style.boxShadow =
          "0 0 20px var(--sun-color), 0 0 40px var(--sun-glow1)";
        moon.style.boxShadow = "0 0 5px #444";
        moon.style.background = "#333";
      },
    },
    {
      text: `The Sun couldn't send its light. The Moon had lost its own glow, turning completely dark. The game had gone too far.`,
      action: () => {
        sun.classList.add("sad");
        moon.classList.add("sad");
        sun.style.left = "50%";
        moon.style.left = "50%";
        world.style.left = "50%";
        world.style.top = "80%";
        world.style.opacity = "1";
        moon.style.zIndex = "15";
        sun.style.boxShadow =
          "0 0 20px var(--sun-color), 0 0 40px var(--sun-glow1)";
        moon.style.boxShadow = "0 0 5px #444";
        moon.style.background = "#333";
      },
    },
    {
      text: `The Sun spoke wisely: "Look, we're both different. I must light the world, and you must decorate the night. If we block each other, everything falls apart."`,
      action: () => {},
    },
    {
      text: `In the darkness, the Moon understood. "You're right, Sun. Without your light, I'm invisible. We're a wonderful team, and we shouldn't get in each other's way."`,
      action: () => {},
    },
    {
      text: `In the darkness, the Moon felt its inner strength awakening. "Okay," it said, "I'll move aside and return to my duty."`,
      action: () => {
        moon.style.boxShadow = "0 0 10px #add8e6, 0 0 20px #4682b4";
        moon.style.background = "#444";
        sun.classList.add("sad");
        moon.classList.add("sad");
        moon.style.zIndex = "15";
      },
    },
    {
      text: `As the Moon slowly moved away, a bright beam of light shone from its edges. It was like winking and saying, "Everything will be okay."`,
      action: () => {
        moon.classList.remove("sad");
        moon.classList.add("happy");
        moon.style.left = "60%";
        moon.style.boxShadow =
          "0 0 20px #add8e6, 0 0 35px #4682b4, 0 0 50px #ffffff";
        sun.classList.add("sad");
        moon.style.zIndex = "2";
      },
    },
    {
      text: `The Sun saw the Moon's understanding and became very happy. "Well done, my wise friend!" it said.`,
      action: () => {
        sun.classList.remove("sad");
        sun.classList.add("wistful");
        moon.classList.add("happy");
        moon.style.left = "70%";
      },
    },
    {
      text: `And finally, as the Moon completely moved away, the Sun's light returned to Earth! Birds began to sing, flowers started to bloom.`,
      action: () => {
        sun.classList.add("surprised");
        moon.classList.add("happy");
        moon.style.boxShadow =
          "0 0 20px #add8e6, 0 0 35px #4682b4, 0 0 50px #ffffff";
        sun.style.boxShadow = `0 0 50px var(--sun-color), 0 0 100px var(--sun-glow1), 0 0 150px var(--sun-glow2)`;
        moon.style.left = "80%";
      },
    },
    {
      text: `And so the eclipse ended. Everyone breathed a sigh of relief.`,
      action: () => {
        world.style.left = "120%";
        world.style.opacity = "0";
        sun.classList.remove("surprised");
        sun.classList.add("happy");
        moon.classList.add("happy");
      },
    },
    {
      text: `From that day on, the Sun and Moon always followed the rules of the sky. They learned that true friendship isn't about blocking each other—it's about making each other shine.`,
      action: () => {
        sun.style.left = "25%";
        moon.style.left = "75%";
        moon.style.background = "var(--moon-color)";
        moon.style.boxShadow = "0 0 15px #FFFFFF, 0 0 30px var(--moon-glow)";
        sun.classList.add("happy");
        moon.classList.add("happy");
      },
    },
    {
      text: `The Sun warmed the days, the Moon lit up the nights. They never separated, just took turns doing their jobs.`,
      action: () => {
        sun.classList.add("happy");
        moon.classList.add("happy");
      },
    },
    {
      text: `And they lived happily ever after in the sky. At every sunset and sunrise, they waved to each other, never forgetting their special friendship.`,
      action: () => {
        sun.classList.add("happy");
        moon.classList.add("happy");
        sun.style.left = "40%";
        sun.style.transform = "translate(-50%, -50%) rotate(-15deg)";
        moon.style.left = "60%";
        moon.style.transform = "translate(-50%, -50%) rotate(15deg)";
        moon.classList.add("hands-active");
      },
    },
  ];

  function resetAllStates() {
    document.querySelectorAll(".light-dust").forEach((el) => el.remove());

    const expressions = [
      "happy",
      "sad",
      "surprised",
      "angry",
      "wistful",
      "hands-active",
    ];
    sun.classList.remove(...expressions);
    moon.classList.remove(...expressions);
    sun.style.left = "20%";
    sun.style.top = "50%";
    sun.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";
    sun.style.boxShadow = `0 0 50px var(--sun-color), 0 0 100px var(--sun-glow1), 0 0 150px var(--sun-glow2)`;
    sun.style.zIndex = "2";

    moon.style.left = "80%";
    moon.style.top = "50%";
    moon.style.transform = "translate(-50%, -50%) rotate(0deg) scale(1)";
    moon.style.background = "var(--moon-color)";
    moon.style.boxShadow = "0 0 15px #FFFFFF, 0 0 30px var(--moon-glow)";
    moon.style.zIndex = "2";

    world.style.left = "-100px";
    world.style.top = "50%";
    world.style.opacity = "0";
    world.style.zIndex = "10";
  }

  function populateStory() {
    const totalScenes = storyData.length;
    storyData.forEach((scene, index) => {
      const sceneEl = document.createElement("div");
      sceneEl.classList.add("story-scene");
      sceneEl.setAttribute("data-scene-index", index);

      const paragraph = document.createElement("p");
      paragraph.innerHTML = scene.text;
      sceneEl.appendChild(paragraph);

      const progressIndicator = document.createElement("div");
      progressIndicator.classList.add("scene-progress");
      progressIndicator.innerText = `${index + 1} / ${totalScenes}`;
      sceneEl.appendChild(progressIndicator);

      storyContainer.appendChild(sceneEl);
    });
  }

  const options = { root: null, rootMargin: "0px", threshold: 0.6 };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const activeScene = entry.target;
        const sceneIndex = parseInt(
          activeScene.getAttribute("data-scene-index")
        );
        document
          .querySelectorAll(".story-scene")
          .forEach((el) => el.classList.remove("is-active"));
        activeScene.classList.add("is-active");
        resetAllStates();
        storyData[sceneIndex].action();
      }
    });
  }, options);

  document.addEventListener("mousemove", createCursorTrail);
  let isScrolling;
  window.addEventListener("scroll", () => {
    isScrolling = true;
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
      isScrolling = false;
    }, 100);
  });

  window.addEventListener("load", () => {
    preloader.classList.add("hidden");
  });

  universe.addEventListener("click", (e) => {
    if (e.target.classList.contains("memory-star")) {
      memoryText.textContent = e.target.dataset.memory;
      memoryModal.classList.add("active");
    }
  });

  closeModal.addEventListener("click", () => {
    memoryModal.classList.remove("active");
  });

  memoryModal.addEventListener("click", (e) => {
    if (e.target.id === "memory-modal") {
      memoryModal.classList.remove("active");
    }
  });

  function createTwinklingStars() {
    const starCount = 200;
    const memoryStars = [15, 65, 115, 165];
    const memories = [
      "The Little Prince's Rose",
      "Apollo 11's Footprint",
      "Halley's Comet",
      "The Hitchhiker's Guide to the Galaxy",
    ];

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");

      const memoryIndex = memoryStars.indexOf(i);
      if (memoryIndex !== -1) {
        star.classList.add("memory-star");
        star.dataset.memory = memories[memoryIndex];
        star.style.width = `${Math.random() * 3 + 10}px`;
        star.style.height = star.style.width;
      } else {
        star.classList.add("star");
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${Math.random() * 4}s`;
        star.style.animationDuration = `${Math.random() * 2 + 3}s`;
      }

      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      universe.appendChild(star);
    }
  }

  function createShootingStar() {
    const star = document.createElement("div");
    star.classList.add("shooting-star");
    star.style.top = `${Math.random() * 60}%`;
    star.style.transform = `rotate(-25deg)`;
    star.style.animationDuration = `${Math.random() * 2 + 3}s`;
    universe.appendChild(star);
    setTimeout(() => {
      star.remove();
    }, 5000);
  }

  function createCursorTrail(e) {
    const trail = document.createElement("div");
    trail.classList.add("trail");
    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY}px`;
    if (isScrolling) {
      trail.style.transform = "translate(-50%, -50%) scale(2)";
    }
    document.body.appendChild(trail);
    setTimeout(() => {
      trail.remove();
    }, 800);
  }

  function createFinalQuote() {
    const quoteContainer = document.createElement("div");
    quoteContainer.classList.add("final-quote");
    quoteContainer.innerText = "True friends know how to share the sky.";
    storyContainer.appendChild(quoteContainer);

    setInterval(() => {
      if (document.querySelectorAll(".final-quote .sparkle").length < 20) {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");
        sparkle.style.top = `${Math.random() * 80 + 10}%`;
        sparkle.style.left = `${Math.random() * 90 + 5}%`;
        sparkle.style.animationDelay = `${Math.random() * 1.5}s`;
        quoteContainer.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 2000);
      }
    }, 100);
  }

  createTwinklingStars();
  setInterval(createShootingStar, 7000);
  populateStory();
  const scenes = document.querySelectorAll(".story-scene");
  scenes.forEach((scene) => observer.observe(scene));
  createFinalQuote();
});
