function redirectToBlog() {
    window.location.href = '#blog';
}

const button = document.getElementById('navigateButton');

button.addEventListener('click', function() {
  window.location.href = 'nextpage.html';
});
