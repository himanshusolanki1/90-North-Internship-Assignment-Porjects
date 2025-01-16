// Function to toggle the left menu
function toggleMenu() {
    const leftMenu = document.getElementById('leftMenu');
    leftMenu.classList.toggle('collapsed');
    const toggleBtn = leftMenu.querySelector('.toggle-btn');
    toggleBtn.textContent = leftMenu.classList.contains('collapsed') ? '☰' : '×';
}

// Function to handle page scaling based on screen width
function handlePageScaling() {
    const width = window.innerWidth;
    const html = document.documentElement;
    
    if (width >= 992 && width <= 1600) {
        html.style.zoom = "90%";
    } else if (width >= 700 && width <= 767) {
        html.style.zoom = "80%";
    } else if (width >= 600 && width < 700) {
        html.style.zoom = "75%";
    } else if (width <= 600) {
        html.style.zoom = "50%";
    } else {
        html.style.zoom = "100%";
    }
}

// Add event listeners
window.addEventListener('load', handlePageScaling);
window.addEventListener('resize', handlePageScaling);
