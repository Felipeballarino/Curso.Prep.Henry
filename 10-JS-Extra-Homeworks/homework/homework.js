// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var a =[];
  for(let i in objeto){
    a.push([i,objeto[i]])
  }
  return a;




}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var dev = {};
  for (var i =0; i<string.length;i++){
    if(dev[string[i]]){
      dev[string[i]]=dev[string[i]] + 1;
    }else{
      dev[string[i]]= 1;
    }
  }
  return dev;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var min='';
  var may='';
  for(var i=0;i<s.length;i++){
    if(s[i].toUpperCase()==s[i]){
      may= may + s[i];
    }else{
      min=min + s[i];
    }
  }
  return may + min;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var rev = '';
  for(var i=str.length - 1;i>=0;i--){
    rev = rev +str[i];
  }
  var array = rev.split(' ').reverse().join(' ');
  return array;
 
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var num = numero.toString();
  for(var i=0;i<num.length;i++){
    if(num[i] === num[num.length-1]){
      return "Es capicua";
      break;
    }else{
      return "No es capicua";
      break;
    }
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var array = ['a', 'b', 'c']
  var list = '';
  for(var i =0; i<cadena.length;i++){
    if(!array.includes(cadena[i])){
      list = list + cadena[i];
    }
  }
  return list;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for(var i=0;i<arr.length;i++){
    var ord = arr[i]
    var k = i-1;
    while(k>=0 && ord.length < arr[k].length){
      arr[k+1]= arr[k];
      k--;
    }
    arr[k+1] = ord;
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var a = [];
  for(let i = 0;i<arreglo1.length;i++){
    if(arreglo2.includes(arreglo1[i])){
      a.push(arreglo1[i]);
    }
  }
  return a;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
