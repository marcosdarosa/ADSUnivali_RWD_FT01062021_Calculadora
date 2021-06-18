function apresentaCalculo(resultado){
    alert("RESULTADO = " + resultado);
}

function adicao() {
    var numero1 = Number(document.getElementById("calculo1").value);
    var numero2 = Number(document.getElementById("calculo2").value);
    var resultado = numero1 + numero2;
    apresentaCalculo(resultado);
}

function subtracao() {
    var numero1 = Number(document.getElementById("calculo1").value);
    var numero2 = Number(document.getElementById("calculo2").value);
    var resultado = numero1 - numero2;
    apresentaCalculo(resultado);
}

function multiplicacao() {
    var numero1 = Number(document.getElementById("calculo1").value);
    var numero2 = Number(document.getElementById("calculo2").value);
    var resultado = numero1 * numero2;
    apresentaCalculo(resultado);
}

function divisao() {
    var numero1 = Number(document.getElementById("calculo1").value);
    var numero2 = Number(document.getElementById("calculo2").value);
    var resultado = numero1 / numero2;
    apresentaCalculo(resultado);
}