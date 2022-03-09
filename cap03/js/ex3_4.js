function calcularHora(){
  // cria referência aos elementos da página
  var inHoraBR = document.getElementById("inHoraBR");
  var outHoraFR = document.getElementById("outHoraFR");
 
  // obtém e converte o conteúdo do campo inHoraBrasil
  var horaBR = Number(inHoraBR.value);
   
  // se não preencheu  ou Nota-a-Number
  if(inHoraBR.value == "" || isNaN(horaBR)){
     alert("Por favor, informe a hora do Brasil corretamente!"); //exibe alerta
     inHoraBR.focus(); // posiciona em inHoraBR
     return;
  }
  
  var horaFR = horaBR + 5; //calcula a hora da França

  // se passar das 24 horas na França
  if(horaFR > 24){
     horaFR = horaFR - 24; // subtrai 24
  }

  // exibe resposta (altera contéudo do elemento out)
  outHoraFR.textContent = "Hora na França: " + horaFR.toFixed(2) + "h(s)"; 
}

// cria uma referência ao elemento btHora(botão)
var btHora = document.getElementById("btHora");
 
// registra um evento associado ao botão, para carregar uma função
btHora.addEventListener("click", calcularHora);