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
liveWpmElement.innerText="WPM: "+liveWPM;
liveAccElement.innerText="Acc: "+liveAcc+"%";

}