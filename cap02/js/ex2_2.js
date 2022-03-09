function converter(){
    var inTitulo = document.getElementById("inTitulo"); //cria referência input do Titulo do Filme de entrada
    var inDuracao = document.getElementById("inDuracao"); //cria referência do input da duração do Filme de entrada
    var outTitulo = document.getElementById("outTitulo"); //cria referência do elemento de saída do Titulo do Filme
    var outResposta = document.getElementById("outResposta"); //cria referência do elemento de saida da duração do Filme

    var titulo = inTitulo.value; //obtém conteúdos dos Campos de entrada
    var duracao = Number(inDuracao.value); //obtém conteúdos dos Campos de entrada

    var horas = Math.floor(duracao/60); //arrendonda para baixo o resultado da divisão
    var min = duracao % 60; //obtém o resto da divisão entre os números 

    outTitulo.textContent = titulo; //altera o conteúdo dos parágrafos de resposta
    outResposta.textContent = horas + ` hora(s) e ` + min + ` minuto(s)`; //altera o conteúdo dos parágrafos de resposta

}

//cria referência ao elemento btConverter (botão)
var btConverter = document.getElementById("btConverter"); 

//registra um evento associado ao botão, para converter uma função
btConverter.addEventListener('click', converter); 