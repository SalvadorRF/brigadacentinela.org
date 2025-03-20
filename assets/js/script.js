document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const navLinks = document.querySelector(".nav-links")

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function () {
      this.classList.toggle("active")
      navLinks.classList.toggle("active")

      // Transform hamburger to X
      const spans = this.querySelectorAll("span")
      if (this.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
        spans[1].style.opacity = "0"
        spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
      } else {
        spans[0].style.transform = "none"
        spans[1].style.opacity = "1"
        spans[2].style.transform = "none"
      }
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      // Close mobile menu if open
      if (navLinks && navLinks.classList.contains("active")) {
        mobileMenuBtn.click()
      }

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })
      }
    })
  })

  // Header scroll effect
  const header = document.querySelector("header")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.padding = "10px 0"
      header.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)"
    } else {
      header.style.padding = "15px 0"
      header.style.boxShadow = "none"
    }
  })

  // Form submission
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Simple form validation
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const message = document.getElementById("message").value

      if (!name || !email || !message) {
        alert("Por favor complete todos los campos requeridos.")
        return
      }

      // Here you would typically send the form data to a server
      // For demo purposes, we'll just show a success message
      alert("¡Gracias por su mensaje! Nos pondremos en contacto pronto.")
      contactForm.reset()
    })
  }

  // Reveal animations on scroll
  const revealElements = document.querySelectorAll(".service-card, .team-member, .unit-card")

  function checkReveal() {
    const windowHeight = window.innerHeight
    const revealPoint = 150

    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top

      if (elementTop < windowHeight - revealPoint) {
        element.classList.add("revealed")
      }
    })
  }

  window.addEventListener("scroll", checkReveal)
  checkReveal() // Check on initial load

  

  
})

