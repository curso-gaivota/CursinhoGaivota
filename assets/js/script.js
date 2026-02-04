// ================= ANIMAÇÃO DE SCROLL =================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  reveals.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < windowHeight - revealPoint) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ================= EFEITO SUAVE NO HERO =================
window.addEventListener("load", () => {
  document.querySelector(".hero").classList.add("active");
});

const detailsCards = document.querySelectorAll(".card-materia");

detailsCards.forEach(card => {
  card.addEventListener("toggle", () => {
    if (card.open) {
      detailsCards.forEach(otherCard => {
        if (otherCard !== card) {
          otherCard.removeAttribute("open");
          otherCard.querySelector(".icon").textContent = "+";
        }
      });

      card.querySelector(".icon").textContent = "−";
    } else {
      card.querySelector(".icon").textContent = "+";
    }
  });
});


// Animação suave dos cards do diferencial
const diffCards = document.querySelectorAll('.diff-card');

const observerDiff = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

diffCards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(40px)';
  card.style.transition = '0.6s ease';
  observerDiff.observe(card);
});

// Animação sequencial do método
const steps = document.querySelectorAll('.step');

const stepObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

steps.forEach((step, index) => {
  step.style.opacity = 0;
  step.style.transform = 'translateY(40px)';
  step.style.transition = `0.6s ease ${index * 0.15}s`;
  stepObserver.observe(step);
});


document.querySelectorAll('.teacher-card').forEach(card => {
  const button = card.querySelector('.btn-more');

  button.addEventListener('click', (e) => {
    e.stopPropagation(); // impede qualquer efeito em outros cards

    card.classList.toggle('active');

    button.textContent = card.classList.contains('active')
      ? 'Ver menos'
      : 'Ver mais';
  });
});