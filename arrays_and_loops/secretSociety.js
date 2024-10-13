const secretSociety = function(array){
  const society = array.map(name => name[0]).sort().join("");
  console.log(society);
}

secretSociety(["Esperanza", "Franco", "Nia"]);
secretSociety(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']);
secretSociety(['Harry', 'Ron', 'Hermione']);
