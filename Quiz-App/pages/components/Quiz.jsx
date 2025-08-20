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

    return (
      <div>
        <h2>Question 1</h2>
        <p className="Question">{questionBank[0].question}</p>

        {questionBank[0].options.map((option) => (
          <button  className="option">{option}</button>
        ))}
        <div className="nav-buttons">
            <button>Previous</button>
            <button>Next</button>
        </div>
      
      </div>
    );
}

 export default Quiz;
