// TOGGLE NAVBAR
const navbar = document.querySelector('.navbar');
const dropdownMenu = document.querySelector('.dropdown-menu');

navbar.addEventListener('click', () => {
    if (searchContainer.classList.contains('active')) {
        searchContainer.classList.remove('active')
    }
    dropdownMenu.classList.toggle('active')
})

// TOGGLE SEARCH-BAR
const searchBar = document.querySelector('.search-bar');
const searchContainer = document.querySelector('.search-container');

searchBar.addEventListener('click', () => {
    if (dropdownMenu.classList.contains('active')) {
        dropdownMenu.classList.remove('active')
    }
    searchContainer.classList.toggle('active')
})