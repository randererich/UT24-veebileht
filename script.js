function redirectToBlog() {
    window.location.href = '#blog';
}

// Select the button element
const button = document.getElementById('navigateButton');

// Add a click event listener to the button
button.addEventListener('click', function() {
  // Change the URL to navigate to another page
  window.location.href = 'nextpage.html';  // Replace 'nextpage.html' with the actual page URL
});
