document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = e.target.elements[0].value;
  alert(`Thank you for signing up, ${email}!`);
});
