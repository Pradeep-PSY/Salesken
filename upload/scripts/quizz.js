const question = document.querySelector("#question");

const answers = document.getElementsByTagName("h3");

let skip = document.querySelector('#skip')


let start = 0


const ques = JSON.parse(localStorage.getItem('ques'))

// console.log(ques)

const quizFun = () => {
    // console.log(start)
   

    if(start == ques.length){

        window.location.href = 'report.html'
        
        localStorage.setItem('ques',JSON.stringify(ques))

    }

    question.innerText = ques[start].question;

    for (let i = 0; i < answers.length; i++) {
      answers[i].innerText = ques[start].options[i]
      answers[i].style.backgroundColor = "white"
    }

   

};

addEventListener("load", quizFun);

skip.addEventListener('click', function (){
    start++
    quizFun()
    skip.innerText = 'Skip'
    if(start >= ques.length - 1) {
        skip.innerText = 'Submit'
    }
})

function onClicked (e) {
    // console.log(e.target)
    ques[start].selectedAnswer = e.target.innerText
    console.log(ques)
    let sample = document.getElementById(e.target.id)
    // console.log(sample)
   
    sample.style.backgroundColor = 'blue'
    if(start >= ques.length - 1) {
        skip.innerText = 'Submit'
    }else{
        skip.innerText = 'Next'

    }
  
}