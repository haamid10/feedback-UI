import {createContext,useState,useEffect} from 'react'

const FeedbackContext= createContext()

export const FeedbackProvider =({children})=>{
  const [feedback, setFeedback]=useState([])


  useEffect (()=>{
     fetchFeedback()
  },[])

  const fetchFeedback = async ()=>{
    const res = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
    const data = await res.json()

    setFeedback(data)
  }

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