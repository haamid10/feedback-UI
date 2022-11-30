import { useState  } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
function App() {
  const [feedback, setFeedback]= useState(FeedbackData)
  const deleteFeedback = (id) =>{
   setFeedback(feedback.filter((item)=>item.id!==id))
  }
  return (
    < >
     <Header/>
     <div className="container">
      <FeedbackList feedback={feedback} onAdd={deleteFeedback}/>
      <h1>My App</h1>
     </div>
     
    </>
  );
}

export default App;
