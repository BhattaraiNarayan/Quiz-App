const data = [
  {
    id: 1,
    question: "What is the capital of France?",
    answers: [
      { answer: "New York", isCorrect: false },
      { answer: "London",   isCorrect: false },
      { answer: "Paris",    isCorrect: true },
      { answer: "Dublin",   isCorrect: false },
    ],
  },
    {
    id: 2,
    question: "What is the capital of Ireland?",
    answers: [
      { answer: "New York", isCorrect: false },
      { answer: "London",   isCorrect: false },
      { answer: "Paris",    isCorrect: false },
      { answer: "Dublin",   isCorrect: true },
    ],
    },
        {
        id: 3,
        question: "What is the capital of England?",
        answers: [
          { answer: "New York", isCorrect: false },
          { answer: "London",   isCorrect: true },
          { answer: "Paris",    isCorrect: false },
          { answer: "Dublin",   isCorrect: false },
        ],
        },
            {
            id: 4,
            question: "What is the capital of the USA?",
            answers: [
              { answer: "New York", isCorrect: false },
              { answer: "London",   isCorrect: false },
              { answer: "Washington",    isCorrect: true },
              { answer: "Dublin",   isCorrect: false },
            ],
            },
                {
                id: 5,
                question: "What is the capital of Germany?",
                answers: [
                  { answer: "Berlin", isCorrect: true },
                  { answer: "London",   isCorrect: false },
                  { answer: "Paris",    isCorrect: false },
                  { answer: "Dublin",   isCorrect: false },
                ],
                },
                    {
                    id: 6,
                    question: "What is the capital of Italy?",
                    answers: [
                      { answer: "New York", isCorrect: false },
                      { answer: "Rome",   isCorrect: true },
                      { answer: "Paris",    isCorrect: false },
                      { answer: "Dublin",   isCorrect: false },
                    ],
                    },
                        {
                        id: 7,
                        question: "What is the capital of Spain?",
                        answers: [
                          { answer: "New York", isCorrect: false },
                          { answer: "London",   isCorrect: false },
                          { answer: "Madrid",    isCorrect: true },
                          { answer: "Dublin",   isCorrect: false },
                        ],
                        },
                            {
                            id: 8,
                            question: "What is the capital of Portugal?",
                            answers: [
                              { answer: "New York", isCorrect: false },
                              { answer: "Lisbon",   isCorrect: true },
                              { answer: "Paris",    isCorrect: false },
                              { answer: "Dublin",   isCorrect: false },
                            ],
                            },
                                {
                                id: 9,
                                question: "What is the capital of Russia?",
                                answers: [
                                  { answer: "New York", isCorrect: false },
                                    { answer: "London",   isCorrect: false },
                                    { answer: "Moscow",    isCorrect: true },
                                    { answer: "Dublin",   isCorrect: false },
                                ],  
                                },
                                    {
                                    id: 10,
                                    question: "What is the capital of Australia?",
                                    answers: [
                                      { answer: "New York", isCorrect: false },
                                      { answer: "London",   isCorrect: false },
                                      { answer: "Canberra",    isCorrect: true },
                                      { answer: "Dublin",   isCorrect: false },
                                    ],
                                    }, 
                                      
];

const gameScreen =document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play  = document.querySelector(".play");


let qIndex = 0;
let score = 0;
let correctCount=0;
let wrongCount=0;
let totalQuestions = data.length;
let total=0;
let selectedAnswer = 0; 

const playAgain=()=>{
   qIndex=0;
   correctCount=0;
   wrongCount=0;
   total=0;
  showQuestion(qIndex);
}

play.addEventListener("click",()=>{
    resultScreen.style.display = "none";
    gameScreen.style.display = "block";
    playAgain()
})

const showResult=()=>{
  resultScreen.style.display="block";
  gameScreen.style.display="none";

  resultScreen.querySelector(".att").textContent = `Total Attempted Question:  ${qIndex}`;

  resultScreen.querySelector(".correct").textContent=`Correct Answers:  ${correctCount}`

  resultScreen.querySelector(".wrong").textContent = `Wrong Answers:  ${wrongCount}`;

  resultScreen.querySelector(".score").textContent=`Score:  ${(correctCount-wrongCount)*10}`

}

const showQuestion = (qNumber) => {
  if(qIndex===data.length) return showResult()
  selectedAnswer=null;
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `
  <div class="answer">
      <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
      <label for="1">${item.answer}</label>
  </div>
  `
    )
    .join("");
  selectAnswer()          //Function that selects answer from the radio input 
  };

const selectAnswer=()=>{
  answersContainer.querySelectorAll("input").forEach(el=>{
    el.addEventListener("click",(e)=>{
      selectedAnswer=e.target.value
    });
  });
}

const submitAnswer=()=>{
  submit.addEventListener("click",()=>{
    if(selectedAnswer!=null){
       selectedAnswer === "true" ? correctCount++ : wrongCount++;
       qIndex++;
       showQuestion(qIndex);
    }else{
      alert("Please Select a Correct Answer")
    }
   
  });
}

showQuestion(qIndex);
submitAnswer();