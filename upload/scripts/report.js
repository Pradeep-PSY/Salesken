
const ques = JSON.parse(localStorage.getItem('ques'))


const mainBox = document.querySelector('#mainBox');

const totalScore = document.querySelector('#totalScore');
function score(){
    let cscore = 0
    ques.forEach((el)=>{
        
        if(el.correctAnswer == el.selectedAnswer){
            cscore++
        }
    })
    // console.log(cscore)
    return cscore
}
totalScore.innerText = `TotalScore : ${score()} / ${ques.length}`

 ques.map((el)=>{
   
    let question = document.createElement('h1')
    question.innerText = el.question;
    let answer = document.createElement('h2')
 
    answer.innerText = `Answer: ${el.correctAnswer}` ;
    let userSelected = document.createElement('h3')
    userSelected.innerText = `yourAnswer: ${el.selectedAnswer == "" ? ('You have Skipped'): el.selectedAnswer}`;
    let bk = document.createElement('br')

    mainBox.append(question, answer, userSelected, bk);
 })