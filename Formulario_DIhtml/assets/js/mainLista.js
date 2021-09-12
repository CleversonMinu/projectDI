const inputPrize = document.querySelector('.input-nome', 'required', true);
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