import { useState  } from "react";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackData from "./data/FeedbackData";
function App() {
  const []= useState(FeedbackData)
  return (
    < >
     <Header/>
     <div className="container">
      <FeedbackItem/>
      <h1>My App</h1>
     </div>
     
    </>
  );
}

export default App;
