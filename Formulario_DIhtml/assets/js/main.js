/* Contador de caracteres */
function countChars500(obj){
  document.getElementById("charNum500").innerHTML = obj.value.length;
}

function countChars60(obj){
  document.getElementById("charNum60").innerHTML = obj.value.length;
}
function countChars602(obj){
  document.getElementById("charNum602").innerHTML = obj.value.length;
}

function countChars65(obj){
  document.getElementById("charNum65").innerHTML = obj.value.length;
}

function countChars200(obj){
  document.getElementById("charNum200").innerHTML = obj.value.length;
}

function countChars28(obj){
  document.getElementById("charNum28").innerHTML = obj.value.length;
}


function countChars160(obj){
  document.getElementById("charNum160").innerHTML = obj.value.length;
}

/* Gerador de ID */
function generateUniqueString() {
  var ts = String(new Date().getTime()),
      i = 0,
      out = '';

  for (i = 0; i < ts.length; i += 2) {
      out += Number(ts.substr(i, 2)).toString(36);
  }

  return ('' + out);
}

document.getElementById("unique").innerHTML = generateUniqueString();

/* Modal Cadastro de prizes */
let modal = document.getElementById('contact-modal'),
    openModal = document.getElementById('modal-open'),
    closeModal = document.querySelector('.close-modal');

openModal.addEventListener('click', function() {
  modal.style.display = 'block';
})

closeModal.addEventListener('click', function() {
  modal.style.display = 'none';
})

window.addEventListener('click', function(e) {
  if(e.target == modal) {
    modal.style.display = 'none';
  }
})