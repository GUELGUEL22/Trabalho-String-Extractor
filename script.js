const Abracadabra = document.querySelector("#botao-palavrachave");

Abracadabra.addEventListener("click", PéDeCabra);

function PéDeCabra() {
  const texto = document.querySelector("#entrada-de-texto").value;

  const campoResultado = document.querySelector("#resultado-palavrachave");

  const palavras = texto.split(" ");

  campoResultado.textContent = palavras.join("/ ");
}

function XandãoProcess(texto) {
  let palavras = texto.split(/\P{L}+/u);

  return palavras;
}