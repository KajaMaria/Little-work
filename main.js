
// console.log("hoolaa");

// Function to create and return an array of image sources
function generateImageSources() {

  // Create empty array
  var imageSources = [];

  // for loop to run 6 times
  for (var imageCounter = 1; imageCounter <=6; imageCounter++) {
    // Create new image source using string and imageCounter as number
    var imageSource = "images/cards/plant-" + imageCounter + ".jpg";

    // Push to imageSources array twice (can do this using for loop too!)
    imageSources.push(imageSource);
    imageSources.push(imageSource);
  }

  // Return the full array
  return imageSources;
}


// Function for shuffling cards
function shuffleCards(array) {

  /*
  Uses the Fisher-Yates (aka Knuth) Shuffle.
  https://blog.codinghorror.com/the-danger-of-naivete/
  */

  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


// Function to output cards to screen
function cardsToScreen(cardArray) {

  // Create variable for HTML output, open <ul> element
  var outputHTML = "<ul>";

  // Loop through the array to create <li> elements
  for(outputCounter = 0; outputCounter < cardArray.length; outputCounter++) {
    outputHTML += "<li>";
    // Add images to the <li> items using our array of image sources
    outputHTML += "<img src='" + cardArray[outputCounter] + "'/>";
    outputHTML += "</li>";
  }

  // Close the <ul>
  outputHTML += "</ul>";

  // Output HTML to the document
  document.getElementById("app").innerHTML = outputHTML;
}

function checkCards(){

  var guesses =[];

  var listItems = document.getElementsByTagName("li");
  console.log("listItems", listItems);

  for( var i = 0; i < listItems.length; i++) {
    var listItem = listItems[i];
    // console.log("listItems:", listItems);
    listItem.onclick = function(event) {
      // console.log("hole");
      // console.log("event:", event);
      // console.log("event.target:", event.target);

      var currentCard = event.target;

      guesses.push(currentCard);
      console.log("guesses:", guesses);
      currentCard.classList.add("clicked");

      if (guesses.length ===2) {

        if(guesses[0].src === guesses[1].src) {
          guesses[0].classList.add("correct-guess");
          guesses[0].classList.add("correct-guess");
        }

      guesses[0].classList.toggle("clicked");
      guesses[1].classList.toggle("clicked");

      guesses = [];
      }
    }
  }
}


// Contains all of our code for running game
function loadGame() {

  // Generate the image sources
  var cards = generateImageSources();

  // Create new array of shuffled cards using shuffleCards() function
  var shuffledCards = shuffleCards(cards);

  // Print shuffled array to screen
  cardsToScreen(shuffledCards);

  //set
  checkCards();
}

// Kick off the game with function call
loadGame();
