const arrayMultiples = function(number, length){
  const numbersArray = []
  for(let i = 1; i <= length; i++){
    numbersArray.push(number * i); 
  }
  console.log(numbersArray);
}

arrayMultiples(2, 10);
arrayMultiples(17, 6);