import React, {useState} from 'react'
import Results from "./results"
function Quiz (){
  const questionBank = [
    {
      question: "What is React mainly used for?",
      options: ["Backend", "Database", "UI", "Hosting"],
      answer: "UI",
    },
    {
      question: "Which hook is used for state?",
      options: ["useState", "useEffect", "useRef", "useContext"],
      answer: "useState",
    },
    {
      question: "What does JSX stand for?",
      options: ["Java XML", "JavaScript XML", "JSON X", "JS Extra"],
      answer: "JavaScript XML",
    },
    {
      question: "Default port for React app?",
      options: ["3000", "8000", "5000", "8080"],
      answer: "3000",
    },
    {
      question: "Which company created React?",
      options: ["Google", "Facebook", "Microsoft", "Twitter"],
      answer: "Facebook",
    },
    {
      question: "Props are used to?",
      options: ["Style", "Pass data", "Update DOM", "Run server"],
      answer: "Pass data",
    },
    {
      question: "Which command creates a new React app?",
      options: [
        "npm start react-app",
        "npx create-react-app myApp",
        "node react new",
        "npm react init",
      ],
      answer: "npx create-react-app myApp",
    },
    {
      question: "Which hook is used for side effects?",
      options: ["useState", "useEffect", "useRef", "useMemo"],
      answer: "useEffect",
    },
    {
      question: "What is the Virtual DOM?",
      options: [
        "Real DOM",
        "Lightweight copy of DOM",
        "Database",
        "JS function",
      ],
      answer: "Lightweight copy of DOM",
    },
    {
      question: "How do you render lists in React?",
      options: ["map()", "for()", "while()", "loop()"],
      answer: "map()",
    },
  ];

  const initialAnswers = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];

  const [userAnswers, setUserAnswers] = useState(initialAnswers);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const selectedAnswer = userAnswers[currentQuestion];

  function handleSelectOption(option) {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = option;

    setUserAnswers(newUserAnswers);
  }

  function goToNext() {
    if (currentQuestion === questionBank.length - 1) {
      setIsQuizFinished(true);
     
    }else{
       setCurrentQuestion(currentQuestion + 1);
    }
      
  }

  function goToPrev() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

   function restartQuiz() {
    setUserAnswers(initialAnswers)
    setCurrentQuestion(0)
    setIsQuizFinished(false)
   }

  if (isQuizFinished){
    return <Results userAnswers={userAnswers}
     questionBank={questionBank} 
     restartQuiz={restartQuiz}/>

  }
  //{"option" + (selectedAnswer === option ? "selected" : " ")}

  return (
    <div>
      <h2>Question {currentQuestion + 1}</h2>
      <p className="Question">{questionBank[currentQuestion].question}</p>

      {questionBank[currentQuestion].options.map((option) => (
        <button
          className='option'
          onClick={() => handleSelectOption(option)}
        >
          {option}
        </button>
      ))}

      <div className="nav-buttons">
        <button onClick={goToPrev} disabled={currentQuestion === 0}>
          Previous
        </button>
        <button onClick={goToNext} disabled={!selectedAnswer}>

          {currentQuestion === questionBank.length - 1 ?   "Finish Quiz ":  "Next"}
         
        </button>
      </div>
    </div>
  );
}

 export default Quiz;
