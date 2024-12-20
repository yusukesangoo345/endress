document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Dynamic greeting in hero section
    const heroGreeting = document.querySelector('#hero h2');
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = 'Good Morning!';
    } else if (hours < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }

    heroGreeting.textContent = `${greeting} Explore Endless Knowledge`;
});
