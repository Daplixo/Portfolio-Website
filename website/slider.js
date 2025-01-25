
      const slides = document.getElementById('slides');
      const dotsContainer = document.getElementById('dotsContainer');
      const prevButton = document.getElementById('prev');
      const nextButton = document.getElementById('next');
      const totalSlides = slides.children.length;

      let currentIndex = 0;

      // Create dots for navigation
      for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
        dot.addEventListener('click', () => goToSlide(i));
      }

      const dots = dotsContainer.querySelectorAll('.dot');

      function updateSlider() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === currentIndex);
        });
      }

      function goToSlide(index) {
        currentIndex = index;
        updateSlider();
      }

      function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
      }

      function showPrevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
      }

      nextButton.addEventListener('click', showNextSlide);
      prevButton.addEventListener('click', showPrevSlide);

      // Auto-slide every 7 seconds
      setInterval(showNextSlide, 10000);
