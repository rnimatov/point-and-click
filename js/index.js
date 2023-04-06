document.getElementById("mainTitle").innerText = "Point and click adventure";

const offsetCharacter = 8;

const sec = 1000;

const mainCharacter = document.getElementById("mainCharacter");
const gameWindow = document.getElementById("gameWindow");
const characterAudio = document.getElementById("characterAudio");
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");

const counterSpeech = document.getElementById("counterSpeech");
const counterAudio = document.getElementById("counterAudio");
const counterCharacter = document.getElementById("counterCharacter");

gameWindow.onclick = function (e) {
    if (mainCharacterSpeech.style.opacity == 0 && counterSpeech.style.opacity == 0) {
        var rect = gameWindow.getBoundingClientRect();
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        mainCharacter.style.left = x - offsetCharacter + "px";
        mainCharacter.style.top = y - offsetCharacter + "px";

        switch (e.target.id) {
            case "door1":
                //something insert here
                showSpeech(mainCharacterSpeech, characterAudio, "this is door one.<br> And it's locked...");
                break;
            case "door2":
                //something insert here
                showSpeech(mainCharacterSpeech, characterAudio, "noboby is home...<br> Come back later..");
                break;
            case "statue":
                //something insert here
                showSpeech(mainCharacterSpeech, characterAudio, "What a boring house...");
                setTimeout(function () { counterCharacter.style.opacity = 1; }, 4 * sec);
                setTimeout(showSpeech, 4 * sec, counterSpeech, counterAudio, "Nah mate..");
                setTimeout(showSpeech, 8 * sec, mainCharacterSpeech, characterAudio, "Didn't know someone was home.");
                break;
            default:
                // do something when it doesn't have a case
                hideSpeech();
                break;
        }
    }
}

function showSpeech(targetBubble, targetAudio, dialogue) {
    //trigger speech bubble and audio
    targetBubble.style.opacity = 1;
    targetBubble.innerHTML = dialogue;
    targetAudio.currentTime = 0;
    targetAudio.play();
    //stop after 4 seconds the dialogue bubble and audio
    setTimeout(hideSpeech, 4 * sec, targetBubble, targetAudio);
}

function hideSpeech(targetBubble, targetAudio) {
    targetBubble.style.opacity = 0;
    targetBubble.innerHTML = "...";
    targetAudio.pause();
}

function getItem(itemName, itemId) {
    inventory.push(itemName);
    console.log(itemName);
}

function checkItem(item) {
    return inventory.includes(item);
}

function showItem(itemName, itemId) {

    let listItem = document.createElement("li");

    listItem.id = itemId;

    listItem.appendChild(document.createTextNode(itemName));

    inventoryList.appendChild(listItem);
}

function removeItem(itemName, itemId) {
    //remove item in Array
    inventory = inventory.filter(function (newInventory) {
        return newInventory !== itemName;
    });

    //removes list element in HTML
    document.getElementById(itemId).remove();
}

getItem("bread", "bread");
getItem("cold milk", "coldMilk");
getItem("eggs", "eggs");
removeItem("cold milk", "coldMilk");



