function promocaoMed(){
  // cria referência aos elementos
  var inMed = document.getElementById("med");
  var inPreco = document.getElementById("preco");
  var outNome = document.getElementById("outNome");
  var outPromocao = document.getElementById("outPromocao");

  //obtém o contéudo dos campos de entrada
  var nomeMed = inMed.value;
  var preco = Number(inPreco.value);

  // processamento
  var total = Math.floor(preco*2);

  //altera o conteúdo dos parágrafos de resposta
  outNome.textContent = "Promoção de " + nomeMed;
  outPromocao.textContent = "Leve 2 por apenas R$: " + total;
  
}

//cria referência ao elemento btConverter (botão)
var btnPromocao = document.getElementById("promocao");

//registra um evento associado ao botão, para converter uma função
btnPromocao.addEventListener("click", promocaoMed);