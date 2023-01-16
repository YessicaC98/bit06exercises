'use strict';
// Pedir nombre al usuario y saludarlo. 
function saludo() {
  var nombre=prompt("Introduce tu nombre");
  alert("¡Hola! " + nombre + ", eres bienvenid@.");
}

var BotonSaludo = document.getElementById('BotonSaludo');
BotonSaludo.onclick = saludo;

// Pedir edad al usuario y responder si es o no es mayor de edad.
function MayorEdad() {
  const edad = Number(prompt('Escribe tu edad'));
  if (edad >=18){
     alert('Eres mayor de edad')
  }
  else if(edad<18){
     alert('Eres menor de edad')
  }
}

var BotonEdad = document.getElementById('BotonEdad');
BotonEdad.onclick = MayorEdad;

// Pedir a Pepita nombre y edad
function NombreyEdad() {
    var nombre = prompt('Escribe tu nombre');
    var edad = Number(prompt('Escribe tu edad'));
    if (nombre === "Pepita" && edad >=18) {
        alert('Sala de Espera 1')
    }
    else if (nombre === "Pepita" && edad <18) {
        alert('Sala de Espera 2')
    }
    else if (nombre !="Pepita" && edad >=18) {
        alert('Sala de Espera 3')
    }
    else if (nombre !="Pepita" && edad <18) {
        alert('Sala de Espera 4')
    }
}

var BotonNombre = document.getElementById('BotonNombre');
BotonNombre.onclick = NombreyEdad;

// Pedir un número y mostrar los números pares desde 1 hasta n.
function multiplosDeDos() {
  var numero = Number(document.getElementById('numero').value);
  let pares = '';
  for (let i = 1; i <= numero; i++) {
    if (i % 2 === 0) {
      pares += i + ', ';
    }
  }
  resultado.placeholder = `${pares}`;
}

// Pedir un número, mostrar el doble de n.
function Doblar(){
  var valor1 = Number(document.getElementById('valor1').value);
 var result2 = valor1 * 2;

 document.getElementById('result2').value = result2;
}

// Pedir un número, mostrar el triple de n.
function Triplicar(){
  var valor3 = Number(document.getElementById('valor3').value);
 var result3 = valor3 * 3;

 document.getElementById('result3').value = result3;
}

// Pedir un número, mostrar la mitad de n.
function Mitad(){
  var valor4 = Number(document.getElementById('valor4').value);
 var result4 = valor4 / 2;

 document.getElementById('result4').value = result4;
}

// Pedir un número, mostrar la tercera parte de n.
function parte3(){
  var valor5 = Number(document.getElementById('valor5').value);
 var result5 = valor5 / 3;

 document.getElementById('result5').value = result5;
}

// Pedir un número, mostrar el cuadrado de n.
function cuadrado(){
  var valor6 = Number(document.getElementById('valor6').value);
 var result6 = valor6 * valor6;

 document.getElementById('result6').value = result6;
}

// Pedir un número, mostrar n reducido en 5.
function menos5(){
  var num1 = Number(document.getElementById('num1').value);
 var resultnum1 = num1 - 5;

 document.getElementById('resultnum1').value = resultnum1;
}

// Pedir un número, mostrar el doble de n más 4.
function doble4(){
  var num2 = Number(document.getElementById('num2').value);
 var resultnum2 = num2 * 2 +4;

 document.getElementById('resultnum2').value = resultnum2;
}

// Pedir un número, mostrar si es positivo, negativo o si es cero.
function ceroNegativoPositivo() {
  var numero2 = Number(document.getElementById('numero2').value);
  if (numero2 === 0) {
    resultado2.placeholder = `Número cero`;
  } else if (numero2 < 0) {
    resultado2.placeholder = `Número negativo`;
  } else {
    resultado2.placeholder = `Número Positivo`;
  }
  
}

// Pedir un número, mostrar si es par, impar o si es cero.
function ceroParImpar() {
  var numero8 = Number(document.getElementById('numero8').value);
  if (numero8 === 0) {
    resultado8.placeholder = `Número cero`;
  } else if (numero8 % 2 === 0) {
    resultado8.placeholder = `Número par`;
  } else {
    resultado8.placeholder = `Número impar`;
  }
}

