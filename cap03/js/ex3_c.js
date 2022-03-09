function calcularTroco(){
   // cria referência aos elementos da página
   var inValor = document.getElementById("inValor");
   var outTempo = document.getElementById("outTempo");
   var outTroco = document.getElementById("outTroco");

   // obtém e converte o conteúdo do campo inNumero
   var valor = Number(inValor.value);
   
   // declaração de variáveis 
   var troco;
   var tempo;
   
   // verifica validade do campo valor
   if(isNaN(valor) || valor == 0){
      alert("Por favor, informe o valor corretamente!"); //exibe alerta
      inValor.focus(); // posiciona em inValor
      return;
   }

   // saldo insuficiente
   if(valor < 1.00){
      alert("Saldo insuficiente!"); //exibe alerta
      inValor.focus(); // posiciona em inValor
      return;
   }

   // cria as condições para verificar tempo e troco
   if(valor >= 3.00){
      tempo = 120;
      troco = valor - 3.00;
   }else if(valor >= 1.75){
      tempo = 60;
      troco = valor - 1.75;
   }else{
      tempo = 30;
      troco = valor - 1.00;
   }

   // exibe as respostas
   outTempo.textContent = `Tempo: ${tempo} min`;
   if(troco > 0){
      outTroco.textContent = `Troco R$ ${troco.toFixed(2)}`;
   }else{
      outTroco.textContent = "";
   }
}
// cria uma referência ao elemento btExibir (botão)
var btExibir = document.getElementById("btExibir");
   
// registra um evento associado ao botão, para carregar uma função
btExibir.addEventListener("click", calcularTroco);