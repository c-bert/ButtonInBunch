// Add your javascript here
'use strict';

//handle HTML message
const insertMessage = document.getElementById('message').innerText = "Button index: ";

 function grabButton(){
     if (document.getElementById('b1')) {
         alert(insertMessage + "b1");
     }
     else if(document.getElementById('b2')) {
         alert(insertMessage + "b2");
     }
     else if(document.getElementById('b3').onclick){
         alert(insertMessage + "b3");
     }
     else
     console.log("There was an error");
 }

// document.getElementById('b1').onclick = function showMessageContent() {
//    console.log("Button 1")
// }

function handleOnClick(){
    grabButton();
}
