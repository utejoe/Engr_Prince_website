// Load header and footer into placeholders
document.addEventListener("DOMContentLoaded", function () {
  loadComponent("components/header.html", "#header-placeholder");
  loadComponent("components/footer.html", "#footer-placeholder");
});

function loadComponent(filePath, selector) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) throw new Error("Component not found");
      return response.text();
    })
    .then(data => {
      document.querySelector(selector).innerHTML = data;
    })
    .catch(error => console.error("Error loading component:", error));
}
