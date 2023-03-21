const string = "Este es un ejemplo de cadena de texto";
const word = "ejemplo";
let index = -1;

console.time('duro');
for (let i = 0; i < string.length - word.length + 1; i++) {
  if (string[i] === word[0]) {
      let wordIndex = i;
      for (let j = 1; j < word.length; j++) {
          if (string[i + j] !== word[j]) {
              wordIndex = -1;
              break;
          }
      }
      if (wordIndex !== -1) {
          index = wordIndex;
          break;
      }
  }
}
console.timeEnd('duro');

console.log(index);