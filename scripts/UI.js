const easyBtn= document.getElementById("easyButton")
const hardBtn= document.getElementById("hardButton")
const mediumBtn= document.getElementById("mediumButton")
const phraseBtn= document.getElementById("phraseButton")
const wordBtn= document.getElementById("wordButton")
const liveAccElement=document.getElementById("liveAcc")

const liveWpmElement=document.getElementById("liveWpm")
easyBtn.addEventListener("click", ()=>{
currentDifficulty="easy"
newBankItem();
})
mediumBtn.addEventListener("click", ()=>{
currentDifficulty="medium"
newBankItem();
})
hardBtn.addEventListener("click", ()=>{
currentDifficulty="hard"
newBankItem();
})
phraseBtn.addEventListener("click", ()=>{
    currentMode="phrases"
newBankItem();
})
wordBtn.addEventListener("click", ()=>{
    currentMode="words"
newBankItem();
})
function updateLiveUI(liveWPM, liveAcc){
const difficulty=difficulties[currentDifficulty]
//chekcs the propety of hide WPM and hideAcc
if (difficulty.hideWPM){
    liveWpmElement.style.display="none";
}else{
    liveWpmElement.innerText=liveWPM;

    liveWpmElement.style.display="inline-block"

}
if (difficulty.hideAcc){
    liveAccElement.style.display="none";
}else{
liveAccElement.innerText=liveAcc+"%";

    liveAccElement.style.display="inline-block"
}

}