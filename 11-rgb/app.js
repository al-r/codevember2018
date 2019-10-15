/* ********** 
Inpired from the free part of the following tutorial:
https://campushippo.com/lessons/how-to-convert-rgb-colors-to-hexadecimal-with-javascript-78219fdb
********** */

rgbToHex = function(rgb) { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    
    return hex;
};

fullColorHex = function(r,g,b) {
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    
    return "#"+red+green+blue;
};

getColor = function(sender, receiver){
    var resultText = document.getElementById("result-text");
    console.log(resultText);
    var resultColor = document.getElementById("result-color");

    var redReceiver = document.getElementById("red--" + receiver);
    var greenReceiver = document.getElementById("green--" + receiver);
    var blueReceiver = document.getElementById("blue--" + receiver);

    var redSender = document.getElementById("red--" + sender);
    var greenSender = document.getElementById("green--" + sender);
    var blueSender = document.getElementById("blue--" + sender);

    var red, green, blue;

    red = redSender.value;
    green = greenSender.value;
    blue = blueSender.value;

    //RGB
    redReceiver.value = red;
    greenReceiver.value = green;
    blueReceiver.value = blue;

    document.getElementById("red--text-input").style.backgroundColor = fullColorHex(red, "0", "0");
    document.getElementById("green--text-input").style.backgroundColor = fullColorHex("0", green, "0");
    document.getElementById("blue--text-input").style.backgroundColor = fullColorHex("0", "0", blue);

    //Full hexcode
    var hexcode = fullColorHex(red, green, blue);
    
    resultColor.style.backgroundColor = hexcode;
    resultText.innerHTML = hexcode;
};

window.addEventListener('load', function() {
    getColor("range", "text-input");
});