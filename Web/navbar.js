// navbar.js
var navbarPlaceholder = document.getElementById("navbar-placeholder");

// Load the navbar using fetch()
fetch("navbar.html")
  .then(function (response) {
    return response.text();
  })
  .then(function (navbarContent) {
    navbarPlaceholder.innerHTML = navbarContent;
  });
