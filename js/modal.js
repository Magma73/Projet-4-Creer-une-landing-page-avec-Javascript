/****** DOM ELEMENTS ******/
const modalbg = document.querySelector(".bground");
const modalbgValidate = document.querySelector(".bground__validate");
const modalBtn = document.querySelectorAll(".modal-btn");
const form = document.getElementById("myForm");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelectorAll(".close");
const icon = document.querySelector(".icon");

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const radioInput = document.querySelectorAll("input[type=radio]");
const checkbox1 = document.getElementById("checkbox1");

/****** EVENTS ******/
// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
modalCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal));

/****** FUNCTIONS ******/
// FUNCTION VALIDATION FORM Edit nav (media querie : mobile)

icon.addEventListener("click", function() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
});

// FUNCTION LAUNCH MODAL FORM
function launchModal() {
  modalbg.style.display = "block";
}

function launchModalValidate() {
  modalbgValidate.style.display = "block";
}

// FUNCTION CLOSE MODAL FORM
function closeModal() {
  modalbg.style.display = "none";
  modalbgValidate.style.display = "none";
}

// FUNCTION VALIDATION FORM
// Function verification Firstname
function checkFirstNameInput(firstName) {
  if (firstName.value.length >= 2 && /^[a-zA-Z\s\-À-ÖØ-öø-ÿ]+$/.test(firstName.value)) {
    formData[0].setAttribute("data-error-visible", "false");
    return true;
  } else {
    formData[0].setAttribute("data-error-visible", "true");
    formData[0].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    return false;
  }
}

// Function verification Lastname
function checkLastNameInput(lastName) {
  if (lastName.value.length >= 2 && /^[a-zA-Z\s\-À-ÖØ-öø-ÿ]+$/.test(lastName.value)) {
    formData[1].setAttribute("data-error-visible", "false");
    return true;
  } else {
    formData[1].setAttribute("data-error-visible", "true");
    formData[1].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    return false;
  }
}

// Function verification Email
function checkEmailInput(email) {
  if (/^((?!\.)[\w_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email.value)) {
    formData[2].setAttribute("data-error-visible", "false");
    return true;
  } else {
    formData[2].setAttribute("data-error-visible", "true");
    formData[2].setAttribute("data-error", "Vous devez saisir une adresse mail.");
    return false;
  }
}

// Function verification Birthdate
function checkBirthdateInput(birthdate) {
  let today = new Date();
  let yearMinimum = today.getFullYear() - 16; // âge minimum 16 ans
  let yearMaximum = today.getFullYear() - 80; // âge maximum 80 ans
  let birthdatePlayer = new Date(birthdate.value); // convertit la valeur de l'input birthdate en date
  let yearPlayer = birthdatePlayer.getFullYear(); // récupère l'année de naissance de l'usager
  if (/^[0-9]{4}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/.test(birthdate.value) && yearPlayer < yearMinimum && yearPlayer > yearMaximum) {
    formData[3].setAttribute("data-error-visible", "false");
    return true;
  } else if (/^[0-9]{4}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/.test(birthdate.value) && yearPlayer > yearMinimum) {
    formData[3].setAttribute("data-error-visible", "true");
    formData[3].setAttribute("data-error", "Vous devez avoir plus de 16 ans.");
    return false;
  } else if (/^[0-9]{4}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/.test(birthdate.value) && yearPlayer < yearMaximum) {
    formData[3].setAttribute("data-error-visible", "true");
    formData[3].setAttribute("data-error", "Vous êtes un peu trop âgé pour participer à notre événement!");
    return false;
  } else {
    formData[3].setAttribute("data-error-visible", "true");
    formData[3].setAttribute("data-error", "Vous devez entrer votre date de naissance.");
    return false;
  }
}

// Function verification Number

function checkQuantityInput(quantity) {
  if (/^0*?[0-9]\d*$/.test(quantity.value) && quantity.value >= 0 && quantity.value <= 20) {
    formData[4].setAttribute("data-error-visible", "false");
    return true;
  }
  if (/^0*?[0-9]\d*$/.test(quantity.value) && quantity.value > 20) {
    formData[4].setAttribute("data-error-visible", "true");
    formData[4].setAttribute("data-error", "Vous devez entrer un nombre compris entre 0 et 20.");
    return false;
  } else {
    formData[4].setAttribute("data-error-visible", "true");
    formData[4].setAttribute("data-error", "Vous devez entrer un nombre.");
    return false;
  }
}

// Function verification Radio

function checkRadioInput(radioInput) {
  let checkRadioValid = 0;

  radioInput.forEach((location) => {
    if (location.checked) {
      checkRadioValid = 1;
    }
  });

  if (checkRadioValid === 0) {
    formData[5].setAttribute("data-error-visible", "true");
    formData[5].setAttribute("data-error", "Vous devez choisir une option.");

    return false;
  } else {
    formData[5].setAttribute("data-error-visible", "false");
    return true;
  }
}

// Function verification Checkbox - Conditions générales

function checkBoxInput(checkbox1) {
  if (checkbox1.checked) {
    formData[6].setAttribute("data-error-visible", "false");
    return true;
  } else {
    formData[6].setAttribute("data-error-visible", "true");
    formData[6].setAttribute("data-error", "Vous devez vérifier que vous acceptez les termes et conditions.");
    return false;
  }
}

// Validate form

addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    checkFirstNameInput(firstName) &&
    checkLastNameInput(lastName) &&
    checkEmailInput(email) &&
    checkBirthdateInput(birthdate) &&
    checkQuantityInput(quantity) &&
    checkRadioInput(radioInput) &&
    checkBoxInput(checkbox1) === true
  ) {
    form.reset();
    closeModal();
    launchModalValidate();
  } else {
    // window.alert("Veuillez remplir le formulaire");
  }
});
