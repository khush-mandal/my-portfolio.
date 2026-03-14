function toggleDropdown() {
        const dropdown = document.querySelector('.dropdown');
        const hamburger = document.querySelector('.hamburg');
        dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
        dropdown.style.flexDirection = dropdown.style.flexDirection === 'column' ? 'row' : 'column';
        dropdown.style.justifyContent = dropdown.style.justifyContent === 'flex-start' ? 'flex-end' : 'flex-start';
        dropdown.style.alignItems = dropdown.style.alignItems === 'flex-start' ? 'flex-end' : 'center';
        hamburger.style.display = hamburger.style.display === 'none' ? 'block' : 'none';
    }