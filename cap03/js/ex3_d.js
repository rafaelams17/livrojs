function calcularLadosTriangulo(){
    // cria referência aos elementos da página
    var inLadoA = document.getElementById("inLadoA");
    var inLadoB = document.getElementById("inLadoB");
    var inLadoC = document.getElementById("inLadoC");

    var outSituacao = document.getElementById("outSituacao");
    var outTipo = document.getElementById("outTipo");
 
    // obtém e converte o conteúdo do campo inNumero
    
    var ladoA = Number(inLadoA.value);
    var ladoB = Number(inLadoB.value);
    var ladoC = Number(inLadoC.value);
    
    // verifica validade do campo valor
    if(isNaN(ladoA) || ladoA == 0 || isNaN(ladoB) || ladoB == 0 || isNaN(ladoC) || ladoC == 0){
       alert("Por favor, informe os valores corretamente!"); //exibe alerta
       inLadoA.focus(); // posiciona em inLadoA
       return;
    }
 
    // verificar se pode ou não formar um triangulo
    if(((ladoA + ladoB) < ladoC) || ((ladoA + ladoC) < ladoB) || ((ladoC + ladoB) < ladoA)){
       outSituacao.textContent = "Lados não podem formar um triângulo!";
       outTipo.textContent = "";
    }else{ // exibe as respostas
        outSituacao.textContent = "Lados podem formar um triângulo!";
        if((ladoA == ladoB) && (ladoB == ladoC) && (ladoA == ladoC)){
            outTipo.textContent = "Tipo: Equilátero";
        }else if((ladoA != ladoB) && (ladoB != ladoC) && (ladoA != ladoC)){
            outTipo.textContent = "Tipo: Escaleno";
        }else{
            outTipo.textContent = "Tipo: Isósceles";
        }
    } 
}
// cria uma referência ao elemento btExibir (botão)
var btExibir = document.getElementById("btExibir");

// registra um evento associado ao botão, para carregar uma função
btExibir.addEventListener("click", calcularLadosTriangulo);