// MOBILE NAV
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("show");
  });
}

// TABS
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.dataset.tab;

    tabButtons.forEach((b) => b.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));

    btn.classList.add("active");
    const target = document.getElementById(targetId);
    if (target) target.classList.add("active");
  });
});

// ACCORDION
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  header.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

// MODAL
const openDemoModalBtn = document.getElementById("openDemoModal");
const demoModal = document.getElementById("demoModal");
const closeModalOverlay = document.getElementById("closeDemoModal");
const closeModalBtn = document.getElementById("closeDemoModalBtn");

function closeModal() {
  if (demoModal) {
    demoModal.classList.remove("show");
    demoModal.setAttribute("aria-hidden", "true");
  }
}

if (openDemoModalBtn && demoModal) {
  openDemoModalBtn.addEventListener("click", () => {
    demoModal.classList.add("show");
    demoModal.setAttribute("aria-hidden", "false");
  });
}

if (closeModalOverlay) {
  closeModalOverlay.addEventListener("click", closeModal);
}
if (closeModalBtn) {
  closeModalBtn.addEventListener("click", closeModal);
}

// CONTACT FORM VALIDATION
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");
    const formStatus = document.getElementById("formStatus");

    let isValid = true;

    function setError(input, message) {
      const small = input.parentElement.querySelector(".error-message");
      small.textContent = message;
      isValid = false;
    }

    function clearError(input) {
      const small = input.parentElement.querySelector(".error-message");
      small.textContent = "";
    }

    // Reset
    [nameInput, emailInput, subjectInput, messageInput].forEach(clearError);

    // Validations
    if (!nameInput.value.trim()) {
      setError(nameInput, "Name is required");
    }

    if (!emailInput.value.trim()) {
      setError(emailInput, "Email is required");
    } else if (!/^\S+@\S+\.\S+$/.test(emailInput.value)) {
      setError(emailInput, "Enter a valid email");
    }

    if (!subjectInput.value.trim()) {
      setError(subjectInput, "Subject is required");
    }

    if (!messageInput.value.trim()) {
      setError(messageInput, "Message is required");
    }

    if (isValid) {
      formStatus.textContent = "Thank you! Your message has been sent (demo).";
      contactForm.reset();

      setTimeout(() => {
        formStatus.textContent = "";
      }, 4000);
    } else {
      formStatus.textContent = "Please fix the errors above.";
    }
  });
}