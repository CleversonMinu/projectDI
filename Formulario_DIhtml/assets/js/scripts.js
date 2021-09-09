/* Bloqueio de caracteres especiais */
const smsInput = document.querySelector("#especiaisSMS");

smsInput.addEventListener("keypress", function(e) {
  
if(!checkChar(e)) {
  e.preventDefault();
}

});

function checkChar(e) {

  const char = String.fromCharCode(e.keyCode);
  const pattern = '[a-zA-Z0-9:/]';

  if(char.match(pattern)) {
    return true;
  }
}

/* Bloqueio de caracteres especiais */
const rdInput = document.querySelector("#especiaisRD");

rdInput.addEventListener("keypress", function(e) {
  
if(!checkChar(e)) {
  e.preventDefault();
}

});

function checkChar(e) {

  const char = String.fromCharCode(e.keyCode);
  const pattern = '[a-zA-Z0-9:/]';

  if(char.match(pattern)) {
    return true;
  }
}