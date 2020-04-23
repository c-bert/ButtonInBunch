'use strict';
//since you can't import jQuery

function indexMessage(){
    let message = document.getElementById('message').innerHTML;
    //let message = messageElement.string.Empty;

    switch(message) {
    case document.getElementById('b1').onclick :
        message = "Button 1";
        alert("Hey I'm button 1");
        console.log("Button 1");
        break;
    case document.getElementById('b2'):
        console.log("Button 2");
        break;
    case document.getElementById('b3'):
        console.log("Button 3");
        break;
    case document.getElementById('b4'):
        console.log("Button 4");
        break;
    case document.getElementById('b5'):
        console.log("Button 5");
        break;
    case document.getElementById('b6'):
        console.log("Button 6");
        break;
    case document.getElementById('b7'):
        console.log("Button 7");
        break;
    default:
        message = "An error has occured."
        console.log("An error has occured.");
}
}

// document.getElementById('b1').onclick = function showMessageContent() {
//    console.log("Button 1")
// }

indexMessage();
