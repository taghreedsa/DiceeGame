
var arryImage =["images/dice1.png","images/dice2.png" , "images/dice3.png" , "images/dice4.png" , "images/dice5.png" , "images/dice6.png" ];

/*-- Tow differnt variables create diffrent ranodm numbers --*/
var randomnumber1 = Math.floor(Math.random()*arryImage.length);
var randomnumber2 = Math.floor(Math.random()*arryImage.length);


if(randomnumber1 === randomnumber2){
    document.querySelector("h1").textContent ="Draw !☠"
}else if (randomnumber1 > randomnumber2){
    document.querySelector("h1").textContent ="player 1 is won !☠"
}else if(randomnumber2 > randomnumber1){
    document.querySelector("h1").textContent ="player 2 is won !☠"
}


var leftHandSide = document.getElementsByClassName("img1");
leftHandSide[0].setAttribute("src",arryImage[randomnumber1]);

var rightHandSide = document.getElementsByClassName("img2");
rightHandSide[0].setAttribute("src" , arryImage[randomnumber2]);


/*---- TESTING
 console.log(leftHandSide)
console.log(rightHandSide)
console.log(randomnumber1);
console.log(randomnumber2); -----*/