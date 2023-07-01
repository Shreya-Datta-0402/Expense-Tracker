// Navigation //

// script.js

// Function to navigate to a specific section
function navigateTo(sectionId) {
    // Hide all sections
    const sections = document.getElementsByClassName('section');
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    // Show the selected section
    const section = document.getElementById(sectionId);
    section.style.display = 'block';
}





