background(89, 216, 255);

var drawFish = function(centerX, centerY, bodyLength, bodyHeight, bodyColor){
    noStroke();
    fill(bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    var tailWidth = bodyLength/4;
    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY,
             centerX-bodyLength/2-tailWidth, centerY-tailHeight,
             centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};

var drawSeaweed = function(seaweedX){
    noStroke();
    fill(0, random(50, 255), 41);
    var seaweedY = random(300,350);
    var seaweedW = random(10, 30);
    var seaweedH = random(20, 50);
    rect(seaweedX, seaweedY, seaweedW, seaweedH); 
};

var drawPebble = function(pebbleX){
    noStroke();
    fill(52, 52, 64);
    var pebbleY = random(300,350);
    var pebbleW = random(5, 20);
    ellipse(pebbleX, pebbleY, pebbleW, pebbleW); 
};

// draw = function() {
//     drawFish(random(0, 300), random(0, 400), random(50, 200), random(50, 200), color(random(0, 225), random(0,255), random(0,2250)));
//     drawSeaweed(random(0, 300));  
//     drawPebble(random(0, 400));
// };

mouseClicked = function(){
    drawFish(mouseX, mouseY, random(50, 200), random(50, 200), color(random(0, 225), random(0,255), random(0,2250)));
};

mouseMoved = function(){
    // drawFish(mouseX, mouseY, random(50, 200), random(50, 200), color(random(0, 225), random(0,255), random(0,2250)));
    drawSeaweed(mouseX, mouseY);
    drawPebble(random(0, 400));
};





