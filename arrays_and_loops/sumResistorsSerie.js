const sumResistorsSerie = function(array){
  let absArray = array.map(Math.abs);
  const sum = absArray.reduce((acc, num) => acc + num, 0);
  console.log(sum)
}

sumResistorsSerie([-1,5,6,3]);
sumResistorsSerie([14, 3.5, 6]);
sumResistorsSerie([8, 15, 100]);