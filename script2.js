document.addEventListener("DOMContentLoaded", function () {
  // Testimonial data
  const testimonials = [
    {
      company: "IBM",
      content:
        "Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.",
      author: "John Doe",
      position: "UI designer",
    },
    {
      company: "Google",
      content:
        "We've been using this product for years and it has transformed our workflow completely.",
      author: "Jane Smith",
      position: "Product Manager",
    },
    {
      company: "Microsoft",
      content:
        "The simplicity and efficiency of this solution is unmatched in the industry.",
      author: "Mike Johnson",
      position: "CTO",
    },
  ];

  const slidesContainer = document.querySelector(".testimonial-slides");
  const dotsContainer = document.querySelector(".carousel-dots");
  let currentIndex = 0;
  let interval;

  // Create slides and dots
  testimonials.forEach((testimonial, index) => {
    // Create slide
    const slide = document.createElement("div");
    slide.className = "testimonial-slide";
    slide.innerHTML = `
          <h3 class="testimonial-company">${testimonial.company}</h3>
          <p class="testimonial-content">${testimonial.content}</p>
          <p class="testimonial-author">${testimonial.author}</p>
          <p class="testimonial-position">${testimonial.position}</p>
      `;
    slidesContainer.appendChild(slide);

    // Create dot
    const dot = document.createElement("div");
    dot.className = "dot";
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  // Start auto-sliding
  startInterval();

  function startInterval() {
    interval = setInterval(() => {
      goToSlide((currentIndex + 1) % testimonials.length);
    }, 5000);
  }

  function goToSlide(index) {
    // Update current index
    currentIndex = index;

    // Update slide position
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update dots
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
      if (i === currentIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });

    // Reset interval
    clearInterval(interval);
    startInterval();
  }

  // Pause on hover (optional)
  slidesContainer.addEventListener("mouseenter", () => clearInterval(interval));
  slidesContainer.addEventListener("mouseleave", startInterval);
});
