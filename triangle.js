var inputText = document.querySelectorAll(".input-text");
var checkBtn = document.querySelector("#check-btn");
var outputBox = document.querySelector("#output-box");

function sumOfAngles(angle1,angle2,angle3){
    var sum = angle1+angle2+angle3;
    return sum;
}

function checkIsTraingle(){
    var angleSum = sumOfAngles(Number(inputText[0].value),Number(inputText[1].value),Number(inputText[2].value));
     if((inputText[0].value),(inputText[1].value),(inputText[2].value)){
       if(angleSum===180){
           outputBox.innerHTML= "Yes, It is a Triangle";
       }

       else{
           outputBox.innerHTML= "No, It is not a Triangle";
       }
     }

     else{
         outputBox.innerHTML = "Please enter all the angles";
     }
    
}

checkBtn.addEventListener('click', checkIsTraingle);


