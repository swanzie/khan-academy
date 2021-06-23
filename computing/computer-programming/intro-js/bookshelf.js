var books = [
    {title: "1984",
    author: "George Orwell",
    stars: 3,
    color: {r: 250, g: 150, b: 150},
    recommend: true
    },
    {title: "Harry Potter",
    author: "J.K. Rowling",
    stars: 5,
    color: {r: 191, g: 235, b: 255},
    recommend: true
    }, 
    {title: "The Hobbit",
    author: "J.R.R. Tolkien",
    stars: 4,
    color: {r: 224, g: 171, b: 255},
    recommend: false
    },
    {title: "Atonement",
    author: "Ian McEwan",
    stars: 3,
    color: {r: 140, g: 255, b: 199},
    recommend: false
    },
    {title: "Autumn",
    author: "Ali Smith",
    stars: 4,
    color: {r: 255, g: 183, b: 0},
    recommend: true
    }
];

// draw two shelves
fill(173, 117, 33);
rect(0, 120, width, 10);
rect(0, 240, width, 10);

// draw multiple books
for (var j = 0; j < books.length; j++){
    // var rectX = 10 + 110*j;
    var bookNum = j % 3;
    var shelfNum = j / 3;
    shelfNum = Math.floor(shelfNum);
    fill(books[j].color.r, books[j].color.g, books[j].color.b);
    if (shelfNum === 0){
        var rectY = 20;
        // var titleY = 29;
        // var authorY
    }
    else{
        var rectY = 140;}
    rect(10 + 110*bookNum, rectY, 100, 100);
    fill(0, 0, 0);
    text(books[j].title, 15 + 110*bookNum, rectY+9, bookNum*70 + 70, 100);
    text("by: " + books[j].author, 15 + 110*bookNum, rectY+30, bookNum*70 + 70, 100);
    for (var i = 0; i < books[j].stars; i++) {
        image(getImage("cute/Star"), 13 + i*20 + 110*bookNum, rectY + 70, 20, 30);
    }
    if (books[j].recommend){
        image(getImage("cute/Heart"), 110*bookNum + 85, rectY, 20, 30);
    }
}