const quizForm = document.querySelector(".quiz-form");
const checkBtn = document.querySelector("#check-btn");
const outputBox = document.querySelector("#output-box");
const correctAnswers= ["90°","right angled"];

function calculateScore(){
    let score =0;
    let index =0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values())
    {
        if(value===correctAnswers[index])
        {score=score+1;}
        index = index+1;
    }
    
    outputBox.innerHTML = (`Your score is ${score}`);
}






checkBtn.addEventListener('click', calculateScore);