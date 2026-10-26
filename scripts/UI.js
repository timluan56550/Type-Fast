const click=new Audio("audio/sound/click.mp3");
const select=new Audio("audio/sound/select.mp3");

const easyBtn= document.getElementById("easyButton")
const hardBtn= document.getElementById("hardButton")
const mediumBtn= document.getElementById("mediumButton")
const phraseBtn= document.getElementById("phraseButton")
const wordBtn= document.getElementById("wordButton")
const liveAccElement=document.getElementById("liveAcc")
const lightBtn=document.getElementById("light")
const darkBtn=document.getElementById("dark")
const outsideBtn=document.getElementById("outside")
const terraBtn=document.getElementById("terra")

const liveWpmElement=document.getElementById("liveWpm")
const goalWpmElement=document.getElementById("goalWpm")
const goalAccElement=document.getElementById("goalAcc")
const winsElement=document.getElementById("winNumber")
//changing themes
const everything=document.getElementById("everything")
const displayBox=document.getElementById("typing-display")
const cursor=document.getElementById("cursorMove")
const allButtons = document.querySelectorAll('button');
allButtons.forEach(button => {
    button.addEventListener('mouseenter', (event) => {
        soundSelect();
    })
    button.addEventListener('click', (event) => {
        soundClick();
    })
})
function soundClick(){
cloneClick=click.cloneNode();
cloneClick.volume=0.1;
cloneClick.play();
}
function soundSelect(){
cloneSelect=select.cloneNode();
cloneSelect.volume=0.06;
cloneSelect.play();
}
function setThemeClass(theme){
    //clears all classes
    everything.className=""

    everything.classList.add(theme)
    
        moveCursor();

}
function themeButton(selectedButton){
    lightBtn.classList.remove("active");
  darkBtn.classList.remove("active");
  outsideBtn.classList.remove("active");
    terraBtn.classList.remove("active");

  selectedButton.classList.add("active")
}
lightBtn.addEventListener("click", (e)=>{
    themeButton(lightBtn)
    setThemeClass("light")
    e.currentTarget.blur()
})
darkBtn.addEventListener("click", (e)=>{
        themeButton(darkBtn)

    setThemeClass("dark")
    e.currentTarget.blur()
})
outsideBtn.addEventListener("click", (e)=>{
        themeButton(outsideBtn)

    setThemeClass("outside")
    e.currentTarget.blur()
})
terraBtn.addEventListener("click", (e)=>{
        themeButton(terraBtn)

    setThemeClass("terra")
    e.currentTarget.blur()
})
difficultyButton(easyBtn)
function difficultyButton(selectedButton){
    easyBtn.classList.remove("active");
  mediumBtn.classList.remove("active");
  hardBtn.classList.remove("active");
  selectedButton.classList.add("active")
}
easyBtn.addEventListener("click", (e)=>{
currentDifficulty="easy"
difficultyButton(easyBtn)
newBankItem();
//stops the focus
e.currentTarget.blur()
})
mediumBtn.addEventListener("click", (e)=>{
currentDifficulty="medium"
difficultyButton(mediumBtn)

newBankItem();
e.currentTarget.blur()

})
hardBtn.addEventListener("click", (e)=>{
currentDifficulty="hard"
difficultyButton(hardBtn)

newBankItem();
e.currentTarget.blur()

})
function modeButton(selectedButton){
    phraseBtn.classList.remove("active");
  wordBtn.classList.remove("active");
  selectedButton.classList.add("active")
}
phraseBtn.addEventListener("click", (e)=>{
    modeButton(phraseBtn)
    currentMode="phrases"
newBankItem();
e.currentTarget.blur()

})
wordBtn.addEventListener("click", (e)=>{
        modeButton(wordBtn)

    currentMode="words"
newBankItem();
e.currentTarget.blur()

})
// updates the target goal ui
function updateTargetGoalUI(){
    //updates the WPM goal
if(goalWpmElement){
        goalWpmElement.innerText=currentTarget.minWPM+"-"+currentTarget.maxWPM
}
//updates the Accuracy goal
if(goalAccElement){
    goalAccElement.innerText=currentTarget.targetAcc+"%"
}
if(winsElement){
    winsElement.innerText=wins
}
}

function updateLiveUI(liveWPM, liveAcc){
const difficulty=difficulties[currentDifficulty]
//chekcs the propety of hide WPM and hideAcc
if (difficulty.hideWPM){
    liveWpmElement.innerText="Hidden"
    liveWpmElement.classList.add("hidden")
}else{
    liveWpmElement.innerText=liveWPM;
        liveWpmElement.classList.remove("hidden")


    liveWpmElement.style.display="inline-block"

}
if (difficulty.hideAcc){
    liveAccElement.innerText="Hidden"
    liveAccElement.classList.add("hidden")

}else{
liveAccElement.innerText=liveAcc+"%";
        liveAccElement.classList.remove("hidden")

    liveAccElement.style.display="inline-block"
}

}