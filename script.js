// Sticky Navbar on Scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });
  
  // Smooth Scrolling for Anchor Links
//   document.querySelectorAll('.navbar-menu a').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//       e.preventDefault();
  
//       const targetId = this.getAttribute('href').substring(1);
//       const targetSection = document.getElementById(targetId);
  
//       targetSection.scrollIntoView({
//         behavior: 'smooth'
//       });
//     });
//   });

  
// Smooth Scrolling for Anchor Links
document.querySelectorAll('.navbar-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor click behavior
  
      const targetId = this.getAttribute('href'); // Get the target section ID
      const targetSection = document.querySelector(targetId); // Select the target section
  
      // Smooth scroll to the target section
      targetSection.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling behavior
        block: 'start' // Align to the start of the section
      });
    });
  });




  
  
  




document.addEventListener("DOMContentLoaded", function () {
    const whyUsSection = document.querySelector(".why-us");

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    }

    // Function to add the animation class when the section is in the viewport
    function handleScrollAnimation() {
        if (isInViewport(whyUsSection)) {
            whyUsSection.style.opacity = '1'; // Trigger the CSS animation
        }
    }

    // Check on scroll
    window.addEventListener("scroll", handleScrollAnimation);
});

document.getElementById('registerButton').addEventListener('click', function() {
    document.getElementById('registerSection').scrollIntoView({ 
        behavior: 'smooth' // Smooth scrolling effect
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const benefitsSection = document.querySelector(".benefits");

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    }

    // Function to add animation when the section is in the viewport
    function handleScrollAnimation() {
        if (isInViewport(benefitsSection)) {
            benefitsSection.classList.add('animate');
        }
    }

    // Check on scroll
    window.addEventListener("scroll", handleScrollAnimation);
});


document.addEventListener("DOMContentLoaded", function () {
    const entrepreneurSection = document.querySelector(".benefits-entrepreneurs");

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    }

    // Function to add animation when the section is in the viewport
    function handleScrollAnimation() {
        if (isInViewport(entrepreneurSection)) {
            entrepreneurSection.classList.add('animate');
        }
    }

    // Check on scroll
    window.addEventListener("scroll", handleScrollAnimation);
});



document.addEventListener('DOMContentLoaded', function () {
    const businessTab = document.getElementById('tab-business');
    const entrepreneurTab = document.getElementById('tab-entrepreneur');
    const form = document.getElementById('registration-form');

    // Switching tabs
    businessTab.addEventListener('click', () => {
        businessTab.classList.add('active');
        entrepreneurTab.classList.remove('active');
        form.reset(); // Clear the form fields if needed
    });

    entrepreneurTab.addEventListener('click', () => {
        entrepreneurTab.classList.add('active');
        businessTab.classList.remove('active');
        form.reset(); // Clear the form fields if needed
    });
});



