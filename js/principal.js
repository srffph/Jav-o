var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAlura = paiente.querySelector(".info-altura");
var altura = tdAlura.textContent;

var imc = peso / altura * altura; // 100 / 2.0 * 2.0 = / 4 =>>>>> 25

console.log(imc);