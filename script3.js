const testimonials = [
  {
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    text: "Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.",
    authorImg: "https://randomuser.me/api/portraits/men/32.jpg",
    authorName: "John Doe",
    authorRole: "UI Designer",
  },
  {
    companyLogo:
      "https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png",
    text: "Slate helped us simplify our workflows and get more done. Great for any solo developer or small team!",
    authorImg: "https://randomuser.me/api/portraits/women/44.jpg",
    authorName: "Alice Smith",
    authorRole: "Frontend Developer",
  },
  {
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    text: "The intuitive design and ease of use made it the perfect tool for my freelance projects.",
    authorImg: "https://randomuser.me/api/portraits/men/45.jpg",
    authorName: "Michael Brown",
    authorRole: "Product Designer",
  },
];

let currentIndex = 0;

const container = document.getElementById("testimonial-container");
const dotsContainer = document.getElementById("testimonial-dots");

function renderTestimonial(index) {
  const t = testimonials[index];
  container.innerHTML = `
    <div class="testimonial-logo">
      <img src="${t.companyLogo}" alt="logo">
    </div>
    <p class="testimonial-text">${t.text}</p>
    <div class="testimonial-author">
      <img src="${t.authorImg}" alt="author">
      <div>
        <strong>${t.authorName}</strong><br>
        <span>${t.authorRole}</span>
      </div>
    </div>
  `;

  // Update dots
  dotsContainer.innerHTML = testimonials
    .map(
      (_, i) =>
        `<span class="dot ${
          i === index ? "active" : ""
        }" onclick="goToSlide(${i})"></span>`
    )
    .join("");
}

function goToSlide(index) {
  currentIndex = index;
  renderTestimonial(index);
}

// Auto slide
setInterval(() => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  renderTestimonial(currentIndex);
}, 5000);

// Initial render
renderTestimonial(currentIndex);
