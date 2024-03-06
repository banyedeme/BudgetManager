const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};
function myfunction(){
  var x = document.getElementById("pass");

  if(x.type === "password"){
     x.type = "text";
  }
  else{
      x.type = "password";
  }
}
function validate(){
  var password = document.getElementById("pass");
  var length = document.getElementById("length");

  if(password.value.length >= 8){
     alert("login successful");
     window.location.replace("index.html");
     return false;
  }
  else {
     alert("login failed");
  }
}
