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






function sendEmail(event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const fullMessage = `Sender Name: ${fullName}\nSender Email: ${email}\nPhone Number: ${phoneNumber}\n\n${message}`;

  emailjs.send("service_26cy9jq", "template_th0yens", {
    from_name: fullName,
    from_email: email,
    from_phone: phoneNumber,
    message_subject: subject,
    message: fullMessage,
  })
  .then(function(response) {
    document.getElementById("contactForm").reset();
    alert("✅ Your message has been sent successfully!");
  })
  .catch(function(error) {
    console.error("EmailJS Error:", error);
    alert("❌ Failed to send message. Please try again.");
  });
}
