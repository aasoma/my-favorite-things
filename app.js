var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var response1 = document.getElementById("response1")
var response2 = document.getElementById("response2")
var response3 = document.getElementById("response3")

var favoriteDesserts = ["Ice Cream", "Cookie", "Cake"];
var favoriteFoods = ["Steak", "Fried Rice", "Spaghetti"]
var favoriteGames = ["Overwatch", "Fortnite", "PUBG", "R6"]

button1.addEventListener("click", function(){
response1.innerHTML = "Look in the console"
for(i=0; i<favoriteDesserts.length; i++){
    console.log(favoriteDesserts[i]);
};
});

button2.addEventListener("click", function(){
    response2.innerHTML = "Look in the console"
    for(i=0; i<favoriteFoods.length; i++){
        console.log(favoriteFoods[i]);
    };
    });

    button3.addEventListener("click", function(){
        response3.innerHTML = "Look in the console"
        for(i=0; i<favoriteDesserts.length; i++){
            console.log(favoriteGames[i]);
        };
        });