// Pedir un número, mostrar si es un número primo o no.
function esPrimo() {
  var primo = Number(document.getElementById('primo').value);
  if (primo < 2) {
    alert('Error, debes ingresar un número mayor que 1');
    return;
    console.log('Esta línea NO se ejecutará porque está después de RETURN');
  }
  let contador = 0;
  for (let i = 1; i <= primo; i++) {
    if (primo % i === 0) {
      contador++;
    }
  }
  if (contador === 2) {
    resultadoprimo.placeholder =`SI es primo`;
  } else {
    resultadoprimo.placeholder =`NO es primo`;
  }
}

// Pedir dos números, mostrar la suma.
function sumar(){
  var valor1 = Number(document.getElementById('valor1').value);
  var valor2 = Number(document.getElementById('valor2').value);
 var result = valor1 + valor2;
 document.getElementById('result').value = result;
}


// Pedir dos números, mostrar la resta.
function restar(){
  var valor3 = Number(document.getElementById('valor3').value);
  var valor4 = Number(document.getElementById('valor4').value);
 var result2 = valor3 - valor4;

 document.getElementById('result2').value = result2;
}

// Pedir dos números, mostrar la multiplicación.
function multiplicar(){
  var valor5 = Number(document.getElementById('valor5').value);
  var valor6 = Number(document.getElementById('valor6').value);
 var result3 = valor5 * valor6;

 document.getElementById('result3').value = result3;
}

// Pedir dos números, mostrar la división.
function dividir(){
  var valor7 = Number(document.getElementById('valor7').value);
  var valor8 = Number(document.getElementById('valor8').value);
 var result4 = valor7 / valor8;

 document.getElementById('result4').value = result4;
}

// Pedir dos números, mostrar el resto de la división.
function residual(){
  var valor9 = Number(document.getElementById('valor9').value);
  var valor10 = Number(document.getElementById('valor10').value);
 var result5 = valor9 % valor10;

 document.getElementById('result5').value = result5;

}

// Pedir dos números, mostrar si el primer número es divisible por el segundo.
function esDivisible(){
  var valor12 = Number(document.getElementById('valor12').value);
  var valor13 = Number(document.getElementById('valor13').value);
 var result15 = valor12 % valor13;
 if (result15 === 0) {
  alert(`${valor12} SI es divisible por ${valor13}`);
 } else {
  alert(`${valor12} NO es divisible por ${valor13}`);
 }
}

// Pedir dos números y el nombre de una operación, mostrar el resultado.
function unaOperacion() {
  var numero1 = Number(document.getElementById('numero1').value);
  var numero20 = Number(document.getElementById('numero20').value);
  var operacion = prompt(
    'Ingresa una operación: sumar, restar, multiplicar o dividir'
  );

  switch (operacion) {
    case 'sumar':
      alert(`${numero1} + ${numero20} = ${numero1 + numero20}`);
      break;
    case 'restar':
      alert(`${numero1} - ${numero20} = ${numero1 - numero20}`);
      break;
    case 'multiplicar':
      alert(`${numero1} x ${numero20} = ${numero1 * numero20}`);
      break;
    case 'dividir':
      alert(`${numero1} / ${numero20} = ${numero1 / numero20}`);
      break;
    default:
      alert(`La operación "${operacion}" no existe en esta función.`);
      break;
  }
}

// Pedir un número, mostrar la suma total desde 1 hasta n. PENDIENTE
function sumaTotal() {
  var numeroT = Number(document.getElementById('numeroT').value);;

  let resultadoT = 0;

  let i = 1;
  while (i <= numeroT) {
    resultadoT += i;
    i++;
  }
  alert('La suma total es: ' + resultadoT);
}

// Pedir un número, mostrar multiplos de 3 desde 1 hasta n.
function multiplosDe3() {
  var valor100 = Number(document.getElementById('valor100').value);
  var multiplosencontrados = []
  let i = 1;
  while (i <= valor100) {
    if (i % 3 === 0) {
      multiplosencontrados.push(i);
    }
    i++;
  }
  resultado100.placeholder = `${multiplosencontrados}`;
}

// Pedir un número, mostrar los números desde n hasta 0.
var desdeNhasta0 = () => {
  var numero10 = Number(document.getElementById('numero10').value);
  var numeros0 = []
  for (let i = numero10; i > -1; i--) {
    numeros0.push(i);
  }
  resultado0.placeholder = `${numeros0}`;
};