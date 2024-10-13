const palindrome = function(sentence){
  let sentenceNormalized = sentence.toLowerCase();
  let sentenceWithoutSpaces = sentenceNormalized.replaceAll(" ", "");
  // console.log(sentenceWithoutSpaces);
  const sentenceArray = sentenceWithoutSpaces.split("");
  reverseArray = sentenceArray.reverse();
  // console.log(reverseArray);
  reverseSentence = reverseArray.join("");
  // console.log(reverseSentence);
  if(sentenceWithoutSpaces === reverseSentence){
    console.log("El texto es un palíndromo");
  }else{
    console.log("El texto no es un palídromo");
  }
}


sentence = String(prompt("Inserte el texto para comprobar si es un palíndromo (NO colocar signos de puntuacíon o acentos): "));

// tests
// palindrome("Anita lava la tina");
// palindrome("Roma ni se conoce sin oro, ni se conoce sin amor");
// palindrome("Ana lleva al oso la avellana");
// palindrome("Ama gaseoso oso esa gama");

