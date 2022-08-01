/****** DOM ELEMENTS ******/
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const form = document.getElementById("myForm");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");
const icon = document.getElementsByClassName("icon");

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const radioInput = document.querySelectorAll("input[type=radio]");
const checkbox1 = document.getElementById("checkbox1");
// const checkbox2 = document.getElementById("checkbox2");

const eventLocation = document.querySelectorAll(".checkbox-input[name='location']");

/****** EVENTS ******/
// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
modalCloseBtn.addEventListener("click", closeModal);

/****** FUNCTIONS ******/
// FUNCTION VALIDATION FORM Edit nav (media querie : mobile)
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// FUNCTION LAUNCH MODAL FORM
function launchModal() {
  modalbg.style.display = "block";
}

// FUNCTION CLOSE MODAL FORM
function closeModal() {
  modalbg.style.display = "none";
}

// FUNCTION VALIDATION FORM
// Function verification Firstname
function checkFirstNameInput(firstName) {
  if (firstName.value.length >= 2 && /^[a-zA-Z\s\-À-ÖØ-öø-ÿ]+$/.test(firstName.value)) {
    console.log("c'est valide");
    formData[0].setAttribute("data-error-visible", "false");
    return true;
  } else {
    console.log("c'est pas bon");
    formData[0].setAttribute("data-error-visible", "true");
    return false;
  }
}

// Function verification Lastname
function checkLastNameInput(lastName) {
  if (lastName.value.length >= 2 && /^[a-zA-Z\s\-À-ÖØ-öø-ÿ]+$/.test(lastName.value)) {
    console.log("c'est valide");
    formData[1].setAttribute("data-error-visible", "false");
    return true;
  } else {
    console.log("c'est pas bon");
    formData[1].setAttribute("data-error-visible", "true");
    return false;
  }
}

// Function verification Email
function checkEmailInput(email) {
  if (/^((?!\.)[\w_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email.value)) {
    console.log("c'est valide");
    formData[2].setAttribute("data-error-visible", "false");
    return true;
  } else {
    console.log("c'est pas bon");
    formData[2].setAttribute("data-error-visible", "true");
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
    formData[3].setAttribute("data-error", "Vous êtes un peu trop âgé pour participer à notre événement.");
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
  }
  else {
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
    console.log("Vous n'avez pas coché de bouton");
    formData[5].setAttribute("data-error-visible", "true");
    return false;
  } else {
    console.log("Bouton coché !");
    formData[5].setAttribute("data-error-visible", "false");
    return true;
  }
}

// Function verification Checkbox - Conditions générales

function checkBoxInput(checkbox1) {
  if (checkbox1.checked) {
    console.log("C'est checké");
    formData[6].setAttribute("data-error-visible", "false");
    return true;
  } else {
    console.log("C'est pas checké");
    formData[6].setAttribute("data-error-visible", "true");
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
    window.alert("Merci ! Votre réservation a été reçue.");
    // window.location.reload();
    closeModal();
  } else {
    // window.alert("Veuillez remplir le formulaire");
  }
});
