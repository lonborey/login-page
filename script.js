const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnLogin = document.querySelector(".btn-login");
const btnClose = document.querySelector(".close-icon");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnLogin.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

btnClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});
