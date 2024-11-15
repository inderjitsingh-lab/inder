// Toggle the responsive mobile menu
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

// Close menu when a link is clicked
const menuLinks = document.querySelectorAll('.navbar a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar');
        navbar.classList.remove('active'); // Collapse the menu
    });
});


document.addEventListener("DOMContentLoaded", () => {
    // Theme Toggle
    function toggleTheme() {
        document.body.classList.toggle("light-theme");
        
        const themeToggleBtn = document.querySelector(".theme-toggle");
        themeToggleBtn.textContent = document.body.classList.contains("light-theme") ? "🌞" : "🌙";
    }

    // Mobile Menu Toggle
    function toggleMenu() {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('active');
    }

    // Close Mobile Menu on Link Click
    const menuLinks = document.querySelectorAll('.navbar a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.navbar').classList.remove('active');
        });
    });

    // Smooth Scroll Effect for Navbar Links
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Floating Code Snippets
    const floatingCodeContainer = document.querySelector('.floating-code-container');
    const codeSnippets = [
        '<div class="container">...</div>',
        'console.log("Hello, World!");',
        'const x = () => {...}',
        '<section id="hero">',
        'background-color: #121212;',
        '<a href="#projects">Projects</a>',
        'let timer = setInterval(...);',
        '<button class="btn">Click Me</button>',
        'document.querySelector(...)',
        'const colors = ["#ff007f", "#0db5ff"];'
    ];

    function createFloatingCode() {
        const codeElement = document.createElement('div');
        codeElement.classList.add('floating-code');
        codeElement.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];

        // Randomize position and animation speed
        codeElement.style.left = `${Math.random() * 100}%`;
        codeElement.style.animationDuration = `${Math.random() * 5 + 10}s`;
        floatingCodeContainer.appendChild(codeElement);

        // Remove the element after animation ends
        setTimeout(() => {
            codeElement.remove();
        }, 12000); // Matches animation duration
    }

    // Create floating code snippets every 2 seconds
    setInterval(createFloatingCode, 500);

    // Intersection Observer for Animating Timeline Items
    const timelineItems = document.querySelectorAll(".timeline-item");
    const timelineObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                timelineObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    timelineItems.forEach(item => timelineObserver.observe(item));

    // Scroll Animation for Timeline Items
    window.addEventListener('scroll', () => {
        const triggerHeight = window.innerHeight / 1.2;
        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < triggerHeight) {
                item.classList.add('visible');
            }
        });
    });


   


    // Skills Section Animation
    const skillsSection = document.querySelector('#skills');
    const skillBars = document.querySelectorAll('.skill-bar');
    const skillObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    const skill = bar.getAttribute('data-skill');
                    bar.style.setProperty('--skill-width', skill);
                    bar.classList.add('animated');
                });
            }
        });
    }, { threshold: 0.5 });
    skillObserver.observe(skillsSection);

    // Project Card Animations
    const projectCards = document.querySelectorAll(".project-card");
    const projectObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                projectObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    projectCards.forEach(card => projectObserver.observe(card));

    // Contact Form Submission
    

    // Contact Form Submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            document.getElementById('contactForm').reset();
        } else {
            alert('Please fill out all fields before submitting.');
        }
    });
    // Scroll to Top Function
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Show/Hide Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', scrollToTop);
});


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

