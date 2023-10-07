const infEl = document.getElementById("information");
const gridItems = document.querySelectorAll(".grid-item");

//checking the coordinate position
document.addEventListener("mousemove", (e) => {
    // The condition 508 < e.screenX < 1006 is incorrect.
  if (508 < e.screenX && e.screenX < 1006 && 369 < e.screenY && screenY < 428) {
    infEl.innerHTML = `${e.screenX} ${e.screenY}`;
  }
});

// Checking the correct grid number
gridItems.forEach((item) => {
  item.addEventListener("mouseover", function (e) {
    const value = e.target.innerText;
    gridNum.innerHTML = value;
  });
});
