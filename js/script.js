document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
  window.addEventListener('scroll', () => {
  navLinks.classList.remove('show');
});
});
// Back to Top functionality
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'flex';
  } else {
    backToTopBtn.style.display = 'none';
  }
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".testimonial-scroll-wrapper");
  const cards = document.querySelectorAll(".testimonial-card");
  const dots = document.querySelectorAll(".testimonial-dots .dot");
  
  // Initialize dots
  if (cards.length > 0 && dots.length > 0) {
    dots[0].classList.add("active");
    
    // Calculate card width including gap
    const cardStyle = window.getComputedStyle(cards[0]);
    const cardWidth = cards[0].offsetWidth + 
      parseInt(cardStyle.marginLeft) + 
      parseInt(cardStyle.marginRight);
    
    // Handle scroll events
    wrapper.addEventListener("scroll", () => {
      const scrollLeft = wrapper.scrollLeft;
      const cardIndex = Math.round(scrollLeft / cardWidth);
      
      // Update active dot
      dots.forEach((dot, index) => {
        if (index === cardIndex) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });
    }, { passive: true });
    
    // Handle dot clicks
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        const scrollPosition = index * cardWidth;
        wrapper.scrollTo({
          left: scrollPosition,
          behavior: "smooth"
        });
      });
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".testimonial-scroll-wrapper");
  wrapper.scrollLeft = 0;
});