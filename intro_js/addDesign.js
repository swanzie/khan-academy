
draw = function() {
    
    var y1 = 200;
    var y2 = 190;
    var faceX = mouseX;
    var faceY = mouseY;

    fill(255, 0, 0);
    textSize(30);
    text("TAMAGOTCHI", 10, 30);
    fill(29, 111, 179);
    textSize(20);
    text("Take care of this little creature,", 5, 75);
    fill(199, 59, 199);
    textSize(25);
    text("Watch it grow up!", 5, 100);

    noStroke();
    fill(135, 247, 107);
    ellipse(50, 200, 60, 100);
    
    ellipse(150, 200, 60, 100);
    stroke(0, 0, 0);
    strokeWeight(2);
    line(120, y1, 130, y2);
    line(130, y2, 140, y1);
    line(140, y1, 150, y2);
    line(150, y2, 160, y1); 
    line(160, y1, 170, y2);
    line(170, y2, 180, y1);
    
    fill(143, 0, 141);
    noStroke();
    ellipse(faceX, faceY, 60, 60);
    fill(255, 255, 255);
    ellipse(faceX-15, faceY-10, 7, 7);
    ellipse(faceX+15, faceY-10, 7, 7);   
    
};




