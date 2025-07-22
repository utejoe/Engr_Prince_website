// Load header and footer into placeholders
document.addEventListener("DOMContentLoaded", function () {
  loadComponent("components/header.html", "#header-placeholder");
  loadComponent("components/footer.html", "#footer-placeholder", setFooterYear);
});

function loadComponent(filePath, selector, callback) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) throw new Error("Component not found");
      return response.text();
    })
    .then(data => {
      document.querySelector(selector).innerHTML = data;
      if (callback) callback(); // ✅ Run callback after content is injected
    })
    .catch(error => console.error("Error loading component:", error));
}

// ✅ Sets the current year in the footer
function setFooterYear() {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}
