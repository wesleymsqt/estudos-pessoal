const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const togglePasswordButtons = document.querySelectorAll(".toggle-password");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

togglePasswordButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = btn.previousElementSibling;

    if (input.type === "password") {
      input.type = "text";
      btn.classList.remove("fa-eye-slash");
      btn.classList.add("fa-eye");
    } else {
      input.type = "password";
      btn.classList.remove("fa-eye");
      btn.classList.add("fa-eye-slash");
    }
  });
});
