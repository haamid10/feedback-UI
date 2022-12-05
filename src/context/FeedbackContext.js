import {createContext,useState} from 'react'

const FeedbackContext= createContext()

export const FeedbackProvider =({children})=>{
  const [feedback, setFeedback]=useState([
    {
      id:1,
      text: 'this is item from context',
      rating: 10,  
    }
  ])

  const [feedbackEdit,setEditFeedback] =useState({
    item:{},
    edit:false
  })
  // edit feedback
 const editFeedback= (item)=>{
  setEditFeedback({
    item,
    edit:true
  })
 }



  // delete feedback
  const deleteFeedback = (id) =>{
    if(window.confirm('Are you sure you went to Delete')){
   setFeedback(feedback.filter((item)=>item.id!==id))}
  }

  // add feedback
  const addFeedback = (newFeedback)=>{
    // const id= Math.floor(Math.random()*100)+1
    // const newFeedback=[...feedback,id]
    setFeedback([...feedback,newFeedback])
  }
  return <FeedbackContext.Provider value={{
    feedback,
    deleteFeedback,
    addFeedback,
    editFeedback,
    feedbackEdit,
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext