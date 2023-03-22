document.getElementById("mainTitle").innerText = "Point and click adventure";

const mainCharacter = document.getElementById("mainCharacter");
const gameScreen = document.getElementById("gameWindow");


gameWindow.onClick = function(){

    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left; //xposition of the element
    var Y = e.clientY - rect.top; //yposition of the element
    mainCharacter.style.left = x + "px";
    mainCharacter.style.top = y + "px";
    //console.log(x);
}