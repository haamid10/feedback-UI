import { useState  } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";
import AboutPage from './pages/AboutPage'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Post from "./components/Post";

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
      <Routes>     <Route exact path="/" element={
        <>
            <FeedbackForm onadd={addFeedback}/> 
            <FeedbackStats feedback={feedback}/>
             <FeedbackList feedback={feedback} onAdd={deleteFeedback}/>
        </>
      }> 
    
      </Route>
 
             <Route path="/about" element= {<AboutPage/>}></Route>
             <Route path="/post:id" element= {<Post/>}></Route>
      </Routes>
         <AboutIconLink/>
     </div>

    </Router>
  );
}

export default App;
