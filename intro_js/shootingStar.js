var xPos = 105;
var yPos = 265;
var xPos2 = 400;
var yPos2 = 350;

draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    ellipse(xPos2, yPos2, 10, 10);
    
    fill(245, 237, 237);
    ellipse(50, 50, 10, 10);
    ellipse(100, 100, 10, 10);
    ellipse(150, 50, 10, 10);
    ellipse(200, 50, 10, 10);
    ellipse(250, 150, 10, 10);
    ellipse(300, 125, 10, 10);
    ellipse(350, 75, 10, 10);
    
    fill(0, 0, 0);
    rect(0, 250, 100, 50);
    
    xPos += 5;
    yPos -= 1;
    xPos2 -= 10;
    yPos2 -= 5;
};



