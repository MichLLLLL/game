let perso = document.getElementById("perso");
let obstacle = document.getElementById("obstacle");
let score = 0;

window.addEventListener('keydown', (e) => {
  if (e.key === " ") {
    saut()
  }
})

function saut() {
  if (perso.classList.contains("saut")) return;
  perso.classList.add("saut")
  setTimeout(() => {
    perso.classList.remove("saut")
  }, 400)
}

var verifMort = setInterval(() => {
  let persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue("top"));
  
  let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
  
  if (obstacleLeft < 20 && obstacleLeft > -20 && persoTop >= 120) {
  	error to stop the code lol
    obstacle.style.animation = "none";
    alert("Game Over. Your score: " + Math.floor(score / 100));
    score = 0;
    obstacle.style.animation = "fiouu 1.2s infinite linear";
  } else {
    score++;
    document.getElementById("score").innerHTML = Math.floor(score / 100);
  }
}, 10)

// obstacle.addEventListener('animationend', () => {
//   obstacle.style.transform = "scale(" + Math.random() * 2 + ")";
// })
