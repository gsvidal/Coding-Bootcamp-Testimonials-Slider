const container1 = document.getElementById("tipo1");
const container2 = document.getElementById("tipo2");

const buttonPrev = document.getElementById("button-prev");
const buttonNext = document.getElementById("button-next");

const buttonPrev2 = document.getElementById("button-prev2");
const buttonNext2 = document.getElementById("button-next2");

buttonNext.addEventListener("click",hideShowContainer);
buttonPrev.addEventListener("click",hideShowContainer);
buttonNext2.addEventListener("click",hideShowContainer);
buttonPrev2.addEventListener("click",hideShowContainer);
document.addEventListener("keyup",keyPressed);

function hideShowContainer() {
  container1.classList.toggle("is-not-active");
  container2.classList.toggle("is-not-active");
}

function keyPressed(event) {
  if (event.keyCode === 37 ||event.keyCode === 39) {
    hideShowContainer();
  }
}
