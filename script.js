const Abracadabra = document.querySelector("#botao-palavrachave");

Abracadabra.addEventListener("click", PéDeCabra);

function PéDeCabra() {
  const texto = document.querySelector("#entrada-de-texto").value;

  const campoResultado = document.querySelector("#resultado-palavrachave");

  const words = XandãoProcess(texto)

  campoResultado.textContent = words.join("/ ");
}

function XandãoProcess(texto) {
  let palavras = texto.split(/\P{L}+/u);

  return palavras;
}