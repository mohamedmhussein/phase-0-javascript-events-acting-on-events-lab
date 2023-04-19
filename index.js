// Your code here

const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4"

// document.addEventListener("keydown", function (e) {
//     console.log(e)});

// Move left
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 2}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
////////////////////////////////////////////////////
// Move right
document.addEventListener("keydown", e => {
    if (e.key === "ArrowRight"){
        moveDodgerRight()
    }
})

function moveDodgerRight(){
    const leftNumber = dodger.style.left.replace("px", "")
    const left = parseInt(leftNumber, 10)
    if (left < 380){ dodger.style.left = `${left + 2}px`;}
}


