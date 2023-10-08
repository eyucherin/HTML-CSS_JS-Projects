const body = document.querySelector("body")
let isLightTheme = true;


function toggleTheme(){
    if (isLightTheme){
        body.style.background = "black"
    }
    else{
        body.style.background = "white"
    }
    isLightTheme = !isLightTheme
}