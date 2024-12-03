// My cat is black, his name is Tony, and he loves cuddles.
const myCat = {
  color: "black",
  name: "Tony",
  lovesCuddles: true,
};

// My house has 2 stories, no parking, 2 bedrooms, a garden and an energy efficiency rating of D.

const myHouse = {
  floors: 2,
  parking: true,
  bedrooms: 2,
  garden: true,
  energyEffciencyRating: "D",
};

// My car is red, has 4 wheels, power steering, and 2 seats, and does 20 miles per gallon.

const myCar = {
  color: "red",
  numberOfWheels: 4,
  powerSteering: true,
  numberOfSeats: 2,
  MPG: 20,
};

// My favourite film's title is The Dark Knight, it was released in 2008, and the lead actor is Christian Bale.

const myFavouriteFilm = {
  title: "The Dark Knight",
  releaseDate: "2008",
  leadActor: "Christian Bale",
};

let person = {
  name: "Ben",
  likesChocolate: false,
};

if (person.likesChocolate === true) {
  console.log("Ben loves Chocolate");
} else if (person.likesChocolate === false) {
  console.log("Ben hates Chocolate");
}

//console.log("Does Ben like chocolate?");
//console.log(person.likesChocolate);

// Write an if statement that will console.log "Ben loves chocolate"- if likesChocolate has a value of true
// else console.log "Ben hates chocolate"
// The condition for the if, and the name Ben should both be read from the object using dot notation.
