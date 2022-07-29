var password = document.getElementById("passGen");

function generatePassword() {
  var passCharacters =
    "!@#$%^&=*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
  var passLength = 16;
  var password = "";
  for (var i = 1; i <= passLength; i++) {
    var random = Math.floor(Math.random() * passCharacters.length);
    password += passCharacters.substring(random, random + 1);
  }
  document.getElementById("passGen").value = password;
}

function copyPass() {
  var copypassword = document.getElementById("passGen");
  copypassword.select();
  document.execCommand("copy");
  alert("Password Copied");
}