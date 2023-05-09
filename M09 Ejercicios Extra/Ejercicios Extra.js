/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let array = new Array();
   let i = 0;
   for (let prop in objeto) {
      array[i] = new Array();
      array[i][0] = prop;
      array[i][1] = objeto[prop];
      i++
   };
   return array
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let caracteres = string.split('');
   let objeto = new Object();
   caracteres.forEach(i => {
      if (!objeto.hasOwnProperty(i)) {
         objeto[i] = 1;
      } else {
         objeto[i] += 1;
      }
   });
   return objeto
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   function esMayuscula (letra) {
      return (letra === letra.toUpperCase());
   }

   let mayusculas = new Array();
   let minusculas = new Array();
   let array = string.split('');

   array.forEach(i => {
      if (esMayuscula(i)) mayusculas.push(i);
      else minusculas.push(i);
   });

   let resultado = new Array();
   mayusculas.forEach(i => resultado.push(i));
   minusculas.forEach(i => resultado.push(i));
   return resultado.join('');
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let array = frase.split(' ');
   let arrayInverso = new Array();

   array.forEach(i => {
      arrayInverso.push(i.split('').reverse().join(''))
   });
   return arrayInverso.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let array = numero.toString().split('');
   console.log(array);

   let str1 = '', str2 = '';
   let lng = array.length;

   if (lng % 2 == 0) { //Si es un numero par:
      for (let i = 0; i < lng; i++) {
         if (i + 1 <= lng/2) str1 += array[i];
         else str2 += array[i];
      }
      
   } else { //Si es un numero impar:
      for (let i = 0; i < lng; i++) {
         switch(i){
            case (i < Math.ceil(lng/2)): {
               str1 += array[i];
               break;
            }
            case (i > Math.ceil(lng/2)): {
               str2 += array[i];
               break;
            }
            default: {
               str1 += array[i];
               str2 += array[i];
               break;
      }}}
   }
   str2 = str2.split('').reverse().join('');
   if (str1 == str2) return 'Es capicua'
   else return 'No es capicua'
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let array = string.split('');
   let res = new Array();
   array.forEach(letra => {
      if ((letra !== 'a')&&(letra !== 'b')&&(letra !== 'c')) {
         res.push(letra);
      }
   });
   return res.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let resultado = new Array();
   for (let lng = arrayOfStrings.length -1; lng > 0; lng--) {
      let indiceActual = 0;
      for (let i = 1; i <= lng; i++) {
         if (arrayOfStrings[i].length < arrayOfStrings[indiceActual].length) {
            indiceActual = i;
         }
      }
      resultado.push(arrayOfStrings[indiceActual]);
      arrayOfStrings = arrayOfStrings.filter(e => e !== arrayOfStrings[indiceActual]);
   }
   resultado.push(arrayOfStrings[0]);
   return resultado
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let nuevoArray = new Array();
   array1.forEach(i => {
      if (array2.includes(i)) nuevoArray.push(i);
   });
   return nuevoArray
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
