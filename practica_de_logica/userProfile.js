const userInfo = {
  name: null,
  age: null,
  favoriteMovies: []
}

const userProfile = function(){
  Username = prompt("Inserte su username: ");
  userInfo.name = Username;
  userAge = Number(prompt("Inserte su edad: "));
  userInfo.age = userAge; 
  movies =  prompt("¿Cualés son tus películas favoritas? (separalas por una coma y un espacio): ");
  moviesArray = movies.split(",");
  userInfo.favoriteMovies = moviesArray;
  console.log("Hola " + userInfo.name + " tu edad es " + userInfo.age + " y tus peliculas favoritas son: " + userInfo.favoriteMovies);
}

userProfile();