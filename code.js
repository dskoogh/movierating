import {movieData} from "./data";

//let movieData = require("./data");

var chooseFilm = 0;

function renderMovie(movie, film){
    document.querySelector("#image img").setAttribute("src", movie[film].image);
    document.getElementById("movietitle").innerText = movie[film].title;
    document.getElementById("prop").innerText = movie[film].description;
            
    document.querySelector("#actrs").innerHTML = "";
    for (let i=0; i<movie[film].actors.length; i++){
        let node = document.createElement("li");
        node.innerText = movie[film].actors[i];
        document.querySelector("#actrs").appendChild(node);
    }
};

function changeStarRating(grade) {
    // Create variables
    $("#stars span").removeClass("filledStars");

    /*var s1 = document.getElementById("star1");
    var s2 = document.getElementById("star2");
    var s3 = document.getElementById("star3");
    var s4 = document.getElementById("star4");
    var s5 = document.getElementById("star5");

    // Remove filled stars
    s1.classList.remove("filledStars");
    s2.classList.remove("filledStars");
    s3.classList.remove("filledStars");
    s4.classList.remove("filledStars");
    s5.classList.remove("filledStars");*/
    
    switch(grade) {
        case 5: $("#star5").addClass("filledStars");
        case 4: $("#star4").addClass("filledStars");
        case 3: $("#star3").addClass("filledStars");
        case 2: $("#star2").addClass("filledStars");
        case 1: $("#star1").addClass("filledStars");

        /*case 5: s5.classList.add("filledStars");
        case 4: s4.classList.add("filledStars");
        case 3: s3.classList.add("filledStars");
        case 2: s2.classList.add("filledStars");
        case 1: s1.classList.add("filledStars");*/
        return;
    }
};

function hoverStarRating(grade) {
    // Create variables
    var s1 = document.getElementById("star1");
    var s2 = document.getElementById("star2");
    var s3 = document.getElementById("star3");
    var s4 = document.getElementById("star4");
    var s5 = document.getElementById("star5");

    // Remove filled stars
    s1.classList.remove("hoverStar");
    s2.classList.remove("hoverStar");
    s3.classList.remove("hoverStar");
    s4.classList.remove("hoverStar");
    s5.classList.remove("hoverStar");
    
    switch(grade) {
        case 5: s5.classList.add("hoverStar");
        case 4: s4.classList.add("hoverStar");
        case 3: s3.classList.add("hoverStar");
        case 2: s2.classList.add("hoverStar");
        case 1: s1.classList.add("hoverStar");
        return;
    }
};

function createMovieButtons(movies) {
    var numOfMov = movies.length;
    var buttonList = "";
    for (let i=0; i<numOfMov; i++) {
        buttonList += "<span id=\"f" + i + "\">Film " + (i+1) + "</span>";
    }
    document.getElementById("filmSelector").innerHTML = buttonList;
};

document.querySelector("#stars")
    .addEventListener("click", function(e) {
        let star = parseInt(e.target.id.substring(4));
        if (!isNaN(star)) {
            changeStarRating(star);
        } else return;
    }
);

document.querySelector("#stars")
    .addEventListener("mouseover", function(e){
    let star = parseInt(e.target.id.substring(4));
    //console.log(star);
    hoverStarRating(star);
});

document.querySelector("#stars")
    .addEventListener("mouseout", function(){
    var s1 = document.getElementById("star1").classList.remove("hoverStar");
    var s2 = document.getElementById("star2").classList.remove("hoverStar");
    var s3 = document.getElementById("star3").classList.remove("hoverStar");
    var s4 = document.getElementById("star4").classList.remove("hoverStar");
    var s5 = document.getElementById("star5").classList.remove("hoverStar");
});

document.querySelector("#filmSelector")
    .addEventListener("click", function(e){
        let button = parseInt(e.target.id.substring(1));
        if (!isNaN(button)) {
            renderMovie(movieData, button);
        }
    }
);

createMovieButtons(movieData);

renderMovie(movieData, chooseFilm);