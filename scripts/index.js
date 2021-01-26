const formHandler = () => {
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!firstName) addInvalidClass("first-name");
  else addValidClass("first-name");

  if (!lastName) addInvalidClass("last-name");
  else addValidClass("last-name");

  if (!email) addInvalidClass("email");
  else addValidClass("email");

  if (!password) addInvalidClass("password");
  else addValidClass("password");

  if (firstName && lastName && email && password) {
    addValidClass("first-name");
    addValidClass("last-name");
    addValidClass("email");
    addValidClass("password");
  }
};

const addInvalidClass = (selectorID) => {
  const input = document.getElementById(selectorID);
  input.classList.add("invalid-input");
  input.nextElementSibling.classList.add("invalid");
};

const addValidClass = (selectorID) => {
  const input = document.getElementById(selectorID);
  input.classList.remove("invalid-input");
  input.nextElementSibling.classList.remove("invalid");
  input.nextElementSibling.classList.add("valid");
};

document.getElementById("submit").addEventListener("click", formHandler);
