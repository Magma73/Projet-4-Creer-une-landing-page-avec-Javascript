// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");

const firstName = document.getElementById("first");
const lasttName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");



// EVENTS
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalCloseBtn.addEventListener ("click", closeModal);



// FUNCTIONS
// edit nav (media queries)
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


// function validate(e){
//   var value = e.target.value;
//   if(){
//     prenom = true;
//   }
//   else{

//   }
// }

// formData.get('username');

// ^[a-zA-Z\s\-À-ÖØ-öø-ÿ]+$

// myInput.addEventListener('input', function(e) {
//   var value = e.target.value;
//   if (value.startsWith('Hello ')) {
//       prenom = true;
//   } else {
//       prenom = false;
//   }
// });

// function prenom(value) {
//   return /^e[0-9]{3,}$/.test(value);
// }