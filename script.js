import gsap from 'https://esm.sh/gsap@3.12.2'
import ScrollTrigger from 'https://esm.sh/gsap@3.12.2/ScrollTrigger'
import './calculator.js'
import './footer-contact-update.js'

// Registrar el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
  // Toggle del menú móvil
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      nav.classList.toggle('active');
    });
  }
  
  // Cerrar el menú móvil al hacer click fuera
  document.addEventListener('click', function(event) {
    const isClickInside = nav.contains(event.target) || menuToggle.contains(event.target);
    if (!isClickInside && nav.classList.contains('active')) {
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  });
  
  // Smooth scroll para enlaces ancla y botones CTA
  // Se excluyen los botones que se encuentran dentro de formularios para evitar interferir con su submit
  document.querySelectorAll('a[href^="#"], .cta-button').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      // Si el elemento está dentro de un formulario, no aplicar smooth scroll
      if (this.closest('form')) {
        return;
      }
      e.preventDefault();
      
      let targetSelector = this.getAttribute('href');
      // Para botones CTA sin href, definir destino según el texto
      if (!targetSelector && this.classList.contains('cta-button')) {
        // Por defecto, se hace scroll a #contacto
        targetSelector = '#contacto';
        // Si el texto coincide con alguno de los CTA que deben ir a la sección del formulario
        if (this.textContent.trim() === 'Obtén tu diseño gratuito' || 
            this.textContent.trim() === 'Descargar tu guía para organización de eventos gratuita' ||
            this.textContent.trim() === 'Solicita tu muestra gratuita') {
          targetSelector = '.lead-form';
        }
      }
      
      // Cerrar menú si está activo
      if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
      }
      
      const target = targetSelector ? document.querySelector(targetSelector) : null;
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Efecto de scroll para el header
  const header = document.querySelector('header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.style.background = 'rgba(0, 0, 0, 0.95)';
      header.style.padding = '0.7rem 5%';
      header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
    } else {
      header.style.background = 'rgba(0, 0, 0, 0.9)';
      header.style.padding = '1rem 5%';
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
  });
  
  // Animaciones con GSAP
  gsap.from('.hero-content', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
  });
  
  gsap.from('.trophy-img', {
    opacity: 0,
    x: 50,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out'
  });
  
  // Animaciones al hacer scroll en varios elementos
  const animateElements = document.querySelectorAll('.step, .benefit, .trophy-card, .lead-content, .lead-form');
  animateElements.forEach(element => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power3.out'
    });
  });
  
  // Manejo del envío del formulario (simulado)
  const leadForm = document.querySelector('.lead-form');
  if (leadForm) {
    leadForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Recolectar datos del formulario (si es necesario)
      const formData = {
        name: this.querySelector('input[type="text"]').value,
        email: this.querySelector('input[type="email"]').value,
        phone: this.querySelector('input[type="tel"]').value,
        company: this.querySelectorAll('input[type="text"]')[1].value
      };
      
      const submitButton = this.querySelector('button');
      const originalText = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = 'Enviando...';
      
      // Simular envío con timeout (reemplazar por llamada real en producción)
      setTimeout(() => {
        this.reset();
        submitButton.textContent = '¡Descarga enviada!';
        
        // Mostrar mensaje de éxito
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Revisa tu email para descargar la guía gratuita';
        successMessage.style.color = '#4caf50';
        successMessage.style.marginTop = '1rem';
        successMessage.style.fontWeight = 'bold';
        
        this.appendChild(successMessage);
        
        // Restaurar botón y quitar mensaje tras unos segundos
        setTimeout(() => {
          submitButton.disabled = false;
          submitButton.textContent = originalText;
          setTimeout(() => {
            this.removeChild(successMessage);
          }, 5000);
        }, 2000);
      }, 1500);
    });
  }
  
  // Efecto de rotación de trofeo al mover el mouse
  const trophyShowcase = document.querySelector('.trophy-showcase');
  const trophyImg = document.querySelector('.trophy-img');
  const medalsImg = document.querySelector('.medals-img');
  if (trophyShowcase && trophyImg && medalsImg) {
    trophyShowcase.addEventListener('mousemove', function(e) {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      trophyImg.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
      medalsImg.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    trophyShowcase.addEventListener('mouseleave', function() {
      trophyImg.style.transform = 'rotateY(15deg) rotateX(0deg)';
      medalsImg.style.transform = 'rotateY(-15deg) rotateX(0deg)';
    });
  }
  
  // Efectos de hover y click en botones CTA
  const ctaButtons = document.querySelectorAll('.cta-button');
  ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      gsap.to(this, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    button.addEventListener('mouseleave', function() {
      gsap.to(this, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    button.addEventListener('click', function() {
      gsap.to(this, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1
      });
    });
  });
});
