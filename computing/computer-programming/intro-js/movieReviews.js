var movies = [
    {
        title: "Puff the Magic Dragon",
        review: "Best movie ever!!"
    },
    {
        title: "Godzilla",
        review: "Scary!!"
    },
    {
        title: "Harry Potter",
        review: "Wizards are so cool!"
    }
];

for (var i = 0; i < movies.length; i++){
    fill(84, 140, 209);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(movies[i].title, 200, i*50+50);
    textSize(15);
    text(movies[i].review, 200, i*50+75);
}
