const categoryButtons = document.querySelectorAll('.category-btn');
const photos = document.querySelectorAll('.photo');

// Add click event listener to each category button
categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all buttons
    categoryButtons.forEach((btn) => btn.classList.remove('active'));
    // Add 'active' class to the clicked button
    button.classList.add('active');

    // Get the selected category
    const selectedCategory = button.getAttribute('data-category');

    // Show or hide photos based on the selected category
    photos.forEach((photo) => {
      if (selectedCategory === 'all') {
        photo.style.display = 'block'; // Show all photos
      } else {
        const categories = photo.getAttribute('data-categories').split(' ');
        if (categories.includes(selectedCategory)) {
          photo.style.display = 'block'; // Show photos in the selected category
        } else {
          photo.style.display = 'none'; // Hide photos not in the selected category
        }
      }
    });
  });
});// Add event listeners to category buttons
const categoryBtns = document.querySelectorAll('.category-btn');
categoryBtns.forEach((btn) => {
  btn.addEventListener('click', filterPhotos);
});

// Filter photos based on selected category
function filterPhotos() {
  const category = this.getAttribute('data-category');
  const photos = document.querySelectorAll('.photo');
  
  // Show all photos if category is 'all', otherwise show photos matching the category
  photos.forEach((photo) => {
    if (category === 'all' || photo.classList.contains(category)) {
      photo.style.display = 'block';
    } else {
      photo.style.display = 'none';
    }
  });
  
  // Update active category button
  categoryBtns.forEach((btn) => {
    btn.classList.remove('active');
  });
  this.classList.add('active');
}