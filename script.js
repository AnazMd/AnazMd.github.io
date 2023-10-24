// const cards = document.querySelectorAll('.details-card');
// const leftButton = document.querySelector('.arrow-button.left');
// const rightButton = document.querySelector('.arrow-button.right');

// let currentIndex = 1; // Initialize with the middle card

// function updateCards() {
//   // Disable/enable arrow buttons as needed
//   leftButton.disabled = currentIndex === 0;
//   rightButton.disabled = currentIndex === cards.length - 1;

//   // Calculate the center position based on the container width and card width
//   const containerWidth = document.querySelector('.about-me-slider').offsetWidth;
//   const cardWidth = cards[currentIndex].offsetWidth;
//   const centerPosition = (containerWidth - cardWidth) / 2;

//   // Slide the cards
//   const slideDistance = centerPosition - (currentIndex * cardWidth);
//   document.querySelector('.about-me-slider').style.transform = `translateX(${slideDistance}px)`;
//   // Remove active class from all cards
//   cards.forEach((card) => card.classList.remove('active'));
  
//   // Add active class to the current card
//   cards[currentIndex].classList.add('active');

//   // Adjust card sizes and z-index
//   cards[currentIndex].style.transform = 'scale(1.2)';
//   cards[currentIndex].style.zIndex = '2';

//   if (currentIndex > 0) {
//     cards[currentIndex - 1].style.transform = 'scale(1)';
//     cards[currentIndex - 1].style.zIndex = '1';
//   }
  
//   if (currentIndex < cards.length - 1) {
//     cards[currentIndex + 1].style.transform = 'scale(1)';
//     cards[currentIndex + 1].style.zIndex = '1';
//   }
// }

// leftButton.addEventListener('click', () => {
//   if (currentIndex > 0) {
//     currentIndex--;
//     updateCards();
//   }
// });

// rightButton.addEventListener('click', () => {
//   if (currentIndex < cards.length - 1) {
//     currentIndex++;
//     updateCards();
//   }
// });

// // Initialize card display
// updateCards();
