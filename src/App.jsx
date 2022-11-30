import { useState  } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
function App() {
  const [feedback, setFeedback]= useState(FeedbackData)
  const deleteFeedback = (id) =>{
    if(window.confirm('Are you sure you went to Delete')){
   setFeedback(feedback.filter((item)=>item.id!==id))}
  }
  return (
    < >
     <Header/>
     <div className="container">
      <FeedbackStats feedback={feedback}/>
      <FeedbackList feedback={feedback} onAdd={deleteFeedback}/>
      <h1>My App</h1>
     </div>
     
    </>
  );
}

export default App;
