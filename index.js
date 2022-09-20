const dodger = document.getElementById('dodger');

// document.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowLeft") {
//       const leftNumbers = dodger.style.left.replace("px", "");
//       const left = parseInt(leftNumbers, 10);
  
//       dodger.style.left = `${left - 1}px`;
//     }
//   });

const moveDodgerLeft = () => {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers,10);

    if(left > 0) {
        dodger.style.left = `${left - 1}px`;
    };
};

const moveDodgerRight = () => {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers,10);

    if(left <= 380) {
        dodger.style.left = `${left + 1}px`;
    };
};

document.addEventListener("keydown", function(e) {
    if(e.key === "ArrowLeft") {
        moveDodgerLeft();
    };
});

document.addEventListener("keydown", function(e) {
    if(e.key === "ArrowRight") {
        moveDodgerRight();
    } else if(e.key === "ArroeRight") {
        moveDodgerRight();
    };
});

