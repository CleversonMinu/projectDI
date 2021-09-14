
/* Gerador de ID */
function generateDateNowAsString() {
  return new Date().toISOString()
}

document.getElementById("unique").innerHTML = generateDateNowAsString();

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

/* Função para cadastrar lista de prizes */

const inputPrize = document.querySelector('.input-nome');
const inputProduto = document.querySelector('.input-produto');
const inputFace = document.querySelector('.input-face');
const inputRepasse = document.querySelector('.input-repasse');
const inputPreco = document.querySelector('.input-preco');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
  const li = document.createElement('li');
  return li;
}

function criaTarefa(textInput) {
  const li = criaLi();
  li.innerText = textInput;
  tarefas.appendChild(li);
}

btnTarefa.addEventListener('click', function() {
  if (!inputPrize.value) return;
  criaTarefa(inputPrize.value);
  if (!inputProduto.value) return;
  criaTarefa(inputProduto.value);
  if (!inputFace.value) return;
  criaTarefa(inputFace.value);
  if (!inputRepasse.value) return;
  criaTarefa(inputRepasse.value);
  if (!inputPreco.value) return;
  criaTarefa(inputPreco.value);
});