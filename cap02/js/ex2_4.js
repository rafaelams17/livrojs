function calcular(){
    //cria a referência aos elementos da página
    var inQuilo = document.getElementById("inQuilo");
    var inConsumo = document.getElementById("inConsumo");
    var outValor = document.getElementById("outValor");
    
    //obtém conteúdo dos campos de entrada
    var quilo = Number(inQuilo.value);
    var consumo = Number(inConsumo.value);

    var valor = (quilo/1000)*consumo; //calcula o valor a ser pago

    outValor.textContent = "Valor a pagar R$: " + valor.toFixed(2); //altera o contéudo da linha de resposta

}

var btn = document.getElementById("btCalcular"); //cria referência ao elemento botão
btn.addEventListener("click", calcular); // regista um evento associado ao botão, para carregar a função
