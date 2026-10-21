let wordStartTime=0;
let coins=0;
let streak=0;


const baseCoinValue=10;


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
