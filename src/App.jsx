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

import {FeedbackProvider} from "./context/FeedbackContext";

function App() {
  const [feedback, setFeedback]= useState(FeedbackData)

 

const addFeedback = (newFeedback)=>{
  // const id= Math.floor(Math.random()*100)+1
  // const newFeedback=[...feedback,id]
  setFeedback([...feedback,newFeedback])
}
  return ( 
    <FeedbackProvider>
    <Router>
     <Header/>
     <div className="container">
      <Routes>     <Route exact path="/" element={
        <>
            <FeedbackForm /> 
            <FeedbackStats/>
             <FeedbackList  />
        </>
      }> 
    
      </Route>
 
             <Route path="/about" element= {<AboutPage/>}></Route>
             <Route path="/post/*" element= {<Post/>}></Route>
      </Routes>
     </div>
     <AboutIconLink/> 
        
    </Router>
    </FeedbackProvider>
  );
}

export default App;
