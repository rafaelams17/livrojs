function calcularRaiz(){
  // cria referência aos elementos da página
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");
 
  // obtém e converte o conteúdo do campo inHoraBrasil
  var numero = Number(inNumero.value);
   
  // se não preencheu  ou Nota-a-Number
  if(isNaN(numero) || numero == 0){
     alert("Por favor, informe um número corretamente!"); //exibe alerta
     inNumero.focus(); // posiciona em inNumero
     return;
  }
  
  var raiz = Math.sqrt(numero); // calcula a raiz quadrada do número

  // se  o valor da variável raiz igual a este valor arredondado para baixo, para remover os decimais
  if(raiz == Math.floor(raiz)){
      outResposta.textContent = "Raiz exata de " + numero + " é " + raiz; 
  }else{
      // senão, exibe uma mensagem indicando que não há raiz exata
      outResposta.textContent = "Não há raiz exata para " + numero; 
  }
}

// cria uma referência ao elemento btRaiz (botão)
var btRaiz = document.getElementById("btRaiz");
 
// registra um evento associado ao botão, para carregar uma função
btRaiz.addEventListener("click", calcularRaiz);