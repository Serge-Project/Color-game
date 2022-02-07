window.onload = function() {
    init();
};

var numCards = 3;
var gameOver = false;
var colors = [];
var pickedColor;
var body = document.querySelector("body");
var cards = document.querySelectorAll(".card");
var colorDisplay = document.getElementById("color-picked");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var resetDisplay = document.querySelector("#reset span");
var easy = false;
var hard = false;
var nightmare = false;




// Parts I've modified
var EasyButton = document.querySelector("#Easy");
var HardButton = document.querySelector("#Hard");
var NightmareButton = document.querySelector("#Nightmare");
//  End here


function init() {
    initCards();
    reset();
}

function initCards() {

    
    for (var i = 0; i < cards.length; i++) {
        //add click listeners to cards
        cards[i].addEventListener("click", function() {
            if (gameOver)
                return;
            //grab color of clicked card
            var clickedColor = this.style.backgroundColor;
            // alert(this.style.backgroundColor);
            //compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetDisplay.textContent = "Play Again"
                changeColors("#FFF");
                body.style.backgroundColor = clickedColor;
                gameOver = true;
            } else {
                this.style.opacity = 0;
                messageDisplay.textContent = "Try Again"
            }
        });
    }
}



resetButton.addEventListener("click", function() {
    reset();
})

function reset() {
    gameOver = false;

    colors = generateRandomColors(numCards);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetDisplay.textContent = "New Color"
    messageDisplay.textContent = "What's the Color?";
    //change colors of cards
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.opacity = 1;
        if (colors[i]) {
            cards[i].style.display = "block"
            cards[i].style.backgroundColor = colors[i];
        } else {
            cards[i].style.display = "none";
        }
    }
    body.style.backgroundColor = "#232323";
}



// document.getElementById("Easy").onclick = function() {
    
//         while(event.type = "mouseover") {
            
//    console.log("booboo");


//                 gameOver = false;
//     numCards = 3;
//      colors = generateRandomColors(numCards);
//     //pick a new random color from array
//     pickedColor = pickColor();
//     //change colorDisplay to match picked Color
//     colorDisplay.textContent = pickedColor;
//     resetDisplay.textContent = "New Color"
//     messageDisplay.textContent = "What's the Color?";
//     //change colors of cards
//     for (var i = 0; i < cards.length; i++) {
//         cards[i].style.opacity = 1;
//         if (colors[i]) {
//             cards[i].style.display = "block"
//             cards[i].style.backgroundColor = colors[i];
//         } else {
//             cards[i].style.display = "none";
//         }
//     }
//     body.style.backgroundColor = "#232323";
//         }
    
// };





// function boolFunctions(){

//     EasyButton.addEventListener("click", function() {

//         easy = true;
//         hard = false;
//         nightmare = false;
//     })


//     HardButton.addEventListener("click", function() {
//         hard = true;
//         nightmare = false;
//         easy = false;
//     })


//     NightmareButton.addEventListener("click", function() {
//         nightmare = true;
//         hard = false;
//         easy = false;
//     })
// }






EasyButton.addEventListener("click", function() {
    nightmare = false;
        hard = false;
        easy = true;
    Easy();
})

function Easy() {


    

    // console.log(easy); 
    // console.log(hard); 
    // console.log(nightmare); 


    gameOver = false;
    numCards = 3;
     colors = generateRandomColors(numCards);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetDisplay.textContent = "New Color"
    messageDisplay.textContent = "What's the Color?";
    //change colors of cards
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.opacity = 1;
        if (colors[i]) {
            cards[i].style.display = "block"
            cards[i].style.backgroundColor = colors[i];
        } else {
            cards[i].style.display = "none";
        }
    }
    body.style.backgroundColor = "#232323";


}







HardButton.addEventListener("click", function() {
    nightmare = false;
        hard = true;
        easy = false;
    Hard();
  //  console.log("Serge Rigaud Joseph");
})

function Hard() {

  //  boolFunctions();

    console.log(easy); 
    console.log(hard); 
    console.log(nightmare); 
    
    gameOver = false;
    numCards = 6;
     colors = generateRandomColors(numCards);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetDisplay.textContent = "New Color"
    messageDisplay.textContent = "What's the Color?";
    //change colors of cards
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.opacity = 1;
        if (colors[i]) {
            cards[i].style.display = "block"
            cards[i].style.backgroundColor = colors[i];
        } else {
            cards[i].style.display = "none";
        }
    }
    body.style.backgroundColor = "#232323";


}




NightmareButton.addEventListener("click", function() {

    nightmare = true;
        hard = false;
        easy = false;
    Nightmare();
    //console.log("Serge Rigaud Joseph");
})

function Nightmare() {

  //  boolFunctions();

    // console.log(easy); 
    // console.log(hard); 
    // console.log(nightmare); 
    
  //  console.log(nightmare); 
    
    gameOver = false;
    numCards = 6;
     colors = generateRandomColors(numCards);
    //pick a new random color from array
    pickedColor = pickColor();
    var clickedColor = pickedColor;
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetDisplay.textContent = "New Color"
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.opacity = 1;
        if (colors[i]) {
            cards[i].style.display = "block"
            cards[i].style.backgroundColor = colors[i];
        } else {
            cards[i].style.display = "none";
        }
    }
    body.style.backgroundColor = "#232323";


    var seconds = 5;

    var countdown = setInterval(function() {
        seconds--;

        if(seconds > 0){
            document.getElementById("message").textContent = "What's the Color?     " + seconds;
         }else{
           // console.log("homies");
            document.getElementById("message").textContent = "TIMEOUT!";
            
                resetDisplay.textContent = "Play Again"
                changeColors("#FFF");
                body.style.backgroundColor = clickedColor;
                gameOver = true;
            
        }
        if (seconds <= 0) clearInterval(countdown);
    }, 1000);
    messageDisplay.textContent = "What's the Color? " + seconds;


    // messageDisplay.textContent = "What's the Color?";
    //change colors of cards
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.opacity = 1;
        if (colors[i]) {
            cards[i].style.display = "block"
            cards[i].style.backgroundColor = colors[i];
           
        } else {
            cards[i].style.display = "none";
        }
    }
    body.style.backgroundColor = "#232323";
    
}


















function changeColors(color) {
    //loop through all cards
    for (var i = 0; i < cards.length; i++) {
        //change each color to match given color
        cards[i].style.opacity = 1;
        cards[i].style.backgroundColor = color;
    }
}




function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}





function generateRandomColors(num) {
    //make an array
    var arr = []
    //repeat num times
    for (var i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor())
    }
    //return that array
    return arr;
}





function randomColor() {
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from  0 -255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from  0 -255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
