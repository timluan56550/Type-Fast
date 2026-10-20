let currentPhrase=""
let currentIndex=0;

const typingDisplay=document.getElementById("typing-display")
//Temporary until I add a Start game button
newBankItem();

function newBankItem(){
    currentPhrase=randomBank();
    currentIndex=0;
    typingDisplay.innerHTML="";
    // for each letter in the item
    for(let x=0; x<currentPhrase.length; x++){
        const charSpan=document.createElement("span")
        charSpan.innerText=currentPhrase[x];
        //gives the letter 2 modes 
        charSpan.classList.add("letter", "untyped");
        //adds the charSpan into the parent
        typingDisplay.appendChild(charSpan)
    }
}

window.addEventListener("keydown", (e)=>{
    //checks for single character keys not e.g shift, bspac
    if(e.key.length>1){
        return;
    }
    //puts all the span elements with class letter inside typingDisplay and puts it in letterSpan
    const letterSpan=typingDisplay.querySelectorAll(".letter")
    //find the character the use is supposed to type next
    const targetChar=currentPhrase[currentIndex];
    
    if(e.key===targetChar){
        //move items between the classes
        letterSpan[currentIndex].classList.remove("untyped")
        letterSpan[currentIndex].classList.add("correct")
        //next letter
        currentIndex++;
    }else{
        letterSpan[currentIndex].classList.remove("untyped")
        letterSpan[currentIndex].classList.add("incorrect")

    }
})