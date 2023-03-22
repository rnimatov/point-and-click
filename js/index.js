document.getElementById("mainTitle").innerText = "Point and click adventure";

console.offsetCharacter = 16;

const mainCharacter = document.getElementById("mainCharacter");
const gameWindow = document.getElementById("gameWindow");
const characterAudio = 

gameWindow.onClick = function(e){

    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left; //xposition of the element
    var Y = e.clientY - rect.top; //yposition of the element
    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";

    console.log(e.target.id);

    switch(e.target.id) {
        case "door1":
            characterAudio.play();
            // sometjhign insert here
            console.log("LLLLLLLLL");
                break;
            case "door2":
                //something insert here
                console.log("yessssssss");
                break;
            default:
            //do somethng when it doesnt work
            console.log("nooooooo");
            break;

    }
    //console.log(x);

    // put in css on main character transition: all 1s ease-in-out; 
}