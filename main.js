// Add your javascript here
'use strict';
//since you can't import jQuery
//create global variables for each button
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");

const buttonList = [b1, b2, b3, b4];

function indexMessage(buttonList){
    let message = "";
    if (document.onclick(function(){
        message = "Button 1";
        alert("Button 1");
        console.log("Button 1");
    }));
    return message;
    // `<section class="feedback" role="feedback">
    //   <div id="message"> {message} </div>      
    // </section>`;
}
document.getElementById('b1').onclick = function showMessageContent() {

   console.log("Button 1")

}
