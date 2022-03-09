function calcularPeso(){
  // cria referência aos elementos da página
  var inNome = document.getElementById("inNome");
  var rbMasculino = document.getElementById("rbMasculino");
  var rbFeminino = document.getElementById("rbFeminino");
  var inAltura = document.getElementById("inAltura");
  var outResposta = document.getElementById("outResposta");

  // obtém conteúdo dos campos de edição da página
  var nome = inNome.value;
  var masculino = rbMasculino.checked;
  var feminino = rbFeminino.checked;
  var altura = Number(inAltura.value);
   
  // verifica se nome foi preenchido e sexo selecionado
  if(nome == "" || (masculino == false && feminino == false)){
    alert("Por favor, informe o nome e selecione o sexo!");
    inNome.focus();
    return;
  }
  
  // se altura vazio(0) ou NaN: Not-a-Number(um texto for informado, por exemplo)
  if(altura == 0 || isNaN(altura)){
    alert("Por favor, informe a altura corretamente!");
    inAltura.focus();
    return;
  }

  // se masculino (siginifica se masculino == true)
  if(masculino){
    var peso = 22 * Math.pow(altura,2); // Math.pow eleva ao quadrado
  }
  else{
    var peso = 21 * Math.pow(altura,2);
  }

  // apresenta a resposta (altera o contéudo da linha outResposta)
  outResposta.textContent = nome + ", seu peso ideal é " + peso.toFixed(2) + "kg"; 
}

// cria uma referência ao elemento btCalcular(botão)
var btCalcular = document.getElementById("btCalcular");

// registra um evento associado ao botão, para carregar uma função
btCalcular.addEventListener("click", calcularPeso);


function limparCampos(){
// recarrega a página
location.reload();

// posiciona (joga o foco) no elemento inNome
document.getElementById("inNome").focus();
}

// cria uma referência ao elemento btCalcular(botão)
var btLimpar = document.getElementById("btLimpar");

// registra um evento associado ao botão, para carregar uma função
btLimpar.addEventListener("click", limparCampos);