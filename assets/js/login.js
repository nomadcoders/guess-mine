const body = document.querySelector("body");
const loginForm = document.getElementById("jsLogin");

const NICKNAME = "nickname";
const LOGGED_OUT = "loggedOut";
const LOGGED_IN = "loggedIn";

const nickname = localStorage.getItem(NICKNAME);

const logIn = nickname => {
  const socket = io("/");
  socket.emit("setNickname", { nickname });
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

const handleFormSubmit = e => {
  e.preventDefault();
  const input = loginForm.querySelector("input");
  const { value } = input;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN;
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
