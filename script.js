// script.js

// Function to filter stickers based on category
function filterStickers(category) {
    const allStickers = document.querySelectorAll('.sticker');
    allStickers.forEach(sticker => {
        if (category === 'all' || sticker.dataset.category === category) {
            sticker.style.display = 'block';
        } else {
            sticker.style.display = 'none';
        }
    });
}

// Function to initialize event listeners for interactions
function init() {
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
            filterStickers(category);
        });
    });
}

// Run the init function on page load
document.addEventListener('DOMContentLoaded', init);