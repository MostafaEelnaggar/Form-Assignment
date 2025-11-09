//================ Start Sign Up JS Section =========================
var userName = document.querySelector("#userName");
var userEmail = document.querySelector("#userEmail");
var userPass = document.querySelector("#userPass");
var signBut = document.querySelector("#sign");


if (signBut) { 
  var form = document.querySelector(".signupForm");
  var errorMessage1 = document.querySelector(".error1");
  var errorMessage2 = document.querySelector(".error2");
  var errorMessage3 = document.querySelector(".error3");
  var successMessage = document.querySelector(".success");
  var errorMessage4 = document.querySelector(".error4");

  var nameRegex = /^[A-Z][a-zA-Z]{1,19}$/;
  var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  var passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  var isvalid1 = false;
  var isvalid2 = false;
  var isvalid3 = false;

  userName.addEventListener("input", function () {
    if (nameRegex.test(userName.value)) {
      errorMessage1.classList.add("d-none");
      isvalid1 = true;
    } else {
      errorMessage1.classList.remove("d-none");
      successMessage.classList.add("d-none");
      isvalid1 = false;
    }
  });

  userEmail.addEventListener("input", function () {
    if (emailRegex.test(userEmail.value)) {
      errorMessage2.classList.add("d-none");
      errorMessage4.classList.add("d-none");
      isvalid2 = true;
    } else {
      errorMessage2.classList.remove("d-none");
      successMessage.classList.add("d-none");
      errorMessage4.classList.add("d-none");
      isvalid2 = false;
    }
  });

  userPass.addEventListener("input", function () {
    if (passRegex.test(userPass.value)) {
      errorMessage3.classList.add("d-none");
      errorMessage4.classList.add("d-none");
      isvalid3 = true;
    } else {
      errorMessage3.classList.remove("d-none");
      successMessage.classList.add("d-none");
      errorMessage4.classList.add("d-none");
      isvalid3 = false;
    }
  });

  signBut.addEventListener("click", function (e) {
    e.preventDefault();
    if (isvalid1 && isvalid2 && isvalid3) {
      successMessage.classList.remove("d-none");
      localStorage.setItem('user',JSON.stringify({
        name:userName.value,
        email:userEmail.value,
        password:userPass.value
      }))
      form.reset();
    } else {
        localStorage.removeItem('user')
      window.alert("Please enter valid inputs");
      errorMessage4.classList.remove("d-none");
    }
  });
}

// ========================== Start Welcome JS Section =======================

//====================== Start Welcome Page ==========================
var welcomeMsg = document.querySelector(".welcome");
var logOut = document.querySelector(".logout")

if (welcomeMsg) { 
  welcomeMsg.innerHTML = "Welcome Mr :  " + JSON.parse(localStorage.getItem('user')).name
}
logOut.addEventListener('click' , function(){
    localStorage.removeItem('user')
    window.location.href = "../html/login.html";
})
//============================== End Welcom JS Section ===================

