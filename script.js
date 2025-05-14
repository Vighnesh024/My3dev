document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    let email = event.target.elements[0].value;
    alert(`Thank you for signing up, ${email}!`);
});
