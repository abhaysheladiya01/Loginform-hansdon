const form = document.querySelector(".login-form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const emailInput = form.elements.email.value.trim();
  const passwordInput = form.elements.password.value.trim();

  if (!emailInput) {
    alert("Email cannot be empty");
    return;
  }

  if (!passwordInput) {
    alert("Password cannot be empty");
    return;
  }

  if (passwordInput.length < 8) {
    alert("Password must be at least 8 characters long");
    return;
  }


  const formData = {
    email: emailInput,
    password: passwordInput,
  };

  console.log(JSON.stringify(formData, null, 2));

});
