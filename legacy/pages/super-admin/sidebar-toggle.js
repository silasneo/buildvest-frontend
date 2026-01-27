// sidebar-toggle.js

// Vanilla JS for collapsible sidebar with localStorage persistence

document.addEventListener('DOMContentLoaded', () => {

    const sidebar = document.getElementById('sidebar');

    const mainContent = document.getElementById('main-content');

    const toggleBtn = document.getElementById('sidebar-toggle');

    const iconPath = document.getElementById('toggle-icon');

    if (!sidebar || !mainContent || !toggleBtn || !iconPath) return;

    // Load saved state

    const isCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';

    if (isCollapsed) {

        sidebar.classList.add('collapsed');

        mainContent.classList.remove('ml-72');

        mainContent.classList.add('ml-20');

        iconPath.setAttribute('d', 'M9 5l7 7-7 7'); // Chevron right

        toggleBtn.setAttribute('aria-expanded', 'false');

    }

    // Toggle handler

    toggleBtn.addEventListener('click', () => {

        const collapsed = sidebar.classList.toggle('collapsed');

        if (collapsed) {

            mainContent.classList.remove('ml-72');

            mainContent.classList.add('ml-20');

            iconPath.setAttribute('d', 'M9 5l7 7-7 7'); // Right (expand)

        } else {

            mainContent.classList.remove('ml-20');

            mainContent.classList.add('ml-72');

            iconPath.setAttribute('d', 'M15 19l-7-7 7-7'); // Left (collapse)

        }

        toggleBtn.setAttribute('aria-expanded', !collapsed);

        localStorage.setItem('sidebarCollapsed', collapsed);

    });

});