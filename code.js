let gameResultEl=document.getElementById("gameResult")
let userInputEL=document.getElementById("userInput")
let randomNUmber=Math.ceil(Math.random()*50)

function checkGuess(){
    let ubdatednumber=parseInt(userInputEL.value)

    if (ubdatednumber < randomNUmber){
        gameResultEl.textContent="Too Low! Try Again"
        gameResultEl.style.backgroundColor="black"
    }
    else if (ubdatednumber > randomNUmber){
        gameResultEl.textContent="Too HIGH! Try Again"
        gameResultEl.style.backgroundColor="green"
    }
    else if(ubdatednumber === randomNUmber){
        gameResultEl.textContent="Congratulations! You got it right."
        gameResultEl.style.backgroundColor="green"
    }
    else {
        gameResultEl.textContent="Please provide a valid input."
        gameResultEl.style.backgroundColor = "#1e217c";
    }


}




