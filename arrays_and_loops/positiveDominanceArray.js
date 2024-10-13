const positiveDom = function(array){
  let countPositive = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i] * 1 > 0){
      countPositive++;
    }
  }
  if((countPositive / array.length) > 0.5000){
    console.log("true");
  }else{
    console.log("false");
  }
}

positiveDom([-1, -3, -5, 4, 6767]);
positiveDom([8, 28, 505, -487, -6767]);
positiveDom([10, -367, 56, -64, -22, 18]);
positiveDom([45678, 943254, 8093854, 343256878, -434287, -67321367]);