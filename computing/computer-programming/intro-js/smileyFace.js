//object constructor
var SmileyFace = function(centerX, centerY){
    this.centerX = centerX;
    this.centerY = centerY;
};

//SmileyFace draw method
SmileyFace.prototype.draw = function() {
    fill(168, 124, 70);
    ellipse(this.centerX, this.centerY, 150, 150);
    fill(0, 0, 0);
    ellipse(this.centerX-30, this.centerY-30, 20, 20); 
    ellipse(this.centerX+30, this.centerY-30, 20, 20); 
    noFill(); 
    strokeWeight(3);
    arc(this.centerX, this.centerY+10, 64, 40, 0, 180);
};

//SmileyFace speak method
SmileyFace.prototype.speak = function(message) {
    text(message, this.centerX + 80, this.centerY);
};

//calling instance of SmileyFace object
var faceObj = new SmileyFace(100, 100);
faceObj.draw();
faceObj.speak("hello, I am smiling!");

var secondFace = new SmileyFace(150, 250);
secondFace.draw();
secondFace.speak("I am happy!");

