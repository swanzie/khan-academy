var bodyX = 200;
var bodyY = bodyX*11/10;
var bodyW = 118;
var bodyH = 2*bodyW; 
var faceW = bodyW*1/2;
var faceH = bodyY*1/3;
var eyeSize = faceW/8;
var tailY3 = bodyY+15/22*bodyY;

draw = function() {
    background(0, 217, 255);
    noStroke();
    fill(22, 173, 88);
    ellipse(bodyX-1/2*bodyW, bodyY-1/4*bodyH, bodyX/6, bodyY/6); //leg
    ellipse(bodyX+1/2*bodyW, bodyY-1/4*bodyH, bodyX/6, bodyY/6); //leg
    ellipse(bodyX-1/2*bodyW, bodyY+1/4*bodyH, bodyX/6, bodyY/6); //leg
    ellipse(bodyX+1/2*bodyW, bodyY+1/4*bodyH, bodyX/6, bodyY/6); //leg
    
    fill(13, 181, 69);
    triangle(bodyX-bodyX/20, bodyY+1/2*bodyY, bodyX+bodyX/20, bodyY+1/2*bodyY, bodyX, tailY3); //tail
    fill(31, 105, 57);
    ellipse(bodyX, bodyY, bodyW, bodyH); // body
    ellipse(bodyX, bodyY-bodyY*5/8, faceW, faceH); // face
    
    fill(219, 183, 37);
    arc(bodyX*3/4, bodyY, bodyX, bodyY/2, 1, 4);
    arc(bodyX*3/4, bodyY+bodyY/10, bodyX, bodyY/2, 1, 4);
    arc(bodyX*3/4, bodyY-bodyY/10, bodyX, bodyY/2, 1, 4);  
    arc(bodyX*3/4, bodyY+bodyY*2/10, bodyX, bodyY/2, 1, 4);
    arc(bodyX*3/4, bodyY-bodyY*2/10, bodyX, bodyY/2, 1, 4);
    arc(bodyX*3/4, bodyY+bodyY*3/10, bodyX*4/5, bodyY/2, 1, 4);
    arc(bodyX*3/4, bodyY-bodyY*3/10, bodyX*4/5, bodyY/2, 1, 4);
    arc(bodyX*3/4, bodyY+bodyY*4/10, bodyX*4/5, bodyY/2, 1, 4);
    arc(bodyX*3/4, bodyY-bodyY*4/10, bodyX*4/5, bodyY/2, 1, 4);
    
    fill(0, 0, 0);
    ellipse(bodyX-bodyX/15, bodyY-bodyH/2-faceH*1/2, eyeSize, eyeSize); //eye
    ellipse(bodyX+bodyX/15, bodyY-bodyH/2-faceH*1/2, eyeSize, eyeSize); //eye    
    
    eyeSize += 5;
    tailY3 += 1;
    
};



