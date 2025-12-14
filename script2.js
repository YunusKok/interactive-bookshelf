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

      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 15 + 5;
      const randomX = sunCenterX + Math.cos(angle) * distance;
      const randomY = sunCenterY + Math.sin(angle) * distance;

      dust.style.left = `${randomX}%`;
      dust.style.top = `${randomY}%`;

      const size = Math.random() * 5 + 2;
      dust.style.width = `${size}px`;
      dust.style.height = `${size}px`;

      dust.style.animationDelay = `${Math.random() * 0.5}s`;
      dust.style.setProperty(
        "--dust-duration",
        `${Math.random() * 1.5 + 1.5}s`
      );

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

  // ============================================================
  // === ENHANCED STORY WITH BETTER NARRATIVE ===
  // ============================================================

  // ============================================================
  // === ENHANCED STORY WITH BETTER NARRATIVE ===
  // ============================================================

  const storyData = [
    // --- BÖLÜM 1: GİRİŞ VE SORUN ---
    {
      text: `Ezelden beri Güneş ve Ay, gökyüzünün iki hükümdarıydı. Biri günü, diğeri geceyi sırtlanmıştı. Yüzyıllardır süren kadim bir dostlukları vardı; fakat son zamanlarda yörüngeleri değişmiş, kelimeler ağırlaşmıştı.`,
      action: () => {
        sun.style.left = "20%";
        moon.style.left = "80%";
        world.style.opacity = "0"; // Dünya başta görünmez
        moon.classList.add("happy");
      },
    },
    {
      text: `Güneş her zamanki kadar parlaktı ama ışığında bir titreme vardı. İçinde tuttuğu bir hikaye, kalbine bir gölge gibi düşmüştü. Bir akşamüstü, ufuk çizgisinde Ay ile karşılaştıklarında daha fazla saklayamadı.`,
      action: () => {
        sun.classList.add("wistful");
      },
    },
    // --- BÖLÜM 2: GÜNEŞ'İN İTİRAFI VE YÖNETMEN HİKAYESİ ---
    {
      text: `Güneş söze başladı: 'Sana bir hikaye anlatacağım Ay, çünkü sessizliğin bedelini bu hikayeyle öğrendim. Bir yönetmen, seçmelerde gördüğü o yetenekli kıza hayran kalıyor ama tek kelime etmiyor.'`,
      action: () => {
        sun.style.left = "30%";
        moon.style.left = "70%";
        sun.classList.add("wistful");
      },
    },
    {
      text: `'Neden biliyor musun? 'Şimdiden şımarmasın, nasıl olsa ilerde yine karşılaşırız, o zaman överim' diyor. İçinden taşan o güzel duyguları, takdiri bir sonraki güne, 'uygun zamana' erteliyor.'`,
      action: () => {
        sun.classList.add("sad");
        sun.style.filter = "brightness(1)";
        moon.style.filter = "brightness(1)";
      },
    },
    {
      text: `'Ama ertesi gün... O kız bir kazada hayatını kaybediyor. Yönetmen kahroluyor. 'Keşke' diyor, 'Keşke o an söyleseydim. Gururum neye yaradı şimdi? Ne kaybederdim ki hislerimi açsaydım?''`,
      action: () => {
        moon.style.transform = "translate(-50%, -50%) scale(0.9)";
        sun.style.transform = "translate(-50%, -50%) scale(0.9)";
        sun.classList.add("sad");
        sun.style.filter = "brightness(0.7)";
        moon.style.filter = "brightness(0.7)";
        sun.style.boxShadow = "0 0 50px #ff4500";
        moon.classList.add("sad");
      },
    },
    {
      text: `Güneş ışığını kararlılıkla Ay'a çevirdi 'İşte bu yüzden ay kendini iyi hissetti ve "Sana olan hislerimi, içimdeki bu parıltıyı saklamanın bir anlam ifade etmediğini biliyorum dedi."'`,
      action: () => {
        moon.style.transform = "translate(-50%, -50%) scale(1.2)";
        sun.style.transform = "translate(-50%, -50%) scale(1.2)";
        sun.style.filter = "brightness(1)";
        moon.style.filter = "brightness(1)";
        sun.classList.remove("sad");
        sun.classList.add("happy");
        sun.style.boxShadow = "0 0 80px #ffd700";
        sun.style.left = "35%";
        moon.style.left = "65%";
        moon.classList.remove("sad");
        moon.classList.add("happy");
      },
    },
    // --- BÖLÜM 3: AY'IN CEVABI VE LALE METAFORU ---
    {
      text: `Ayın yüzünde yargılayan değil, derinden anlayan bir ifade belirdi. 'Açıkçası ben insanları dış görünüşlerine göre yargılayan biri değilim. Senin iç güzelliğin asıl çekici olan.'`,
      action: () => {
        moon.classList.add("wistful");
      },
    },
    {
      text: `'Seni keşfettikçe hoşlanıyorum. Senin sen olman hoşuma gidiyor. Kendini o edebi, o zarif biçimde ifade etmen... Gerçekten çok hoş ve sadece sana özel.'`,
      action: () => {
        moon.style.transform = "translate(-50%, -50%) scale(1.3)";
        sun.classList.add("happy");
        moon.classList.add("happy");
        moon.classList.add("hands-active");
      },
    },
    {
      text: `'Çok güzelsin ve seni tanıdıkça güzelliğin bir lale gibi açıyor. Başta sadece bir soğan, sonra yeşil yapraklar ve finalde mis kokulu, rengarenk bir lale. Hoşlanıyorum ve gittikçe gözümde çiçek gibi açıyorsun.'`,
      action: () => {
        sun.classList.add("happy");
        moon.classList.add("happy");
        moon.style.transform = "translate(-50%, -50%) rotate(-15deg)";
        moon.style.background = "#FFE4E1";
        moon.style.boxShadow = "0 0 20px #FFC0CB, 0 0 40px #FF69B4";
      },
    },
    {
      text: `Güneş şaşkınlıkla, 'Benim hazır olmadığım zaman, beklemediğim bir insandan böyle sözler duymak... Çok teşekkür ederim, çok zarifsin. Konuşmalarımız aramızda kalacak, bana sadece biraz zaman ver...' dedi.`,
      action: () => {
        sun.classList.add("wistful");
        sun.classList.remove("happy");
        moon.classList.remove("happy");
        moon.classList.add("wistful");
        sun.style.left = "40%";
        moon.style.left = "60%";
      },
    },
    // --- BÖLÜM 4: DÜNYA GİRER (AY TUTULMASI) ---
    {
      text: `Tam duygular filizlenirken, hikayenin en büyük engeli ortaya çıktı. Dünya, o devasa ve sessiz gövdesiyle yavaşça Güneş ile Ay'ın arasına girdi.`,
      action: () => {
        moon.style.filter = "brightness(1)";
        sun.style.filter = "brightness(1)";
        world.style.left = "50%";
        world.style.opacity = "1";
        world.style.zIndex = "10";
        sun.style.left = "15%";
        moon.style.left = "85%";
        sun.classList.add("surprised");
        moon.classList.add("surprised");
      },
    },
    {
      text: `Onlar, aralarındaki aşılmaz dağların bu mavi gezegen olduğunu sanıyorlardı; oysa asıl engel, kendi zihinlerinde inşa ettikleri o görünmez duvarlardı. Güneş ve Ay, aynı gökyüzünü paylaşsalar da zamanın acımasız çarkında birbirlerine yabancılaşmışlardı. Bir zamanlar kainatı ısıtan o kadim bağ, artık yerini uzayın sonsuz ve soğuk sessizliğine bırakmıştı`,
      action: () => {
        sun.style.transform = "translate(-50%, -50%) rotate(-15deg)";
        moon.style.transform = "translate(-50%, -50%) rotate(15deg)";
        moon.style.filter = "brightness(0.8)";
        sun.style.filter = "brightness(0.8)";
        world.style.left = "50%";
        world.style.opacity = "1";
        world.style.zIndex = "10";
        sun.style.left = "15%";
        moon.style.left = "85%";
        sun.classList.add("surprised");
        moon.classList.add("surprised");
      },
    },
    {
      text: `Güneş'in ışığı kesildi. Dünya'nın gölgesi Ay'ın üzerine düştü. Bu bir Ay Tutulmasıydı. Birbirlerini göremez oldular. Aradaki o sıcak bağ, yerini soğuk bir karanlığa bıraktı.`,
      action: () => {
        world.style.left = "50%";
        world.style.opacity = "1";
        world.style.zIndex = "10";
        sun.style.left = "15%";
        sun.style.filter = "brightness(0.3)"; // Güneş kararır
        moon.style.filter = "brightness(0.3)"; // Ay kararır
        moon.style.background = "#444";
        moon.style.boxShadow = "none";
        moon.classList.add("sad");
        sun.classList.add("sad");
      },
    },
    // --- BÖLÜM 5: AY'IN ADIMI VE YENİDEN ISINMA ---
    {
      text: `Ay karanlıkta yapayalnız kaldı. Bu ayrılık ona ağır geldi. Güneşsiz kalmanın soğukluğu, gururundan daha baskındı. Dünya'nın gölgesinde saklanmak yerine, cesaretle bir adım attı.`,
      action: () => {
        world.style.left = "50%";
        world.style.opacity = "1";
        world.style.zIndex = "10";
        sun.style.filter = "brightness(1)";
        moon.style.top = "25%";
        moon.style.left = "65%"; // Ay gölgeden çıkmaya başlar
        moon.classList.remove("sad");
      },
    },
    {
      text: `Gölgeden sıyrılan Ay, tekrar Güneş'in yüzünü gördü. Güneş onu görünce ışığını coşkuyla artırdı. Yeniden ısındılar, aralarındaki mesafe buz gibi eriyip gitti.`,
      action: () => {
        world.style.left = "50%";
        world.style.opacity = "1";
        world.style.zIndex = "10";
        moon.style.top = "15%";
        moon.style.left = "55%"; // Ay daha da yaklaşır
        moon.style.filter = "brightness(1)";
        moon.style.background = "#e0e0e0";
        moon.style.boxShadow = "0 0 30px #b0c4de";
        sun.classList.remove("sad");
        sun.classList.add("happy");
        moon.classList.add("happy");
        world.style.opacity = "0.3"; // Dünya silikleşir
      },
    },
    // --- BÖLÜM 6: KISKANÇLIK ---
    {
      text: `Fakat bu yakınlaşma Ay'ın içine yeni bir kurt düşürdü. Aşağıya baktı; Güneş ışığını ağaçlara, denizlere, insanlara... herkese saçıyordu. Ay'ın yüzü düştü.`,
      action: () => {
        world.style.left = "50%";
        world.style.opacity = "1";
        world.style.zIndex = "10";
        moon.classList.remove("happy");
        moon.classList.add("angry"); // Kıskançlık ifadesi
        moon.style.background = "#ffdcd1ff";
        moon.style.boxShadow = "0 0 30px #ff4400ff";
        sun.classList.remove("happy");
        sun.classList.add("surprised");
      },
    },
    {
      text: `'Baksana,' dedi Ay sitemle. 'Sen ışığını herkese o kadar cömertçe dağıtıyorsun ki... Herkes seninle ısınıyor. Bana özel, sadece benim olan bir sıcaklığın kalmıyor sanki.'`,
      action: () => {
        moon.style.transform = "translate(-50%, -50%) rotate(-15deg)";
      },
    },
    // --- BÖLÜM 7: GÜNEŞ'İN CEVABI VE BAĞLILIK ---
    {
      text: `Güneş şefkatle gülümsedi: 'Işık bir hazine değildir Ay, paylaştıkça azalmaz, aksine çoğalır. Dünyaya gündüzü veriyorum evet, ama gecenin en karanlık anında sana yansıttığım o ışık... O sadece ikimize ait.'`,
      action: () => {
        sun.classList.remove("surprised");
        sun.classList.add("happy");
        moon.classList.remove("angry");
        moon.classList.add("wistful"); // Yumuşama
      },
    },
    {
      text: `Ay bunu duyunca sakinleşti. Birbirlerinden tamamen koparlarsa, evrenin ne kadar soğuk olacağını o tutulmada görmüşlerdi. O riski bir daha alamazlardı.`,
      action: () => {
        sun.style.left = "40%";
        moon.style.left = "60%";
        world.style.opacity = "0"; // Dünya tamamen gider
      },
    },
    // --- FİNAL: ARKADAŞTAN ÖTE ---
    {
      text: `Böylece bir karar verdiler. Ne birbirlerini yakacaklar, ne de uzaklaşıp donacaklardı. Onlar kopmaz bir bağla birbirine tutunan iki ışıktı artık.`,
      action: () => {
        sun.classList.add("happy");
        moon.classList.add("happy");
        // Birbirlerine çok yakın ama değmiyorlar (Situationship görseli)
        sun.style.left = "42%";
        moon.style.left = "58%";
        sun.style.transform = "translate(-50%, -50%) rotate(-10deg)";
        moon.style.transform = "translate(-50%, -50%) rotate(10deg)";
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
    quoteContainer.innerText =
      "Birbirlerine ateş olup can yakmak yerine, ışık olup yollarını aydınlatmayı seçtiler.";
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
