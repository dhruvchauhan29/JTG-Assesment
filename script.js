const video = document.getElementById("featureVideo");
const playBtn = document.getElementById("playBtn");
const playIcon = playBtn.querySelector("i");

playBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playBtn.style.display = "none";
  } else {
    video.pause();
    playBtn.style.display = "flex";
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
  }
});

video.addEventListener("click", () => {
  if (!video.paused) {
    video.pause();
    playBtn.style.display = "flex";
  }
});

function tryNow() {
  alert("Redirecting to sign-up page...");
}

const form = document.getElementById("contactForm");
const modal = document.getElementById("successModal");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  modal.classList.add("active");
  document.body.classList.add("modal-open");
  form.reset();
});

function closeModal() {
  modal.classList.remove("active");
  document.body.classList.remove("modal-open");
}
