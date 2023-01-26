/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arreglo = []; 

for (var clave in objeto) {
  var subarray = []; // creamos un nuevo array que contendrá el par clave-valor
  subarray.push(clave); // añadimos la clave al subarray
  subarray.push(objeto[clave]); // añadimos el valor al subarray
  arreglo.push(subarray); // añadimos el subarray al array principal
}

return arreglo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
 var result = {};
   
      for (var i = 0; i < string.length; i++) {
         var letter = string[i];
   
         if (!result[letter]) {
            result[letter] = 1;
         } else {
            result[letter]++;
         }
      }
      var orderedResult = {};
   
      Object.keys(result).sort().forEach(function(key) {
         orderedResult[key] = result[key];
      });
   
      return orderedResult;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
      var capitalLetters = '';
    
      for (var i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
          capitalLetters += string[i];
        }
      }
      for (var j = 0; j < string.length; j++) {
        if (string[j] === string[j].toLowerCase()) {
          capitalLetters += string[j];
        }
      }
    
      return capitalLetters;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
  // Invertimos cada palabra
  var palabras = frase.split(' ');
  var palabrasInvertidas = [];

  palabras.forEach(function(palabra) {
     var palabraInvertida = palabra.split('').reverse().join('');
     palabrasInvertidas.push(palabraInvertida);
  });

  var fraseInvertida = palabrasInvertidas.join(' ');

  return fraseInvertida;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   // Convertir el número a string
   var numeroString = numero.toString();
   
   // Crear un string reverso del número
   var reverso = "";
   for(var i=numeroString.length-1; i>=0; i--) {
     reverso += numeroString.charAt(i);
   }
   
   // Comparar el número con su reverso
   if(numeroString === reverso) {
     return "Es capicua";
   } else {
     return "No es capicua";
   }
 }

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
      let newString = '';
      for (let i = 0; i < string.length; i++) {
          if (string[i] !== 'a' && string[i] !== 'b' && string[i] !== 'c') {
              newString += string[i];
          }
      }
      return newString;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
      return arrayOfStrings.sort((a, b) => a.length - b.length);
    }

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
      var interseccion = [];
      for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; j++) {
          if (array1[i] === array2[j] && !interseccion.includes(array1[i])) {
            interseccion.push(array1[i]);
          }
        }
      }
      return interseccion;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
