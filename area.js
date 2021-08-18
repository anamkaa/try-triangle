const inputText = document.querySelectorAll(".input-text");
const checkBtn = document.querySelector("#check-btn");
const outputBox = document.querySelector("#output-box");

function calculateArea(a,b){
    var area = 1/2*(a)*(b);
    return area;
}

function showArea(){
    
    var finalArea =( calculateArea(Number(inputText[0].value),Number(inputText[1].value))).toFixed(2);
    outputBox.innerHTML = (`The area of the given triangle will be ${finalArea} cm²`);
    
}


checkBtn.addEventListener('click',showArea);