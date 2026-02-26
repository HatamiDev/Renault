
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
        "ELECTRICAL RANGE",
        "TAXATION 2026"
      ];

      return `
        <span class="${className}">
          <div class="bullet-item">
            <div class="bullet-line"></div>
            <span class="bullet-label">${labels[index]}</span>
          </div>
        </span>
      `;
    },
  },

 
  on: {
    init: function () {
      updateSlideText(this.slides[this.activeIndex]);
    },
    slideChange: function () {
      updateSlideText(this.slides[this.activeIndex]);
    }
  }
});

function updateSlideText(slide) {
  const title = slide.getAttribute("data-title");
  const desc = slide.getAttribute("data-desc");

  document.getElementById("sliderTitle").textContent = title;
  document.getElementById("sliderDesc").textContent = desc;
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

