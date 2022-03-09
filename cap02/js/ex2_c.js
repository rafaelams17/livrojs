function calcular(){
  // cria referência aos elementos da página
  var inProduto = document.getElementById("inProduto");
  var inPreco = document.getElementById("inPreco");
  var outTerceiroProduto = document.getElementById("outTerceiroProduto");
  var outPromocao = document.getElementById("outPromocao");

  // obtém conteúdo (e converte em número)
  var produto = inProduto.value;
  var preco = Number(inPreco.value);

  // calcula valor a pagar 
  var total = (preco*2) + preco*0.5;
  var terceiroProduto = total - (preco*2);

  // exibe o valor a pagar e a promoção
  outPromocao.textContent = produto + " - Promoção: Leve 3 por R$: " + total.toFixed(2);  
  outTerceiroProduto.textContent = "O 3° produto custa apenas R$: " + terceiroProduto.toFixed(2); 
}

// captura botão e associa evento ao click neste botão ao evento calcular
var btnCalcular = document.getElementById("calcular");
btnCalcular.addEventListener("click", calcular);