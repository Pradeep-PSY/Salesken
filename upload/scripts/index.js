


const  userData = JSON.parse(localStorage.getItem("userdata")) || [];

let loginFun = (e) =>{

    e.preventDefault();
    let loginEmail = document.querySelector("#loginEmail").value;
    let loginPassword = document.querySelector("#loginPassword").value;
    console.log(loginEmail,loginPassword);

    userData.map((el)=>{
        if(el.email == loginEmail && el.password == loginPassword){
            alert('loginSuccess')
            window.location.href = "quizz.html"
        }
        else {
            alert('loginFailure')
        }
    })
    
}

const signupFun = (e) => {

    e.preventDefault();
    let signupName = document.querySelector("#signupName").value;
    let signupEmail = document.querySelector("#signupEmail").value;
    let signupPassword = document.querySelector("#signupPassword").value;
   
    console.log(signupName, signupEmail,signupPassword);

    let userobj = {
        name: signupName,
        email: signupEmail,
        password: signupPassword
    }

    userData.push(userobj);

    localStorage.setItem("userdata", JSON.stringify(userData));

    window.location.href = "index.html"


}

document.getElementById("login").addEventListener("submit", loginFun);
document.getElementById("signup").addEventListener("submit", signupFun);

const ques = [
    {
        question: " What is the capital of India?",
        options: [
            'Delhi',
            'Goa',
            'Mumbai',
            'Gujrat'
        ],
        correctAnswer: 'Delhi',
        selectedAnswer: ''
    },
    {
        question: "Who is current CEO of Twitter?",
        options: [
            "Mukesh Ambani",
            "Parag Agrawal",
            "Andy Jassy",
            "Elon Musk",
            
        ],
        correctAnswer: 'Parag Agrawal',
        selectedAnswer: ''
    },
    {
        question: "Who is the current owner of East India Company?",
        options: [
            "Sanjiv Mehta",
               " Mukesh Ambani",
               " Vijay Mallya",
                "Elizabeth II"
        ],
        correctAnswer: 'Sanjiv Mehta',
        selectedAnswer: ''
    },
    {
        question: "Current Prime Minister of India ?",
        options: [
            "Rahul Gandhi",
            "Arvind Kejriwal",
            "Yogi Adityanath",
            "Narendra Modi"
        ],
        correctAnswer:"Narendra Modi",
        selectedAnswer: ''
    },
    {
        question: " Current Chief Minister of Delhi ?",
        options: [
            "Rahul Gandhi",
            "Arvind Kejriwal",
            "Yogi Adityanath",
            "Narendra Modi"
        ],
        correctAnswer: 'Arvind Kejriwal',
        selectedAnswer: ''
    },
    {
        question: "Current Chief Minister of Maharashtra?",
        options: [
           "Eknath Shinde",
            "Uddhav Thackeray",
           "Narendra Modi",
            "Devendra Fadnavis"
        ],
        correctAnswer:  "Eknath Shinde",
        selectedAnswer: ''
    },
    {
        question: "Full form of IRCTC?",
        options: [
            "Indian Railway Collecting and Ticketing Corporation (IRCTC)",
            "Indian Railway Catering and Ticketing Corporation (IRCTC)",
            "Indian Rail Catering and Tourism Corporation (IRCTC)",
            "Indian Railway Catering and Tourism Corporation (IRCTC)"
        ],
        correctAnswer: "Indian Railway Catering and Tourism Corporation (IRCTC)",
        selectedAnswer: ''
    },
    {
        question: "Parent Company of Jio ?",
        options: [
            "Jio",
            "Jio Platforms",
            "Reliance",
           "BSNL"
        ],
        correctAnswer: "Jio Platforms",
        selectedAnswer: ''
    },
    {
        question: "Which animated movie was first to feature a celebrity as a voice actor?",
        options: [
            "Aladdin",
            "Toy Story",
            "James and the Giant Peach",
            "The Hunchback of Notre Dame"
        ],
        correctAnswer: "Aladdin",
        selectedAnswer: ''
    },
    {
        question: "How many players are there in a basket ball team?",
        options: [
            "9",
            "10",
            "11",
            "12"
        ],
        correctAnswer: "11",
        selectedAnswer: ''
    }
]

localStorage.setItem('ques',JSON.stringify(ques))