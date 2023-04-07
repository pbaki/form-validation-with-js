//Email
const email = document.getElementById("email");
const emailError = document.getElementsByClassName("email-error")[0];

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "email-error";
  } else {
    showEmailError();
  }
});

function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  emailError.className = "email-error active";
}

//Country and Zip Code

const country = document.getElementById("country");
const zipcode = document.getElementById("zip-code");
const zipcodeError = document.getElementsByClassName("zip-code-error")[0];

let zipcodeRegex = {
  poland: "^[0-9]{2}-[0-9]{3}$",
  us: "^d{5}(?:[-s]d{4})?$",
  japan: "^d{3}-d{4}$",
  germany: "^d{5}$",
};

zipcode.setAttribute("pattern", zipcodeRegex.poland);
country.addEventListener("change", () => {
  for (const [key, value] of Object.entries(zipcodeRegex)) {
    if (country.value == key) {
      zipcode.setAttribute("pattern", value);
    }
  }
  if (zipcode.validity.patternMismatch) {
    zipcodeError.textContent = `Please, enter valid Zip Code for ${
      country.options[country.selectedIndex].text
    }.`;
  } else zipcodeError.textContent = "";
});

zipcode.addEventListener("input", (event) => {
  if (zipcode.validity.valid) {
    zipcodeError.textContent = "";
    zipcodeError.className = "zip-code-error";
  } else {
    showzipcodeError();
  }
});

function showzipcodeError() {
  if (zipcode.validity.valueMissing) {
    zipcodeError.textContent = "You need to enter Zip Code.";
  } else if (zipcode.validity.patternMismatch) {
    zipcodeError.textContent = `Please, enter valid Zip Code for ${
      country.options[country.selectedIndex].text
    }.`;
  }

  zipcodeError.className = "zip-code-error active";
}

//Password
//To be improved, checking for every validity case by case
const password = document.getElementById("password");
const passwordError = document.querySelector(".password-error");

password.setAttribute(
  "pattern",
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()\\-_=+[\\]{}|\\\\;:'\",.<>/?]).{8,20}$"
);

password.addEventListener("input", (event) => {
  if (password.validity.valid) {
    passwordError.textContent = "";
    passwordError.className = "password-error";
  } else {
    showPasswordError();
  }
});

function showPasswordError() {
  if (password.validity.valueMissing) {
    passwordError.textContent = "You need to enter Password.";
  } else if (password.validity.patternMismatch) {
    passwordError.textContent = `Password needs to be between 8 and 20 characters, and contain at least one lowercase letter, uppercase letter, digit and special character.`;
  }

  passwordError.className = "password-error active";
}

//Confirm password
const confirmPassword = document.getElementById("confirm-password");
const confirmPasswordError = document.getElementsByClassName(
  "confirm-password-error"
)[0];

confirmPassword.setAttribute(
  "pattern",
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()\\-_=+[\\]{}|\\\\;:'\",.<>/?]).{8,20}$"
);

confirmPassword.addEventListener("input", (event) => {
  if (confirmPassword.validity.valid) {
    confirmPasswordError.textContent = "";
    confirmPasswordError.className = "confirm-password-error";
  } else {
    showConfirmPasswordError();
  }
});

function showConfirmPasswordError() {
  if (confirmPassword.validity.valueMissing) {
    confirmPasswordError.textContent = "You need to confirm Password.";
  } else if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent =
      "This field needs to match your password";
  } else confirmPasswordError.textContent = "Match a pattern and Password";

  confirmPasswordError.className = "confirm-password-error active";
}
