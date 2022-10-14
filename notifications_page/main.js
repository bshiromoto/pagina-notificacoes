document.querySelector("#botao").addEventListener("click", () => {
  document.body.classList.toggle("marcar-lidas");
  trocaNumero();
  trocaTexto();
});

function trocaNumero() {
  var numero = document.querySelector('.icone-numero');
  if(numero.innerHTML === "0") {
    numero.innerHTML = "3";
  } else {
    numero.innerHTML = "0";
  }
}

function trocaTexto() {
  var texto = document.querySelector('.texto-lidas');
  if(texto.innerHTML === "Mark all as read") {
    texto.innerHTML = "Undo";
  } else {
    texto.innerHTML = "Mark all as read";
  }
}