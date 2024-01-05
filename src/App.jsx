import React,{useState,useMemo, useEffect} from 'react'
import "./app.css";
import Trivia from './components/Trivia';
import Timer from './components/Timer';
import Start from './components/Start';

 function App() {
  const[userName, setUserName] = useState(null);
  const[questionNumber,setQuestionNumber]=useState(1)
  const [stop, setStop]=useState(false);
  const[earned,setEarned]= useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];


  const moneyPyramid= useMemo(()=>[
    {id:1,amount:"$ 100"},
    {id:2,amount:"$ 500"},
    {id:3,amount:"$ 1000"},
    {id:4,amount:"$ 5000"},
    {id:5,amount:"$ 10000"},
    {id:6,amount:"$ 25000"},
    {id:7,amount:"$ 50000"},
    {id:8,amount:"$ 250000"},
    {id:9,amount:"$ 500000"},
    {id:10,amount:"$ 750000"},
    {id:11,amount:"$ 1250000"},
    {id:12,amount:"$ 2500000"},
    {id:13,amount:"$ 5000000"},
    {id:14,amount:"$ 10000000"},
    {id:15,amount:"$ 70000000"},
    
  ].reverse(),
  []
  );

  useEffect (()=>{
    questionNumber > 1 &&
    setEarned(moneyPyramid.find((m)=> m.id === questionNumber - 1).amount);
  },[moneyPyramid,questionNumber]);

  return (
    <div className='app'>
    {userName ? (
      <>
      <div className="main">
    {stop ? <h1 className='endText'>You earned:{earned}</h1> :(
      <>
      <div className='top'>
      <h2 className='' style={{textAlign:"center", padding:"20px", color:"yellow"}}>You Logged In :- {userName}</h2>
        <div className='timer'>
        <Timer className="timercount" setStop={setStop} questionNumber={questionNumber}/>
        </div>
      </div>
      <div className='bottom'>
        <Trivia 
          data={data} 
          setStop={setStop}
          setQuestionNumber={setQuestionNumber}
          questionNumber={questionNumber}
        />
      </div>
      </>

    )}
      
    </div>
    <div className="pyramid">
      <ul className='moneyList'>
        {moneyPyramid.map((m)=>(
          <li className={questionNumber===m.id ?"moneyListItem active" : "moneyListItem"}>
        <span className='moneyListItemNumber'>{m.id}</span>
        <span className='moneyListItemAmount'>{m.amount}</span>
      </li>
        ))}
      </ul>
    </div>
      </>
    ):(<Start setUserName={setUserName}/>
    )}
      
    </div>
  );
}
export default App;
