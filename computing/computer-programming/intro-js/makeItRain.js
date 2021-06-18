var xPositions = [200];
var yPositions = [0];
var r = [0];

draw = function() {
    background(204, 247, 255);

    noStroke();


    for (var i = 0; i < xPositions.length; i++) {
        fill(r[i], 200, 255);   
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5;
        if (yPositions[i] > 400){
            yPositions[i] = 0;
        }
    }
    
    if(mouseIsPressed){
        xPositions.push(mouseX);
        yPositions.push(mouseY);
        r.push(mouseY);
    }

};