"use strict";

let submitForm = document.querySelector("#submitForm");
submitForm.addEventListener("click", function(){
  validate(true);
});

const resetFn = () => {
  document.querySelector("#firstNameValidation").value = "";
  document.querySelector("#lastNameValidation").value = "";
  document.querySelector("#mailValidation").value = "";
  document.querySelector("#Password").value = "";
  document.querySelector("#CPassword").value = "";

  document.querySelector("#checkboxValidation").checked = false;

  document.getElementById("firstNameValid").style.display = "none";
  document.querySelector("#lastNameValid").style.display = "none";
  document.querySelector("#mailValid").style.display = "none";
  document.querySelector("#passwordValid").style.display = "none";
  document.querySelector("#CpasswordInvalid").style.display = "none";
  submitted = false;
}

let submitted = false;

function validate(isSubmitted) {
  if(isSubmitted){
    submitted = true;
  }
  let firstNameValidation = document.querySelector(
    "#firstNameValidation"
  ).value;
  let lastNameValidation = document.querySelector("#lastNameValidation").value;
  let mailValidation = document.querySelector("#mailValidation").value;
  let Password = document.querySelector("#Password").value;
  let CPassword = document.querySelector("#CPassword").value;
  
  let checkboxValidation = document.querySelector(
    "#checkboxValidation"
  ).checked;
  
  let error = false;
  if(submitted){
  if (firstNameValidation.length >= 3) {
    document.getElementById("firstNameValid").style.display = "block";
    document.querySelector("#firstNameInvalid").style.display = "none";
  } else {
    document.querySelector("#firstNameInvalid").style.display = "block";
    document.getElementById("firstNameValid").style.display = "none";
    error = true;
  }
  
  if(Password == CPassword)
  {
    document.getElementById("passwordValid").style.display = "block";
    document.querySelector("#passwordInvalid").style.display ="none";
  }
  else
  {
    if(CPassword != Password)
    {
    document.querySelector("#CpasswordInvalid").style.display ="block";
    document.getElementById("CpasswordValid").style.display = "none";
    error = true;
    }
    
  }

  if (lastNameValidation.length >= 3) {
    document.querySelector("#lastNameValid").style.display = "block";
    document.querySelector("#lastNameInvalid").style.display = "none";
  } else {
    document.querySelector("#lastNameInvalid").style.display = "block";
    document.querySelector("#lastNameValid").style.display = "none";
    error = true;
  }
  if (
    mailValidation.includes("@") &&
    mailValidation.includes(".") &&
    !mailValidation.startsWith("@") &&
    mailValidation.length - (mailValidation.lastIndexOf(".") + 1) >= 2
  ) {
    document.querySelector("#mailValid").style.display = "block";
    document.querySelector("#mailInvalid").style.display = "none";
  } else {
    document.querySelector("#mailInvalid").style.display = "block";
    document.querySelector("#mailValid").style.display = "none";
    error = true;
  }
  
  
  if(checkboxValidation){
    document.querySelector("#tcInValid").style.display = "none";
  } else {
    document.querySelector("#tcInValid").style.display = "block";
    error = true;
  }
  
  if(error === false && isSubmitted === true){
    alert('Your details have been saved successfully');
    resetFn();
  } 
} 
}