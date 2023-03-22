document.getElementById("mainTitle").innerText = "Point and click adventure";

console.offsetCharacter = 16;

const mainCharacter = document.getElementById("mainCharacter");
const gameScreen = document.getElementById("gameWindow");


gameWindow.onClick = function(e){

    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left; //xposition of the element
    var Y = e.clientY - rect.top; //yposition of the element
    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";
    //console.log(x);

    // put in css on main character transition: all 1s ease-in-out; 
}