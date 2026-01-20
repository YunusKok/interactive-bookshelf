document.addEventListener("DOMContentLoaded", () => {
  const universe = document.getElementById("universe");
  const sun = document.getElementById("sun");
  const storyContainer = document.getElementById("story-scroll-container");
  const preloader = document.getElementById("preloader");
  const memoryModal = document.getElementById("memory-modal");
  const memoryText = document.getElementById("memory-text");
  const closeModal = document.querySelector(".close-modal");

  // Planet references
  const planets = {
    mercury: document.getElementById("mercury"),
    venus: document.getElementById("venus"),
    earth: document.getElementById("earth"),
    mars: document.getElementById("mars"),
    jupiter: document.getElementById("jupiter"),
    saturn: document.getElementById("saturn"),
    uranus: document.getElementById("uranus"),
    neptune: document.getElementById("neptune"),
    pluto: document.getElementById("pluto"),
  };

  // ============================================================
  // === INTRO STATE - Sun and Pluto big and close initially ===
  // ============================================================
  sun.classList.add("intro-state");
  planets.pluto.classList.add("intro-state");
  
  function removeIntroState() {
    sun.classList.remove("intro-state");
    planets.pluto.classList.remove("intro-state");
  }

  // ============================================================
  // === ICE CRYSTAL EFFECTS (PLUTO'S TEARS) ===
  // ============================================================
  function createIceCrystals() {
    const plutoRect = planets.pluto.getBoundingClientRect();
    const crystalCount = 5;

    for (let i = 0; i < crystalCount; i++) {
      setTimeout(() => {
        const crystal = document.createElement("div");
        crystal.classList.add("ice-crystal");
        crystal.style.left = `${plutoRect.left + Math.random() * 20}px`;
        crystal.style.top = `${plutoRect.top + 15}px`;
        document.body.appendChild(crystal);

        setTimeout(() => crystal.remove(), 3000);
      }, i * 200);
    }
  }

  // ============================================================
  // === STORY DATA - PLUTO'S JOURNEY ===
  // ============================================================
  const storyData = [
    // Scene 1: Happy Solar System Introduction
    {
      text: `Once upon a time, in a faraway corner of space, there lived a happy family of planets. They all danced around their warm, glowing parent - the Sun.`,
      action: () => {
        // Remove intro state - transition to normal positions
        removeIntroState();
        
        sun.style.left = "10%";
        sun.classList.add("happy");
        
        // Show all planets happily
        Object.values(planets).forEach((planet, index) => {
          planet.style.opacity = "1";
          planet.classList.add("happy");
        });
      },
    },

    // Scene 2: Introducing the Planets
    {
      text: `There was tiny Mercury, cloudy Venus, beautiful Earth, red Mars, giant Jupiter, ringed Saturn, cool Uranus, and deep blue Neptune. They were all so different, but they lived together in harmony.`,
      action: () => {
        Object.values(planets).forEach(planet => {
          planet.style.opacity = "1";
          planet.classList.remove("happy");
        });
        planets.pluto.style.opacity = "0.3";
        
        // Highlight each planet briefly
        planets.jupiter.style.transform = "translate(-50%, -50%) scale(1.1)";
        planets.saturn.style.transform = "translate(-50%, -50%) scale(1.1)";
      },
    },

    // Scene 3: Introducing Pluto
    {
      text: `Way out at the edge of the solar system, there lived little Pluto. Pluto was small and quiet, orbiting far from the others. But Pluto had the biggest dream - to play with the other planets!`,
      action: () => {
        Object.values(planets).forEach(planet => {
          planet.style.opacity = "0.5";
          planet.classList.remove("happy");
        });
        
        planets.pluto.style.opacity = "1";
        planets.pluto.style.left = "90%";
        planets.pluto.classList.add("happy");
        planets.pluto.classList.add("showing-heart");
      },
    },

    // Scene 4: Pluto Approaches
    {
      text: `One day, Pluto gathered all its courage and floated closer to the other planets. "Hello friends!" called Pluto excitedly. "May I play with you?"`,
      action: () => {
        Object.values(planets).forEach(planet => {
          planet.style.opacity = "1";
        });
        
        planets.pluto.style.left = "75%";
        planets.pluto.classList.remove("showing-heart");
        planets.pluto.classList.add("happy");
        planets.jupiter.classList.add("surprised");
        planets.saturn.classList.add("surprised");
      },
    },

    // Scene 5: Jupiter's Rejection
    {
      text: `Jupiter, the largest planet, laughed loudly. "YOU want to play with US?" Jupiter bellowed. "Look at you! You're so tiny! You're not even a REAL planet - you're just a dwarf!"`,
      action: () => {
        // Show all planets
        Object.values(planets).forEach(planet => {
          planet.style.opacity = "1";
        });
        
        planets.jupiter.style.transform = "translate(-50%, -50%) scale(1.2)";
        planets.jupiter.classList.remove("surprised");
        planets.jupiter.classList.add("laughing");
        
        planets.pluto.classList.remove("happy");
        planets.pluto.classList.add("sad");
        planets.pluto.style.left = "80%";
      },
    },

    // Scene 6: Other Planets Join In
    {
      text: `Saturn swung its rings and giggled. Mars snickered. Even small Mercury looked away. "A dwarf planet? That's not a real planet at all!" they chanted. "Go back to your cold, lonely corner of space!"`,
      action: () => {
        // Show all planets
        Object.values(planets).forEach(planet => {
          planet.style.opacity = "1";
        });
        
        planets.saturn.classList.add("laughing");
        planets.mars.classList.add("laughing");
        planets.mercury.classList.add("wistful");
        planets.venus.classList.add("wistful");
        planets.jupiter.classList.add("laughing");
        
        planets.pluto.classList.add("sad");
        planets.pluto.style.left = "88%";
        planets.pluto.style.filter = "brightness(0.6)";
      },
    },

    // Scene 7: Pluto's Tears
    {
      text: `Poor little Pluto felt so hurt. Tears began to fall - but in the freezing cold of space, they instantly turned into tiny ice crystals that sparkled sadly in the starlight.`,
      action: () => {
        Object.values(planets).forEach(planet => {
          planet.style.opacity = "0.3";
          planet.classList.remove("happy", "laughing");
        });
        
        planets.pluto.style.opacity = "1";
        planets.pluto.classList.add("sad");
        planets.pluto.classList.add("excluded");
        planets.pluto.style.left = "92%";
        
        createIceCrystals();
      },
    },

    // Scene 8: Pluto's Loneliness
    {
      text: `Pluto drifted back to the edges of the solar system, all alone. The cold felt even colder now. "Maybe they're right," Pluto whispered to the stars. "Maybe I don't belong anywhere."`,
      action: () => {
        sun.style.filter = "brightness(0.5)";
        
        Object.values(planets).forEach(planet => {
          planet.style.opacity = "0.2";
        });
        
        planets.pluto.style.opacity = "1";
        planets.pluto.style.left = "95%";
        planets.pluto.classList.add("sad");
        planets.pluto.classList.add("excluded");
        planets.pluto.style.filter = "brightness(0.5)";
      },
    },

    // Scene 9: Earth Notices
    {
      text: `But someone had been watching. Earth, the blue planet full of life and love, had seen everything. Earth noticed Pluto's ice-crystal tears floating through space, and felt something stir inside.`,
      action: () => {
        sun.style.filter = "brightness(0.7)";
        
        planets.earth.style.opacity = "1";
        planets.earth.classList.remove("wistful");
        planets.earth.classList.add("wistful");
        planets.earth.style.transform = "translate(-50%, -50%) scale(1.2)";
        planets.earth.style.boxShadow = "0 0 25px rgba(74, 144, 164, 0.8)";
        
        planets.pluto.style.opacity = "0.6";
        planets.pluto.classList.add("sad");
      },
    },

    // Scene 10: Earth Speaks Up
    {
      text: `"STOP IT!" Earth called out bravely to the other planets. Everyone fell silent. "What we did was wrong. Size doesn't determine someone's worth. Pluto has just as much right to be part of our family as anyone!"`,
      action: () => {
        sun.style.filter = "brightness(1)";
        
        planets.earth.classList.remove("wistful");
        planets.earth.classList.add("angry");
        planets.earth.style.transform = "translate(-50%, -50%) scale(1.3)";
        
        planets.jupiter.classList.remove("laughing");
        planets.jupiter.classList.add("surprised");
        planets.saturn.classList.remove("laughing");
        planets.saturn.classList.add("surprised");
        planets.mars.classList.remove("laughing");
        planets.mars.classList.add("surprised");
        
        Object.values(planets).forEach(planet => {
          planet.style.opacity = "1";
        });
      },
    },

    // Scene 11: Saturn Realizes
    {
      text: `Saturn stopped swinging its rings and looked thoughtful. "You know... Earth is right. Pluto orbits the same Sun as all of us. Pluto has been here longer than I can remember. And... Pluto has the biggest heart in our whole solar system."`,
      action: () => {
        planets.saturn.classList.remove("surprised");
        planets.saturn.classList.add("wistful");
        planets.saturn.style.transform = "translate(-50%, -50%) scale(1.1)";
        
        planets.pluto.classList.remove("sad");
        planets.pluto.classList.add("surprised");
        planets.pluto.style.filter = "brightness(0.8)";
      },
    },

    // Scene 12: Jupiter's Apology
    {
      text: `Even big Jupiter felt ashamed. "I... I was wrong," Jupiter admitted quietly. "I thought being big made me better. But I was just being a bully. Pluto, I'm really, truly sorry."`,
      action: () => {
        planets.jupiter.classList.remove("surprised");
        planets.jupiter.classList.add("sad");
        planets.jupiter.style.transform = "translate(-50%, -50%) scale(0.9)";
        
        planets.pluto.classList.remove("surprised");
        planets.pluto.classList.add("wistful");
        planets.pluto.style.left = "85%";
        planets.pluto.classList.remove("excluded");
      },
    },

    // Scene 13: All Planets Apologize
    {
      text: `One by one, all the planets came forward. "We're sorry, Pluto," they said together. "We were wrong to laugh at you. We were wrong to exclude you. Being different doesn't make anyone less important."`,
      action: () => {
        Object.values(planets).forEach(planet => {
          planet.classList.remove("laughing", "surprised", "angry");
          planet.classList.add("sad");
          planet.style.opacity = "1";
        });
        
        planets.pluto.style.left = "70%";
        planets.pluto.classList.remove("sad", "wistful");
        planets.pluto.classList.add("surprised");
        planets.pluto.style.filter = "brightness(1)";
      },
    },

    // Scene 14: Pluto Forgives
    {
      text: `Pluto's icy surface seemed to glow a little warmer. "I... I forgive you," Pluto said softly. "Everyone makes mistakes. What matters is that we learn from them and grow together."`,
      action: () => {
        planets.pluto.classList.remove("surprised");
        planets.pluto.classList.add("happy");
        planets.pluto.classList.add("showing-heart");
        planets.pluto.style.boxShadow = "0 0 20px rgba(200, 216, 232, 0.8), 0 0 40px rgba(135, 206, 250, 0.5)";
        
        Object.values(planets).forEach(planet => {
          planet.classList.remove("sad");
          planet.classList.add("wistful");
        });
      },
    },

    // Scene 15: The Celebration
    {
      text: `And so, from that day on, all the planets - big and small, close and far - danced together around the Sun. They learned that every world is special, and that true friendship means accepting everyone, no matter their size or how different they may be.`,
      action: () => {
        sun.classList.add("happy");
        sun.style.boxShadow = "0 0 60px var(--sun-color), 0 0 120px var(--sun-glow1), 0 0 180px var(--sun-glow2)";
        
        Object.values(planets).forEach(planet => {
          planet.classList.remove("wistful", "sad");
          planet.classList.add("happy");
          planet.style.opacity = "1";
          planet.style.filter = "brightness(1)";
        });
        
        planets.pluto.style.left = "60%";
        planets.pluto.classList.add("showing-heart");
        planets.pluto.style.transform = "translate(-50%, -50%) scale(1.3)";
      },
    },

    // Scene 16: The Moral
    {
      text: `Little Pluto, once called "too small" and "not a real planet," became the heart of the solar system family. Because in the end, what makes someone special isn't how big or powerful they are - it's the love they carry inside. 💙`,
      action: () => {
        planets.pluto.style.left = "50%";
        planets.pluto.style.top = "50%";
        planets.pluto.style.transform = "translate(-50%, -50%) scale(2)";
        planets.pluto.classList.add("happy");
        planets.pluto.classList.add("showing-heart");
        planets.pluto.style.boxShadow = "0 0 30px rgba(200, 216, 232, 1), 0 0 60px rgba(135, 206, 250, 0.8)";
        
        Object.values(planets).forEach((planet, index) => {
          if (planet !== planets.pluto) {
            planet.style.opacity = "0.6";
            planet.classList.add("happy");
          }
        });
        
        sun.style.opacity = "0.7";
      },
    },
  ];

  // ============================================================
  // === RESET ALL STATES ===
  // ============================================================
  function resetAllStates() {
    const expressions = [
      "happy", "sad", "surprised", "angry", "wistful", 
      "laughing", "welcoming", "excluded", "showing-heart"
    ];
    
    sun.classList.remove(...expressions);
    sun.style.filter = "brightness(1)";
    sun.style.opacity = "1";
    sun.style.boxShadow = "0 0 40px var(--sun-color), 0 0 80px var(--sun-glow1), 0 0 120px var(--sun-glow2)";
    
    Object.values(planets).forEach(planet => {
      planet.classList.remove(...expressions);
      planet.style.opacity = "0";
      planet.style.transform = "translate(-50%, -50%) scale(1)";
      planet.style.filter = "brightness(1)";
    });
    
    // Reset Pluto to original position
    planets.pluto.style.left = "92%";
  }

  // ============================================================
  // === POPULATE STORY ===
  // ============================================================
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

  // ============================================================
  // === INTERSECTION OBSERVER ===
  // ============================================================
  const options = { root: null, rootMargin: "0px", threshold: 0.6 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const activeScene = entry.target;
        const sceneIndex = parseInt(activeScene.getAttribute("data-scene-index"));
        
        document.querySelectorAll(".story-scene").forEach((el) => el.classList.remove("is-active"));
        activeScene.classList.add("is-active");
        
        resetAllStates();
        storyData[sceneIndex].action();
      }
    });
  }, options);

  // ============================================================
  // === TWINKLING STARS ===
  // ============================================================
  function createTwinklingStars() {
    const starCount = 150;
    const memoryStars = [20, 50, 90, 130];
    const memories = [
      "Pluto was discovered in 1930 by Clyde Tombaugh",
      "Pluto has 5 moons, the largest is Charon",
      "A heart-shaped region on Pluto is named Tombaugh Regio",
      "Pluto takes 248 Earth years to orbit the Sun",
    ];

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");

      const memoryIndex = memoryStars.indexOf(i);
      if (memoryIndex !== -1) {
        star.classList.add("memory-star");
        star.dataset.memory = memories[memoryIndex];
        star.style.width = `${Math.random() * 3 + 8}px`;
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

  // ============================================================
  // === SHOOTING STARS ===
  // ============================================================
  function createShootingStar() {
    const star = document.createElement("div");
    star.classList.add("shooting-star");
    star.style.top = `${Math.random() * 50}%`;
    star.style.transform = `rotate(-20deg)`;
    star.style.animationDuration = `${Math.random() * 2 + 3}s`;
    universe.appendChild(star);
    setTimeout(() => star.remove(), 5000);
  }

  // ============================================================
  // === CURSOR TRAIL ===
  // ============================================================
  function createCursorTrail(e) {
    const trail = document.createElement("div");
    trail.classList.add("trail");
    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY}px`;
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 600);
  }

  // ============================================================
  // === FINAL QUOTE ===
  // ============================================================
  function createFinalQuote() {
    const quoteContainer = document.createElement("div");
    quoteContainer.classList.add("final-quote");
    quoteContainer.innerText = "Every world is special. Every heart matters. You belong. 🌟";
    storyContainer.appendChild(quoteContainer);

    setInterval(() => {
      if (document.querySelectorAll(".final-quote .sparkle").length < 15) {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");
        sparkle.style.top = `${Math.random() * 80 + 10}%`;
        sparkle.style.left = `${Math.random() * 90 + 5}%`;
        sparkle.style.animationDelay = `${Math.random() * 1}s`;
        quoteContainer.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1500);
      }
    }, 150);
  }

  // ============================================================
  // === EVENT LISTENERS ===
  // ============================================================
  document.addEventListener("mousemove", createCursorTrail);

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

  // ============================================================
  // === INITIALIZATION ===
  // ============================================================
  createTwinklingStars();
  setInterval(createShootingStar, 8000);
  populateStory();
  
  const scenes = document.querySelectorAll(".story-scene");
  scenes.forEach((scene) => observer.observe(scene));
  
  createFinalQuote();
});
