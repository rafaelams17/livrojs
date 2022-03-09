function calcular(){
  // cria referência aos elementos da página
  var inPreco = document.getElementById("inPreco");
  var inTempo = document.getElementById("inTempo");
  var outValor = document.getElementById("outValor");

  // obtém conteúdo (e converte em número)
  var preco = inPreco.value;
  var tempo = inTempo.value;

  // calcula valor a pagar (arredonda para cima)
  var duracao = Math.ceil(tempo/15)*preco;

  // exibe o valor a pagar (com 2 decimais)
  outValor.textContent = "Valor a Pagar R$ " + duracao.toFixed(2);  
}

// captura botão e associa evento ao click neste botão ao evento calcular
var btnCalcular = document.getElementById("calcular");
btnCalcular.addEventListener("click", calcular);