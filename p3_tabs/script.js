const imgContainer = document.getElementById("imgContainer");

//Function that is being called when user presses a tab button. arg will be this, passing from html element.
//It will reference the html element itself.
const clickBtn = (button) => {
    const targetId = button.id === "dogBtn" ? "dog" : 
                     button.id === "catBtn" ? "cat" : 
                     null;
    //getting all child elements from imgContainer
    imgContainer.querySelectorAll("*").forEach((img) => {
        if (targetId) {
            if(img.id === targetId){
                img.className = ""
            }
            else{
                img.className = "hide"
            }
        } else {
            img.className = "";
        }
    });
}

