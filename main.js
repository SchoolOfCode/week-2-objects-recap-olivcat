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

let desiredPleasantry = "ciao!";

let bensPhrases = {
  greeting: "Well hello there!",
  farewell: "See you in another life, brother",
  smallTalk: "Warm today, isn't it...",
};
console.log(bensPhrases["smallTalk"]);
console.log([desiredPleasantry]);

//Use bracket notation and the smallTalk property to console.log Ben's smalltalk phrase.
// alert(user["likes birds"]);
// Use bracket notation and the desiredPleasantry variable to console.log Ben's greeting phrase.
// Change what is console logged by changing the value of desiredPleasantry.

let me = {
  firstName: "Olivia",
  lastName: "Butcher",
  isBootcamper: true,
};

console.log("Olivia is a bootcamper");

//Below your object, reassign the property of isBootcamper using the assignment operator. Make it true!

//let person = { name: "Alice", age: 25 };
//person.age = 26; // Reassigning the 'age' property
//console.log(person.age); // Output: 26

let communication = {
  success: true,
  payload: {
    message: {
      text: "Please send biscuits!",
      priority: "URGENT",
    },
  },
};
let messageText = communication.payload.message.text;

console.log(messageText);

let priority = "URGENT";

// Using dot notation, read the text from the communication object and store it in a variable.
//  If the priority is urgent, then console.log the variable, else do nothing.
