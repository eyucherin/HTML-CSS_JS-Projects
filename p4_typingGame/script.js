let curIndx = 0;
const wordElement = document.getElementById("word");
const form = document.getElementById("form");
const timer = document.getElementById("timer");
const score = document.getElementById("score");
wordElement.innerHTML = wordsArray[curIndx];
let curTime = 0;
let wrongCount = 0;
let curScore = 0;
const wordsArray = [
    "luminous",
    "sparrow",
    "tectonic",
    "quibble",
    "zephyr",
    "mandible",
    "ruphoric",
    "spindle",
    "threnody",
    "Fjord",
    "glimmer",
    "nexus",
    "obsidian",
    "caliper"
];


//when the form is submitted we check 
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    // 1. if the input value is the same as word
    if(inputBox.value === wordsArray[curIndx]){
        wordElement.className = "greenText";
        //wait one second to change to next value
        setTimeout(()=>{
            wordElement.className = "blackText";
            wordElement.innerHTML = wordsArray[curIndx];
            inputBox.value = "";
        },300)
        if(curIndx == wordsArray.length-1){
            alert(`Finished! Good Job!\nScore: ${Math.floor(curScore/wordsArray.length)} or of ${wordsArray.length}`);
            curIndx = 0;
        }
        else{
            curIndx ++;
        }
        curScore = curScore + 10;
        score.innerHTML = curScore;
    // 2. if we have reached the end
    }else{
        wordElement.className = "redText";
        wrongCount ++;
        curScore = curScore - 10;
        score.innerHTML = curScore;
    }
})

//Timer implementation
setInterval(()=>{
    curTime ++;
    timer.innerHTML = `  min:${Math.floor(curTime/60)} sec:${curTime%60}`
},1000)







