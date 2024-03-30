const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (
    loginForm.elements.email.value.trim() === "" ||
    loginForm.elements.password.value.trim() === ""
  ) {
    alert("All form fields must be filled in");
  } else {
    const loginFormData = {
      email: loginForm.elements.email.value,
      password: loginForm.elements.password.value,
    };

    console.log(loginFormData);

    loginForm.reset();
  }
});
