document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    var loader = document.getElementsByClassName("preloader");
    window.addEventListener("load", function() {
        console.log("Window fully loaded");
        if (loader.length > 0) {
            loader[0].style.display = "none";
            console.log("Preloader hidden");
        }
    });
});



// Toggle button for navbar
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button');
    const navbarLinks = document.getElementById('navbar-links');
    const overlay = document.getElementById('overlay');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('nav-open');
    });

    overlay.addEventListener('click', () => {
        navbarLinks.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('nav-open');
    });
});

// Slideshow functionality
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slides img');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('showing');
        slides[currentSlide].classList.add('hiding');
        
        currentSlide = (currentSlide + 1) % slides.length;
        
        slides[currentSlide].classList.remove('hiding');
        slides[currentSlide].classList.add('showing');
    }

    slides[currentSlide].classList.add('showing');
    setInterval(nextSlide, 3000);

    // Scroll-triggered animations
    const items = document.querySelectorAll('.scroll-item');
    
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                // Optionally reset the animation state if the item is out of view
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    items.forEach(item => {
        observer.observe(item);
    });
});
// form code 

document.getElementById('contactForm').addEventListener('submit', function(event) {
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(function(error) {
        error.textContent = '';
    });

    // Validate name
    const name = document.getElementById('name');
    if (!name.value.trim()) {
        isValid = false;
        document.getElementById('nameError').textContent = 'Name is required';
    }

    // Validate address
    const address = document.getElementById('address');
    if (!address.value.trim()) {
        isValid = false;
        document.getElementById('addressError').textContent = 'Address is required';
    }

    // Validate phone number
    const phone = document.getElementById('phone');
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone.value)) {
        isValid = false;
        document.getElementById('phoneError').textContent = 'Phone number must be 10 digits';
    }

    // Validate message
    const message = document.getElementById('message');
    if (!message.value.trim()) {
        isValid = false;
        document.getElementById('messageError').textContent = 'Message is required';
    }

    // Show alert message
    if (isValid) {
        alert('Form submitted successfully!');
    } else {
        alert('Please fix the errors above.');
        event.preventDefault(); // Prevent form submission if validation fails
    }
});




    
 


