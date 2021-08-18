const inputText = document.querySelectorAll(".input-text");
const checkBtn = document.querySelector("#check-btn");
const outputBox = document.querySelector("#output-box");

function sumOfSquares(a,b){
    var sum = a**2+b**2;
    return sum;
}

function findHypotenuse(){
   var sumOfSides = sumOfSquares(Number(inputText[0].value),Number(inputText[1].value));
   var foundHypotenuse = (Math.sqrt(sumOfSides)).toFixed(2);
   outputBox.innerHTML = (`The hypotenuse of the given triangle will be ${foundHypotenuse} cm² `);
}


checkBtn.addEventListener('click', findHypotenuse);