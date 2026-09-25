/* =========================================
   NAVIGATION
========================================= */

function scrollToBooking() {
  const bookingSection = document.getElementById("booking");

  if (bookingSection) {
    bookingSection.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}

function redirectToSite() {
  fbq("track", "Subscribe");

  setTimeout(function () {
    window.location.href = "https://setthelife.com/register";
  }, 300);
}

/* =========================================
   BOOK TICKET
========================================= */

function bookTicket() {
  alert(
    "🎟️ Ticket Booking\n\n₹111 Demo Ticket booking process शुरू किया जा रहा है.",
  );
}

/* =========================================
   COUNTDOWN
========================================= */

/*
   Event Date:
   11 October 2026
   7:11 PM

   Change this date if required.
*/

const eventDate = new Date("October 11, 2026 19:11:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();

  const difference = eventDate - now;

  if (difference <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";

    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

  const minutes = Math.floor((difference / (1000 * 60)) % 60);

  const seconds = Math.floor((difference / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");

  document.getElementById("hours").textContent = String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0",
  );

  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0",
  );
}

updateCountdown();

setInterval(updateCountdown, 1000);

/* =========================================
   FAQ ACCORDION
========================================= */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const currentItem = question.parentElement;

    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== currentItem) {
        item.classList.remove("open");
      }
    });

    currentItem.classList.toggle("open");
  });
});

/* =========================================
   MOBILE MENU
========================================= */

const navLinks = document.querySelector(".nav-links");

const menuBtn = document.getElementById("menuBtn");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-open");
  });
}

/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section[id]");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
});
