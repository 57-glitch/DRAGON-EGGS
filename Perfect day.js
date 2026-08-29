// Go from the Perfect Day page to the Adventure page
function goToAdventure() {
    window.location.href = "adventure.html";
}


// Adventure events
let eventNumber = 1;

function nextEvent() {

    if (eventNumber == 1) {
        document.getElementById("title").innerHTML = "The Dragon in the Forest!";
        document.getElementById("story").innerHTML =
            "One day you wake to find yourself in a eerie, luscious forest. All of a sudden, two dragons appear in front of you!";
        document.body.style.backgroundImage = "url('dragon.jpeg')";
        document.getElementById("title").style.color = "red";
        document.getElementById("story").style.color = "lightgoldenyellow";
        document.querySelector("button").innerHTML = "Fight";
        eventNumber = 2;
    }

    else if (eventNumber == 2) {        document.getElementById("title").innerHTML = "Dragon eggs and berries !";
        document.getElementById("story").innerHTML =
            " after that EPIC fight you find some purple, slimey dragons eggs left in their nest !";
        document.body.style.backgroundImage = "url('Purple eggs.png')";
       document.getElementById("title").style.color = "red";
        document.getElementById("story").style.color = "light pink";
        document.querySelector("button").innerHTML = "Eat";
        eventNumber = 3;
    }
    else if (eventNumber == 3) {
        document.getElementById("title").innerHTML = "Waterfall !";
        document.getElementById("story").innerHTML =
            "After that questionable yet hearty breakfast, you roam through the forest in search of something to do. You encounter many strange animals and finally you come accross a splendid WATERFALL sure had a long day ! I think we earned a fun bath in that waterfall !";
            document.getElementById("title").style.color = "white";
        document.getElementById("story").style.color = "lightblue";
         document.body.style.backgroundImage = "url('Waterfall.jpeg')";
            document.querySelector("button").innerHTML = "Jump!";
        eventNumber = 4;
    }

    else if (eventNumber == 4) {
        document.getElementById("title").innerHTML = "Home !";
        document.getElementById("story").innerHTML = 
            "I guess fate had everything planned ! (YAWNNNNNNN)(groan) I think it's time we go in and finally sleep again.";
        document.body.style.backgroundImage = "url('cottage.jpeg')";
        document.getElementById("title").style.color = "brown";
        document.getElementById("story").style.color = "white";
        
            document.querySelector("button").innerHTML = "Sleep";
    }
}
