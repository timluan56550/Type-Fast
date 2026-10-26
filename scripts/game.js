let wordStartTime=0;
// let coins=0;
let streak=0;
let wins=0;
let currentTarget=null;
const lastWpmElement = document.getElementById("lastWpm");
const lastAccElement = document.getElementById("lastAcc");
// const baseCoinValue=10;
//allows the audio to be played multiple times

const difficulties={
    //min WPM, max WPM, margin e.g 46 with margin 6 is 40-52,  A=accuracy
    easy:{ min:10, max: 60, margin:6, minA:80, maxA:90, hideWPM:false, hideAcc:false},
    medium:{ min:40, max: 80, margin:3, minA:85, maxA:95, hideWPM:true, hideAcc: false},
    hard:{ min:60, max: 120, margin:1, minA:100, maxA:100, hideWPM:true, hideAcc: true}
}

function gamemode(){
const difficulty=difficulties[currentDifficulty]
//picks a random WPM and accuracy
const baseWPM=Math.floor(Math.random()*(difficulty.max-difficulty.min+1))+difficulty.min
const targetAcc=Math.floor(Math.random()*(difficulty.maxA-difficulty.minA+1))+difficulty.minA
//this sets teh target for the current phrase
currentTarget={
    targetWPM: baseWPM,
    minWPM: baseWPM-difficulty.margin,
    maxWPM: baseWPM+difficulty.margin,
    targetAcc: targetAcc,
    hideWPM:difficulty.hideWPM,
    hideAcc: difficulty.hideAcc
}
console.log("WPM RANGE: "+currentTarget.minWPM+"---"+currentTarget.maxWPM)
console.log("REQUIRED ACCURACY: GREATER OR EQUAL TO "+currentTarget.targetAcc+"%")
return currentTarget;
}
function evaluateRound({rawWPM, accuracy}){
    //above get stats from calcwpm 
    if(lastWpmElement){
        lastWpmElement.innerText=Math.round(rawWPM)
    }
    if(lastAccElement){
        lastAccElement.innerText=Math.round(accuracy)+"%"
    }
    const wpmSuccess=rawWPM>=currentTarget.minWPM&&rawWPM<=currentTarget.maxWPM;
    const accSuccess= accuracy>= currentTarget.targetAcc
    if(wpmSuccess&&accSuccess){
        wins++
        console.log("Success! Wins: "+wins)
        updateTargetGoalUI()
    }else{
        console.log("Fail")
        if(!wpmSuccess){
            console.log("WPM missed")
        }
        if(!accSuccess){
            console.log("Accuracy missed")
        }
    }
}

function onWordCompleteWithErrors(wordLength){
    console.log("Word completed with errors")
    // add more ltr
    streak=0;
}
function onWordCompleteWithoutErrors(wordLength){
    const WPM=calcWPMperWord(wordLength);
    streak++;
    console.log("Word completed without errors. STREAK: "+streak+"   WPM: "+WPM)

}
function calcAccuracy(length,errors){
    const accuracy=Math.floor(((length-errors)/length)*100)
    console.log(accuracy)
    return accuracy;
}
function calcWPM(length, gameStartTime, errors){
    const duration=(performance.now()-gameStartTime)/60000;
    if (duration===0){
        return 0;
    }
    const rawWPM=Math.floor((length/5)/duration);
    const netWPM=Math.floor(Math.max(0,(length-errors)/5)/duration)
    const accuracy=calcAccuracy(length,errors)
    console.log("rawWPM: "+rawWPM)
    console.log("netWPM: "+netWPM)
    console.log("Accuracy: "+accuracy+"%")

    return {rawWPM, netWPM, accuracy}
}
function calcLiveStats(charCount, gameStartTime, errors){
    if(!gameStartTime || charCount<=1){
        return {liveWPM: 0, liveAcc: 100}
    }
    const duration = (performance.now()-gameStartTime)/60000
    if (duration===0){
        return {liveWPM: 0, liveAcc: 100}
    }
    const liveWPM= Math.floor((charCount/5)/duration)
    const liveAcc= Math.floor(((charCount-errors)/charCount)*100)
    return{ liveWPM: liveWPM, liveAcc: liveAcc};

}

function calcWPMperWord(wordLength){
    //find duration in minutes
    const duration=(performance.now()-wordStartTime)/60000;

    if(duration===0){
        return 0;
    }
    const WPMperWord= Math.floor((wordLength/5)/duration)
    //using average word being 5 letters
    return WPMperWord;

}
