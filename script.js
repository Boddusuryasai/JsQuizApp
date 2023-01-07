const quizData = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz") ;
const answerEls = document.getElementsByClassName("answer");
const questionEl = document.getElementById("question");
const a_text= document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
questionEl.innerHTML =quizData[currentQuiz ].question;
a_text.textContent = quizData[currentQuiz].a
b_text.textContent = quizData[currentQuiz ].b
c_text.textContent = quizData[currentQuiz].c;
d_text.textContent = quizData[currentQuiz].d
 deselectAnswers();
    
}

function deselectAnswers() {
   
    let arr = [...answerEls]
  
    arr.forEach((e,i)=>{
        e.checked=false;
    })
}

function getSelected() {
    let arr = [...answerEls];
    let selectedId = ''; 
    arr.forEach((e, i) => {
      if (e.checked) {
        selectedId = e.id;
        return;
      }
    });
    return selectedId;
  }
  

  submitBtn.addEventListener('click', () => { 
    let selected = getSelected();
    console.log(selected);
    if(!selected){
        const toast = document.createElement("div");
        toast.id = "toasts"
        toast.classList.add("toast")
        toast.innerHTML = "please select  an option"
        document.body.append(toast)
        setTimeout(()=>{
            toast.remove()
        } , 1000)
        return
    }
    if(selected === quizData[currentQuiz].correct){
        score++;
    }
    currentQuiz++
    if(currentQuiz< quizData.length){
        loadQuiz()
    }
    else{
        quiz.innerHTML = ` <h2>You answered correctly at ${score}/${quizData.length} </h2>`
    }
    
  
})

















