/****** DOM ELEMENTS ******/
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const number = document.getElementById("quantity");
const radioInput = document.querySelectorAll("input[type=radio]");
const checkbox1 = document.getElementById("checkbox1");
// const checkbox2 = document.getElementById("checkbox2");


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
    return true;
  } else {
    console.log("c'est pas bon");
    return false;
  }
}

  // Function verification Lastname
function checkLastNameInput(lastName) {
  if (lastName.value.length >= 2 && /^[a-zA-Z\s\-À-ÖØ-öø-ÿ]+$/.test(lastName.value)) {
    console.log("c'est valide");
    return true;
  } else {
    console.log("c'est pas bon");
    return false;
  }
}

  // Function verification Email
function checkEmailInput (email) {
  if (/^((?!\.)[\w_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email.value)) {
    console.log("c'est valide");
    return true;
  } else {
    console.log("c'est pas bon");
    return false;
  }
}

// Const verification Birthdate

const checkBirthdateInput = () => {
  const isBirthdateValid = birthdate.value;

  if (/^[0-9]{4}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/.test(isBirthdateValid)) {
    console.log("c'est valide");
  } else {
    console.log("c'est pas bon");
  }
  return isBirthdateValid;
};

// Const verification Number

const checkNumberInput = () => {
  const isNumberValid = number.value;

  if (/^0*?[0-9]\d*$/.test(isNumberValid)) {
    console.log("c'est valide");
  } else {
    console.log("c'est pas bon");
  }
  return isNumberValid;
};

// Bouton radio

// for (i = 0; i < radioInput.length; i++) {
//     radioInput[i].addEventListener("change", function (e) {
//         var value = e.target;
//         if (value.checked) {
//             console.log("Bouton coché !");
//         } else {
//             console.log("Vous n'avez pas coché de bouton");
//         }
//     });
// }

// let choix;

// for (let radios of radioInput)
// {
//     radioInput.length.addEventListener('click', function(e) {
//   if (radios.checked){
//       choix = radios.value;
//       console.log("Bouton coché !");
//   }
//   else{
//     console.log("Vous n'avez pas coché de bouton");
//   }
//   return choix;
// });
// }

// function radioValidate() {
//   let choix;

//   for (let radios of radioInput)
//   {
//     if (radios.checked){
//         choix = radios.value;
//         console.log("Bouton coché !");
//     }
//     else{
//       console.log("Vous n'avez pas coché de bouton");
//     }
//     return choix;
//   }
// }

// radio.onclick = (e) => {
//   let choix;

//   for (let radios of radioInput)
//   {
//     if (radios.checked){
//         choix = radios.value;
//         console.log("Bouton coché !");
//     }
//     else{
//       console.log("Vous n'avez pas coché de bouton");
//     }
//     return choix;
//   }

// }

// for (const radios of radioInput) {
//   radios.onclick = (e) => {
//     console.log("Bouton coché !");
//   }
// }

function checkRadioInput(radioInput) {
  // let radio = radioInput;

  // radio.onclick = (e) => {
  //   let choix;

  //   for (let radios of radioInput)
  //   {
  //     if (radios.checked){
  //         choix = radios.value;
  //         console.log("Bouton coché !");
  //     }
  //     else{
  //       console.log("Vous n'avez pas coché de bouton");
  //     }
  //     return choix;
  //   }

  // }
  let isCheckRadioValid = 0;

  // for (i = 0; i < radioInput.length; i++) {
  //   radioInput[i].addEventListener("change", function (e) {
  //     var value = e.target;
  //     if (value.checked) {
  //       console.log("Bouton coché !");
  //       console.log(value);
  //     } else {
  //       console.log("Vous n'avez pas coché de bouton");
  //     }
  //   });
  // }

  // return value;

  radioInput.foreach((radios) => {
    if (radios.checked) {
      isCheckRadioValid = 1;
    }
  });

  if (isCheckRadioValid === 0) {
    console.log("Vous n'avez pas coché de bouton");
    return false;
  } else {
    console.log("Bouton coché !");
    console.log(radios.value);
    return true;
  }
}

// Const verification Conditions générales

const checkBoxInput = () => {
  const isCheckBoxValid = checkbox1.value;

  if (this.checked) {
    console.log("C'est checké");
  } else {
    console.log("C'est pas checké");
  }
  return isCheckBoxValid;
};

// Const validation form

const isFormValid = () => checkFirstNameInput() && checkLastNameInput() && checkEmailInput() && checkBirthdateInput() && checkNumberInput() && checkRadioInput() && checkBoxInput();

// Validate form

function validate(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const values = [...formData.entries()];

  if (isFormValid()) {
    window.alert("Merci ! Votre réservation a été reçue.");
    console.log(values);
  } else {
    window.alert("Vous devez remplir le formulaire.");
    return false;
  }
}

//if (firstNameValidate == true) && (firstNameValidate == true)  {
//else return false

// const formDataTest = new FormData(formElem);
// console.log(formDataTest);
// console.log(formDataTest.get('first'));
//   if(){
//     prenom = true;
//   }
//   else{

//   }

// formData.get('username');
