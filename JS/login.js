//==================== Start Log In JS Section ======================
var loginBut = document.querySelector(".loginBut");
  var loginEmail = document.querySelector("#userLoginEmail");
  var loginPass = document.querySelector("#userLoginPass");
  var e1 = document.querySelector(".e1");
  var e2 = document.querySelector(".e2");
  var e3 = document.querySelector(".e3");

  loginBut.addEventListener("click", function (e) {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    if (
      user.email === loginEmail.value.trim() &&
      user.password === loginPass.value.trim()
    ) {
      window.location.href = "../html/welcom.html";
    } else if (localStorage.getItem("email") !== loginEmail.value.trim()) {
      e1.classList.remove("d-none");
      e3.classList.remove("d-none");
    } else if (localStorage.getItem("password") !== loginPass.value.trim()) {
      e2.classList.remove("d-none");
      e3.classList.remove("d-none");
    }
  });
// ============================= End Log In JS Section =======================