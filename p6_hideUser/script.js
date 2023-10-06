let showCard = true;
let btn = document.getElementById("btn");
let profileCard = document.querySelector(".profile");
let btnIcon = document.querySelector('button i');

btn.addEventListener("click", () => {
    showCard = !showCard;

    if (showCard) {
        profileCard.classList.remove("hide");
        profileCard.style.animation = "slide1 1s ease-in-out"
        btnIcon.className = 'fas fa-times';
    } else {
        profileCard.classList.add("hide");
        profileCard.style.animation = ""
        btnIcon.className = 'fas fa-user';
    }
});