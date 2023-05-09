const botao = document.getElementById("botao");


botao.addEventListener("click", function() {
  
  const body = document.getElementsByTagName("body")[0];


  body.style.backgroundColor = "red";
});

const botao = document.getElementById("botao");
const campoTexto = document.getElementById("campo-texto");


const lista = document.getElementById("lista");


botao.addEventListener("click", function() {

  const valor = campoTexto.value;

 
  const novoItem = document.createElement("li");

  
  novoItem.textContent = valor;

 
  lista.appendChild(novoItem);

  
  campoTexto.value = "";
});

const imagem = document.getElementById("imagem");
const botao = document.getElementById("botao");


botao.addEventListener("click", function() {
 
  if (imagem.src.includes("imagem1.jpg")) {
    imagem.src = "imagem2exemplo.jpg";
  } else {
    imagem.src = "imagem1exemplo.jpg";
  }
});

const botao = document.getElementById("botao");
const elemento = document.getElementById("elemento");


botao.addEventListener("click", function() {

  elemento.textContent = "Mensagem exibida!";
});


const botao = document.getElementById("botao");
const elemento = document.getElementById("elemento");


botao.addEventListener("click", function() {
 
  elemento.style.display = "none";
});