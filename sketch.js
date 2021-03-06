// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// An array of lines from a text file
var lines;
// The Markov Generator object
var generator;


// $('#div1').stellar();

// $('#div2').stellar();

// $('#div3').stellar();


// Preload the seed data
function preload() {
  lines = loadStrings('data/church.txt');
}



function setup() {
  noCanvas();
  // The Markov Generator
  // First argument is N-gram length, second argument is max length of generated text
  generator = new MarkovGenerator(5, 55);
  // Feed all the lines from the text file into the generator
  for (var i = 0; i < lines.length; i++) {
    generator.feed(lines[i]);
  }
  // Set up a button
  var button = getElement('button');
  button.mousePressed(generate);
  noCanvas();
}

function generate() {
  // Display the generated text
  var output = getElement('name');
  var text = generator.generate();
  output.html(text + " Church");

  var output2 = getElement('prompt');
  output2.html("Scroll Down!");
}
