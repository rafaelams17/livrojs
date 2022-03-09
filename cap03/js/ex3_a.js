function parImpar(){
    // cria referência aos elementos da página
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    // obtém e converte o conteúdo do campo inNumero
    var numero = Number(inNumero.value);
     
    // se não preencheu ou Nota-a-Number(NaN)
    if(isNaN(numero) || numero == 0){
       alert("Por favor, informe o valor corretamente!"); //exibe alerta
       inNumero.focus(); // posiciona em inNumero
       return;
    }

    // exibe as notas apenas se houver
    if(numero%2 == 0){
        outResposta.textContent = "O número " + numero + " é par!"; 
    }
    else{
        outResposta.textContent = "O número " + numero + " é ímpar!"; 
    }
}
// cria uma referência ao elemento btExibir (botão)
var btExibir = document.getElementById("btExibir");
   
// registra um evento associado ao botão, para carregar uma função
btExibir.addEventListener("click", parImpar);