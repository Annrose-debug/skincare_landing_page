document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      if (navLinks.style.display === 'flex') {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'white';
        navLinks.style.padding = '2rem';
        navLinks.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        navLinks.style.gap = '1.5rem';
      }
    });
  }
  
  // Add to cart buttons
  const addToCartBtns = document.querySelectorAll('.buy-btn');
  
  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const productCard = btn.closest('.product-card');
      const productName = productCard.querySelector('h3').textContent;
      const productPrice = productCard.querySelector('.price').textContent;
      
      // Add animation feedback
      btn.textContent = 'Added!';
      btn.style.background = '#4CAF50';
      
      setTimeout(() => {
        btn.textContent = 'Add to Cart';
        btn.style.background = '';
      }, 1500);
      
      console.log(`Added to cart: ${productName} - ${productPrice}`);
    });
  });
  
  // Newsletter form submission
  const newsletterForm = document.querySelector('.newsletter-form');
  const newsletterInput = newsletterForm?.querySelector('input[type="email"]');
  const newsletterBtn = newsletterForm?.querySelector('.newsletter-btn');
  
  if (newsletterBtn) {
    newsletterBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      if (!newsletterInput.value || !newsletterInput.value.includes('@')) {
        newsletterInput.style.border = '2px solid #ff6f91';
        newsletterInput.placeholder = 'Please enter a valid email';
        return;
      }
      
      newsletterBtn.textContent = 'Subscribed!';
      newsletterBtn.style.background = '#4CAF50';
      newsletterBtn.style.color = 'white';
      
      setTimeout(() => {
        newsletterBtn.textContent = 'Subscribe';
        newsletterBtn.style.background = '';
        newsletterBtn.style.color = '';
        newsletterInput.value = '';
        newsletterInput.style.border = '';
        newsletterInput.placeholder = 'Enter your email';
      }, 2000);
      
      console.log(`Newsletter subscription: ${newsletterInput.value}`);
    });
  }
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (window.innerWidth <= 768) {
          navLinks.style.display = 'none';
        }
      }
    });
  });
  
  // Add hover effect to product cards
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.08)';
    });
  });
});