function mostrarOla(){
  var inputNome = document.getElementById("nome");
  var nome = inputNome.value;
  document.getElementById("resposta").innerHTML = "Olá " + nome;
}

/*
function mostrarOla(){
  var nome = document.getElementById("nome").value;
  document.getElementById("resposta").innerHTML = "Olá " + nome;
}
*/

var mostrar = document.getElementById("mostrar");
mostrar.onclick = mostrarOla;