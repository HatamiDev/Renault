
  const header = document.getElementById("mainHeader");
  const logo = document.getElementById("renaultLogo");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });

  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });














  var swiper = new Swiper(".mySwiper", {
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,

      renderBullet: function (index, className) {
        const labels = [
          "RENAULT GENERATION",
          "NEW CLIO",
          "ELECTRIC RANGE",
          "TAXATION 2026"
        ];

        return `
          <span class="${className} flex flex-col items-center cursor-pointer">
            <div class="bullet-line w-14 md:w-40 h-[2px] bg-white/40 transition-all duration-300"></div>
            <span class="bullet-label mt-1 text-[9px] md:text-xs text-white opacity-70 whitespace-nowrap">
              ${labels[index]}
            </span>
          </span>
        `;
      },
    },

    on: {
      init: function () {
        updateSlideText(this.slides[this.activeIndex]);
        updateBullets();
      },
      slideChange: function () {
        updateSlideText(this.slides[this.activeIndex]);
        updateBullets();
      }
    }
  });

  function updateSlideText(slide) {
    const title = slide.getAttribute("data-title");
    const desc = slide.getAttribute("data-desc");

    document.getElementById("sliderTitle").textContent = title;
    document.getElementById("sliderDesc").textContent = desc;
  }

  // فعال کردن حالت active فقط با Tailwind
  function updateBullets() {
    document.querySelectorAll(".swiper-pagination-bullet").forEach((b) => {
      b.querySelector(".bullet-line").classList.remove("bg-white", "h-[3px]");
      b.querySelector(".bullet-line").classList.add("bg-white/40", "h-[2px]");
      b.querySelector(".bullet-label").classList.add("opacity-70");
    });

    const active = document.querySelector(".swiper-pagination-bullet-active");
    if (active) {
      active.querySelector(".bullet-line").classList.remove("bg-white/40", "h-[2px]");
      active.querySelector(".bullet-line").classList.add("bg-white", "h-[3px]");
      active.querySelector(".bullet-label").classList.remove("opacity-70");
    }
  }














    const bgVideo = document.getElementById("bgVideo");
    const sections = document.querySelectorAll("section");

   
    const firstVideo = sections[0].getAttribute("data-video");
    bgVideo.src = firstVideo;
    bgVideo.load();
    bgVideo.play();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const content = entry.target.querySelector(".section-content");
        const title = content.querySelector(".section-title");
        const desc = content.querySelector(".section-desc");

        if (entry.isIntersecting) {

        
          const newVideo = entry.target.getAttribute("data-video");
          bgVideo.style.opacity = 0;
          setTimeout(() => {
            bgVideo.src = newVideo;
            bgVideo.load();
            bgVideo.play();
            bgVideo.style.opacity = 1;
          }, 200);

      
          title.classList.remove("opacity-40");
          title.classList.add("opacity-100");

  
          desc.classList.remove("hidden");

        } else {

      
          title.classList.add("opacity-40");
          title.classList.remove("opacity-100");


          desc.classList.add("hidden");
        }
      });
    }, { threshold: 0.6 });

    sections.forEach(sec => observer.observe(sec));

