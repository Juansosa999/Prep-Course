// No cambies los nombres de las funciones.

const { run } = require("jest");

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  var res;
  if(x>y){
    res = x;
  }else if(x === y){
    res = (x || y);
  }else if(x<y){
    res = y;
  }
  return res;
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  var res;
  if(edad>=18){
    res = "Allowed";
  }else{
    res = "Not allowed";
  }
  return res;
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  var res;
  if(status === 1){
    res = "Online";
  }else if(status === 2){
    res = "Away";
  }else{
    res = "Offline";
  }
  return res;
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  var res;
  if(idioma == "aleman"){
    res = "Guten Tag!";
  }else if(idioma == "mandarin"){
    res = "Ni Hao!";
  }else if(idioma == "ingles"){
    res = "Hello!";
  }else{
    res = "Hola!";
  }
  return res;
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  var res;
  switch (color) {
    case 'blue':
      res = "This is blue"
      break;
    case 'red':
      res = "This is red"
      break;
    case 'green':
      res = "This is green"
      break;
    case 'orange':
      res = "This is orange"
      break;
    default:
      res = "Color not found";
      break;
  }
  return res;
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  var res = true;
  if(numero === 10 || numero === 5){
    res;
  }else{
    res = false;
  }
  return res;
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  var res = true;
  if(numero>20 && numero<50){
    res;
  }else{
    res = false;
  }
  return res;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  var res;
  if(Math.floor(numero)){
    res = true;
  }else if(numero === 0){
    return true;
  }else{
    res = false
  }
  return res;
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if(numero % 3 === 0 && numero % 5 === 0){
    return "fizzbuzz";
  }else if(numero % 3 === 0){
    return "fizz";
  }else if(numero % 5 === 0){
    return "buzz";
  }else{
    return numero;
  }
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
  var res;
  if(num1 === 0 || num2 === 0 || num3 === 0){
    res = "Error";
  }else if(num1 < 0 || num2 < 0 || num3 < 0){
    res = "Hay negativos";
  }else if((num3 > num1) && (num3 > num2)){ 
    num3++;
    res = num3;
  }else if((num1 > num2) && (num1 > num3)){
    res = "Número 1 es mayor y positivo";
  }else{
    res = false;
  }
  return res;
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if (numero === 0 || numero === 1) {
    return false;
  }else{
    for(var i = 2; i < numero; i++){
      if(numero % i === 0){
        return false;
      }
    }
    return true;
  }
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  switch (valor) {
    case true:
      return "Soy verdadero"
      break;
    case false:
      return "Soy falso"
      break;  
    default:
      return "Ingrese un boleano";
      break;
  }
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  var res = new Array(11);
  for (let i = 0; i<=10; i++) {
        res[i]=6*i;
  }
  return res;
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  var res = true;
  if(numero.toString().length == 3){
    res;
  }else{
    res = false;
  } 
  return res;
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var i = 0;
  do {
    numero+=5;//numero mas 5
    i++;
  } while (i<8);
  return numero;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
