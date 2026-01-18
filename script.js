document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.page-section');
    const logoArea = document.querySelector('.nav-logo');

    // Function to switch page
    function switchPage(targetId) {
        // Hide all sections
        sections.forEach(section => {
            section.classList.add('hidden');
        });

        // Show target section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
            targetSection.classList.add('flex');

            // Scroll to top to simulate a new page load
            window.scrollTo(0, 0);
        }

        // Update Nav State
        navButtons.forEach(btn => {
            if (btn.dataset.target === targetId) {
                btn.classList.add('bg-[#cbc9c2]', 'font-bold');
                btn.classList.remove('bg-[#f0ece1]', 'hover:bg-[#e5e0d1]');
            } else {
                btn.classList.remove('bg-[#cbc9c2]', 'font-bold');
                btn.classList.add('bg-[#f0ece1]', 'hover:bg-[#e5e0d1]');
            }
        });
    }

    // Event Listeners for Nav Buttons
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            switchPage(btn.dataset.target);
        });
    });

    // Event Listener for Logo (Home/About)
    if (logoArea) {
        logoArea.addEventListener('click', () => {
            switchPage('about');
        });
    }

    // Default to About Page
    switchPage('about');
});
