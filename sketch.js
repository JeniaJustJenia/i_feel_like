
var lexicon;
function setup() {
  createCanvas(windowWidth, windowHeight);
  lexicon = new RiTa.randomWord();
  background(255, 50, 105);
  fill(255);
  noStroke();
  textSize(42);
  textAlign(CENTER, CENTER);
  text("Click to know", width/2, height/2);
}
function draw() {
}
function mousePressed() {
  background(176, 193, 194);
  textAlign(LEFT, TOP);
  var output = "I feel like " +
    RiTa.randomWord(["jj"]) + " " + 
    RiTa.randomWord(["nn"]) + ", " +
    RiTa.randomWord(["vbg"]) + " " +
    RiTa.randomWord(["nns"]) + 
    " out of the " +
    RiTa.randomWord(["jj"]) + " " +
    RiTa.randomWord(["nn"]);
  text(output, 40, 40, width-400, height-20);
}
function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas('haiku', 'png');
}