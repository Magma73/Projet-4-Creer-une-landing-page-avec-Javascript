// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const radioInput =  document.querySelectorAll( 'input[type=radio]');
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");

const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");


// EVENTS
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalCloseBtn.addEventListener("click", closeModal);

// FUNCTIONS
// edit nav (media querie : mobile)
function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// close modal form
function closeModal() {
    modalbg.style.display = "none";
}

// Validation form

// function validate(e){
//     e.preventDefault();

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
//  }

// formData.get('username');





// Const verification Firstname
const checkFirstNameInput = () => {
  firstName.addEventListener("input", function (e) {
      var value = e.target.value;
      if (value.length > 2 && /^[a-zA-Z\s\-À-ÖØ-öø-ÿ]+$/.test(value)) {
          isValid = true;
          console.log("c'est valide");
      } else {
          isValid = false;
          console.log("c'est pas bon");
      }
  });
}


// Const verification Lastname
  const checkLastNameInput = () => {
  lastName.addEventListener("input", function (e) {
      var value = e.target.value;
      if (value.length > 2 && /^[a-zA-Z\s\-À-ÖØ-öø-ÿ]+$/.test(value)) {
          isValid = true;
          console.log("c'est valide");
      } else {
          isValid = false;
          console.log("c'est pas bon");
      }
  });
}

// Const verification Email
const checkEmailInput = () => {
  email.addEventListener("input", function (e) {
      var value = e.target.value;
      if (/^((?!\.)[\w_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(value)) {
          isValid = true;
          console.log("c'est valide");
      } else {
          isValid = false;
          console.log("c'est pas bon");
      }
  });
}

// Const verification Birthdate
const checkBirthdateInput = () => {
  birthdate.addEventListener("input", function (e) {
      var value = e.target.value;
      if (/^[0-9]{4}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/.test(value)) {
          isValid = true;
          console.log("c'est valide");
      } else {
          isValid = false;
          console.log("c'est pas bon");
      }
  });
}

// Const verification Number
const checkNumberInput = () => {
  quantity.addEventListener("input", function (e) {
      var value = e.target.value;
      if (/^0*?[0-9]\d*$/.test(value)) {
          isValid = true;
          console.log("c'est valide");
      } else {
          isValid = false;
          console.log("c'est pas bon");
      }
  });
 }






// Bouton radio

for (i=0 ; i<radioInput.length ; i++) {
  radioInput[i].addEventListener("change", function(e) {
    var value = e.target;
      if (value.checked){
          console.log("Bouton coché !");
      }
      else{
        console.log("Vous n'avez pas coché de bouton");
      }
    });
}


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



// Const verification Conditions générales
const checkBoxInput = () => {
checkbox1.addEventListener('change', function() {
  if (this.checked) {
    console.log("C'est checké");
  } else {
    console.log("C'est pas checké");
  }
});
}


