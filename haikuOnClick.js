//Tracery example by Allison Parrish
//But we'll also create a box to hold our lines as they move
particles = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(50);
}

function draw() {
//This overlay will always take us back to black - try changing it
//The alpha of 3 controls the speed of the fade - try raising and lowering it
	//This moves the particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
	background(207, 201, 214, 50);
}

//This draws the word with each mouse click
function mouseClicked() {
	var grammar = tracery.createGrammar(grammarSource); //set up tracery library
	grammar.addModifiers(tracery.baseEngModifiers); //set up English grammer properly (capitals and a/an)
	var output = grammar.flatten("#origin#"); //creates sentence from grammar source
	let p = new Particle(mouseX,mouseY,output);
    particles.push(p);

}

// grammerSource is generated using:
// http://tracery.io/ 
// See the tutorial here: http://www.crystalcodepalace.com/traceryTut.html
var grammarSource = {
	"line1": [
		"#1sylverb# #2sylnoun# and #1sylnoun#",
		"yet #2sylnoun# #2sylverb#"
	],
	"line2": [
		"#2sylnoun# #1sylverb#, #2sylnoun# #2sylverb#",
		"#1sylverb# #2sylnoun# thus #2sylverb# #1sylnoun#"
	],
	"origin": [
		"#line1# \n#line2# \n#line3#"
	],
	"1sylnoun": [
		"rains",
		"snow",
		"calls",
		"signs",
		"loves",
		"joys",
		"suns",
		"moons",
		"trees",
		"birds",
		"winds",
		"fires",
		"rocks",
		"seas",
		"rains",
		"life",
		"hearts",
		"time",
		"minds",
		"souls",
		"hope"
	],
	"2sylnoun": [
		"showers",
		"planets",
		"gardens",
		"shadows",
		"moonlight",
		"raindrops",
		"twilight",
		"whispers",
		"meadows",
		"songbirds",
		"rainbows",
		"starlights",
		"sunrises",
		"oceans",
		"willows",
		"dewdrops",
		"echoes"
	],
	"2sylverb": [
		"into",
		"whisper",
		"wander",
		"flutter",
		"dazzle",
		"mingle",
		"glisten",
		"twinkle",
		"embrace",
		"tumble",
		"blossom",
		"glitter",
		"stumble",
		"enchant",
		"glimmer",
		"entwine",
		"quiver",
		"echo",
		"wishes",
		"dances",
		"rises"
	],
	"1sylverb": [
		"be",
		"call",
		"love",
		"join",
		"weep",
		"melt",
		"shine",
		"spark",
		"fall",
		"pause",
		"drift",
		"float",
		"soar",
		"glow",
		"sway",
		"drift"
	],
	"line3": [
		"#2sylnoun# #1sylverb# gently",
		"#2sylverb# #1sylnoun#, they #1sylverb#"
	]
};

class Particle {
  constructor(x,y,text) {
		//This sets the x value to mouse position
    this.x = x;
		//This keeps the y at mouse position
    this.y = y;
		//This sets the range of x movement - try limiting it to + or -
    this.vx = random(-1, 1);
		//This sets the range of y movement - try limiting it to + or -
    this.vy = random(-1, 1);
		//This sets the text size to be consistent
		this.size = random(15,50);
		//This sets the current line to the particle
		this.text = text;
  }

  finished() {
		//Change this to 255 if you reverse the fade
    return (this.width < 0 || this.width > windowWidth);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
  }

  show() {
    noStroke();
		textSize(this.size);
		//Try any web safe font
		textFont("Courier");
		//This centers the text on the click
		textAlign(LEFT, LEFT);
		//This sets the fill to a static color - can you make it random?
		//You can also add the outline
    //stroke(255);
		//This keeps R and G values at 255 to allow for yellows
		//Try changing it!
    fill(54, 112, 150);
		//This positions the text
    text(this.text, this.x, this.y);
  }
}