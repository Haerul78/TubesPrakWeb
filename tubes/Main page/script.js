//slider
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    showSlide(currentIndex + step);
}

// Auto-slide
setInterval(() => {
    moveSlide(1);
}, 3000); // Change image every 3 seconds

// Initial slide
showSlide(currentIndex);

// //content
// document.addEventListener('DOMContentLoaded', function() {
//     const navbar = document.getElementById('navbar');
//     const content = document.getElementById('content');
//     const searchInput = document.getElementById('search');
//     const slides = document.querySelector('.slides');
//     const totalSlides = slides.children.length;
//     let currentIndex = 0;

//     let allProducts = [];

//     fetch('data.json')
//         .then(response => response.json())
//         .then(data => {
//             allProducts = data;
//             displayProducts(data);

//             navbar.addEventListener('click', function(event) {
//                 if (event.target.tagName === 'LI') {
//                     const category = event.target.getAttribute('data-category');
//                     // const filteredProducts = category === 'all' ? allProducts : allProducts.filter(product => product.category === category);
//                     // displayProducts(filteredProducts);
//                 }
//             });

//             searchInput.addEventListener('input', function(event) {
//                 const searchTerm = event.target.value.toLowerCase();
//                 const searchedProducts = allProducts.filter(product => product.name.toLowerCase().includes(searchTerm));
//                 displayProducts(searchedProducts);
//             });
//         })
//         .catch(error => console.error('Error fetching data:', error));

//     function displayProducts(products) {
//         content.innerHTML = products.map(product => `
//             <div class="product">
//                 <img src="${product.image}" alt="${product.name}">
//                 <h2>${product.name}</h2>
//                 <p>${product.description}</p>
//             </div>
//         `).join('');
//     }

//     window.moveSlide = function(step) {
//         currentIndex = (currentIndex + step + totalSlides) % totalSlides;
//         slides.style.transform = `translateX(-${currentIndex * 100}%)`;
//     };
// });

//slide category
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true, // Enable infinite loop
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });