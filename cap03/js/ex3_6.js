function calcularSaque(){
    // cria referência aos elementos da página
    var inSaque = document.getElementById("inSaque");
    var outNotas100 = document.getElementById("outNotas100");
    var outNotas50 = document.getElementById("outNotas50");
    var outNotas10 = document.getElementById("outNotas10");
   
    // limpa mensagens (caso tenha uma segunda execução)
    outNotas100.textContent = "";
    outNotas50.textContent = "";
    outNotas10.textContent = "";

    // obtém e converte o conteúdo do campo inHoraBrasil
    var saque = Number(inSaque.value);
     
    // se não preencheu ou Nota-a-Number(NaN)
    if(isNaN(saque) || saque == 0){
       alert("Por favor, informe o valor do saque corretamente!"); //exibe alerta
       inSaque.focus(); // posiciona em inSaque
       return;
    }
      
    // verifica se saque não é múltiplo de 10
    if(saque%10 != 0){
        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100"); //exibe alerta
        inSaque.focus(); // posiciona em inSaque
        return;
    }

    // calcula notas de 100, 50 e 10
    var notas100 = Math.floor(saque/100);
    var resto = saque % 100;

    var notas50 = Math.floor(resto/50);
    resto = resto % 50;

    var notas10 = Math.floor(resto/10);

    // exibe as notas apenas se houver
    if(notas100 > 0){
        outNotas100.textContent = "Notas de R$ 100: " + notas100; 
    }
    if(notas50 > 0){
        outNotas50.textContent = "Notas de R$ 50: " + notas50; 
    }
    if(notas10 > 0){
        outNotas10.textContent = "Notas de R$ 10: " + notas10; 
    } 
}
  // cria uma referência ao elemento btExibir (botão)
  var btExibir = document.getElementById("btExibir");
   
  // registra um evento associado ao botão, para carregar uma função
  btExibir.addEventListener("click", calcularSaque);