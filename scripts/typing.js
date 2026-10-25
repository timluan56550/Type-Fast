let currentPhrase=""
let currentIndex=0;
let currentStartIndex=0;
let typingTimer;
let gameStartTime=0;
let currentDifficulty="easy";
let currentMode= "phrases"

let UIInterval=null;

// const letterSpan=typingDisplay.querySelectorAll(".letter")
const typingDisplay=document.getElementById("typing-display")
//Temporary until I add a Start game button
newBankItem();
// window.addEventListener("click", ()=>{
//     newBankItem();
// })



function newBankItem(){
    
    updateLiveUI(0,100);
    //random words or set phrases
    if (currentMode==="words"){
        currentPhrase= randomWordBank();
    } 
    else if (currentMode==="phrases"){
    currentPhrase=randomBank();
    }
    currentIndex=0;
    currentStartIndex=0;
    typingDisplay.innerHTML="";
    //starts a new round
    gamemode(currentDifficulty);
    updateTargetGoalUI();
    //makes a copy of the cursor because i jsut cleared the HTMl
    const cursorElement=document.createElement("div")
    cursorElement.id="cursorMove"
    typingDisplay.appendChild(cursorElement)
    // for each letter in the item
    for(let x=0; x<currentPhrase.length; x++){
        const charSpan=document.createElement("span")
        charSpan.innerText=currentPhrase[x];
        //gives the letter 2 modes 
        charSpan.classList.add("letter", "untyped");
        //adds the charSpan into the parent
        typingDisplay.appendChild(charSpan)
    }
    moveCursor();

}




//key checks and puts the letter based on user input in classes
window.addEventListener("keydown", (e)=>{
    //return if its shift, ctrl, esc but not backspace
    if(e.key.length>1 && e.key!=="Backspace"){
        return;
    }
    if(currentIndex===0){
        gameStartTime=performance.now();
        if (UIInterval){
            clearInterval(UIInterval)
        }
        UIInterval=setInterval(()=>{
            if(gameStartTime>0 && currentIndex>0){
             const totalErrors=typingDisplay.querySelectorAll(".letter.incorrect").length;
    const liveStats= calcLiveStats(currentIndex, gameStartTime,totalErrors)
updateLiveUI(liveStats.liveWPM, liveStats.liveAcc)
            }
        }, 250);
    }
    if(currentIndex===currentStartIndex){
        wordStartTime=performance.now()
    }
    typingDisplay.classList.add("typing")
    //clears existing timer and start a new one
    clearTimeout(typingTimer)
    typingTimer=setTimeout(()=>{
        typingDisplay.classList.remove("typing");
    }, 1200)
    //puts all the span elements with class letter inside typingDisplay and puts it in letterSpan
    const letterSpan=typingDisplay.querySelectorAll(".letter")




    if(e.key==="Backspace"){
        //prevents going back to teh prvious word
        if(currentIndex>currentStartIndex){
            currentIndex--;
        //reset the class to be able to be reclassed again
        letterSpan[currentIndex].classList.remove("correct", "incorrect")
        letterSpan[currentIndex].classList.add("untyped")
        delete letterSpan[currentIndex].dataset.wrongChar;
        
        if(currentPhrase[currentIndex]===" "){
            letterSpan[currentIndex].innerText=" ";
        }
        moveCursor();
    }
    return;

}
    //stops when the end of the phrase
    if(currentIndex>=currentPhrase.length){
        return;
    }
    //find the character the use is supposed to type next
    const targetChar=currentPhrase[currentIndex];
    
    //if target is space but you did not type space
if(targetChar===" "&& e.key!==" "){
    //swaps the space with your incorrect
    letterSpan[currentIndex].innerText=" ";
    letterSpan[currentIndex].dataset.wrongChar=e.key
    //puts it in the right class
    letterSpan[currentIndex].classList.remove("untyped")
    letterSpan[currentIndex].classList.add("incorrect")
    currentIndex++;
    checkCompleteWord();
    currentStartIndex=currentIndex;
    moveCursor()
    return;
}




    if(e.key===targetChar){
        //move items between the classes
        letterSpan[currentIndex].classList.remove("untyped")
        letterSpan[currentIndex].classList.add("correct")
    }else{
        letterSpan[currentIndex].classList.remove("untyped")
        letterSpan[currentIndex].classList.add("incorrect")
    }
    //next letter
    currentIndex++;
    //Check if the target Char is a space or when end of the phrase
    if(targetChar===" " || currentIndex===currentPhrase.length){
        //checks it
        checkCompleteWord();
        //shifts over to start a new word
        currentStartIndex=currentIndex;
    }
   

    //when you end a phrase
    if(currentIndex>=currentPhrase.length){
        console.log("new phrase")
            const totalErrors=typingDisplay.querySelectorAll(".letter.incorrect").length;

        const finalStats=calcWPM(currentPhrase.length, gameStartTime, totalErrors);
        evaluateRound(finalStats)
        gameStartTime=0;
        setTimeout(newBankItem,500);
    }
    moveCursor();

})







//--------------------------------------------------------
//functions about word checking below
//THIS LINE HELPS ME SEE IT SO I CAN FIND MY FUNcTIONS BETTER



//checks if the word contains any errors
function checkCompleteWord(){
    //puts all the span elements with class letter inside typingDisplay and puts it in letterSpan
    const letterSpan=typingDisplay.querySelectorAll(".letter")
    let wordError=false;
    //checks each letter if its incorrect using the class
    for(let x=currentStartIndex; x <currentIndex; x++){
        //checks if the letter is in the class incorrect
        if(letterSpan[x].classList.contains("incorrect")){
            wordError=true;
            //stops the loop
            break;
        }
    }
    const wordLength=currentIndex-currentStartIndex;
    if(wordError){
        //this selects all the letters in the current word
        for(let x=currentStartIndex; x<currentIndex; x++){
            if(currentPhrase[x]!==" "){
            letterSpan[x].classList.add("errorWord")
            }
        }
        onWordCompleteWithErrors(wordLength);
    }else{
        onWordCompleteWithoutErrors(wordLength);
    }
}

function moveCursor(){
    const cursorElement=document.getElementById("cursorMove")
    const letterSpan=typingDisplay.querySelectorAll(".letter")
    //if there is no more letter spans, it stops
    if(letterSpan.length===0){
        return;
    }
    //checks if its at the end of the phrase
    const isAtEnd=currentIndex>=letterSpan.length;
    //If we are at the end, measure using the last letter span
    //if we are not at the end, measure using the index
    const targetSpan= isAtEnd ? letterSpan[letterSpan.length-1] : letterSpan[currentIndex]
    //Find the horizontal position
    //offsetLeft =distance from left edge of container
    //offsetWidth= width of the letter
    //so leftPosition= currentLetter's distance to the left wall + (0) or sometimes width of the letter
    const leftPosition=targetSpan.offsetLeft + (isAtEnd ? targetSpan.offsetWidth:0)

    cursorElement.style.left=leftPosition+"px"
    cursorElement.style.top=targetSpan.offsetTop+"px";
}
    
window.addEventListener("resize",()=>{
    moveCursor();
})

