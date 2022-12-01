import { useState  } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from './pages/AboutPage'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  const [feedback, setFeedback]= useState(FeedbackData)

  const deleteFeedback = (id) =>{
    if(window.confirm('Are you sure you went to Delete')){
   setFeedback(feedback.filter((item)=>item.id!==id))}
  }

const addFeedback = (newFeedback)=>{
  // const id= Math.floor(Math.random()*100)+1
  // const newFeedback=[...feedback,id]
  setFeedback([...feedback,newFeedback])
}
  return (
    <Router>
     <Header/>
     <div className="container">
      <route exact path="/"> 
        <FeedbackForm onadd={addFeedback}/> 
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} onAdd={deleteFeedback}/>
      </route>
             <route path="/about" component= {AboutPage}/>
     </div>

    </Router>
  );
}

export default App;
