background(219, 255, 255);

//roof
fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

//house
fill(255, 255, 255);
rect(60, 150, 280, 207);

//log cabin
for(var x = 60; x < 330; x+=10){
    for(var y = 130; y < 300; y += 40){ 
        image(getImage("cute/WoodBlock"), x, y, 20, 70);
    }
}

//door
fill(120, 80, 19);
rect(180, 280, 40, 77);

//windows
for(var x=80; x <310; x+=40){
    for(var y = 175; y < 240; y += 40){
        fill(255, 255, 255);
        rect(x, y, 30, 30);
    }
}

//grass
for(var x=40; x < 350; x += 40){
    image(getImage("cute/GrassBlock"), x, y+80, 40, 60);
}

//bushes
for(var x=30; x < 350; x += 50){
    if(x%20 === 0){
        image(getImage("cute/TreeShort"), x, y+90, 40, 60);
    }
}

