var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAlura = paiente.querySelector(".info-altura");
var altura = tdAlura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if(peso <= 0 || peso >= 1000){
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
}

if(altura <= 0 || altura >= 3.00){
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImcContent = "Altura inválida!";
}

if( alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}







//
