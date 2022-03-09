function calcularVelocidade(){
    // cria referência aos elementos da página
    var inVelocidadePermitida = document.getElementById("inVelocidadePermitida");
    var inVelocidadeCondutor = document.getElementById("inVelocidadeCondutor");
    var outResposta = document.getElementById("outResposta");

    // obtém e converte o conteúdo dos campos inVelocidadePermitida e inVelocidadeCondutor
    var velPermitida = Number(inVelocidadePermitida.value);
    var velCondutor = Number(inVelocidadeCondutor.value);
     
    // se não preencheu ou Nota-a-Number(NaN)
    if(isNaN(velPermitida) || velPermitida == 0){
       alert("Por favor, informe o valor corretamente!"); //exibe alerta
       inVelocidadePermitida.focus(); // posiciona em inVelocidadePermitida
       return;
    }

    // se não preencheu ou Nota-a-Number(NaN)
    if(isNaN(velCondutor) || velCondutor == 0){
        alert("Por favor, informe o valor corretamente!"); //exibe alerta
        inVelocidadeCondutor.focus(); // posiciona em inVelocidadeCondutor
        return;
    }

    // exibe as notas apenas se houver
    if(velCondutor <= velPermitida){
        outResposta.textContent = `Situação: Sem multa ${velCondutor}km/h`; 
    } else {
        var maisVinte = velPermitida * 1.20;
        if (velCondutor <= maisVinte) {
          outResposta.textContent = "Situação: Multa Leve";
        } else {
          outResposta.textContent = "Situação: Multa Grave";
        }
      }
}
// cria uma referência ao elemento btExibir (botão)
var btExibir = document.getElementById("btExibir");
   
// registra um evento associado ao botão, para carregar uma função
btExibir.addEventListener("click", calcularVelocidade);