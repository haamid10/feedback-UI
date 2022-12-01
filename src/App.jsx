import { useState  } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

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
    < >
     <Header/>
     <div className="container">
      <FeedbackForm onadd={addFeedback}/> 
      <FeedbackStats feedback={feedback}/>
      <FeedbackList feedback={feedback} onAdd={deleteFeedback}/>
      <h1>My App</h1>
     </div>
     
    </>
  );
}

export default App;
