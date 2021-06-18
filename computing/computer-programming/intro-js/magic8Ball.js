fill(0, 0, 0);
ellipse(200, 200, 375, 375);


var answer = floor(random(1, 5));
if (answer === 1) {
    fill(60, 0, 255);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    textSize(15);
    text("IT WILL", 176, 200);
    text("HAPPEN", 165, 229); 
}
else if (answer === 2){
    fill(255, 0, 0);
    ellipse(200, 200, 125, 125);
    fill(255, 255, 255);
    textSize(20);
    text("ASK", 176, 185);
    text("AGAIN", 175, 220); 
}
else if (answer === 3){
    fill(51, 255, 0);
    rect(150, 170, 100, 100);
    fill(0, 0, 0);
    textSize(12);
    text("IT IS", 180, 200);
    text("UNLIKELY", 170, 229); 
}
else if (answer === 4){
    fill(255, 170, 0);
    ellipse(200, 200, 150, 75);
    fill(255, 255, 255);
    textSize(15);
    text("MAYBE YES", 162, 190);
    text("MAYBE NO", 159, 220); 
}

