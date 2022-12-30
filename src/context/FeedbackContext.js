import {createContext,useState,useEffect} from 'react'
import { json } from 'react-router-dom'

const FeedbackContext= createContext()

export const FeedbackProvider =({children})=>{
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback]=useState([])
  const [feedbackEdit,setEditFeedback] =useState({
    item:{},
    edit:false
  })


  useEffect (()=>{
     fetchFeedback()
  },[])

  const fetchFeedback = async ()=>{
    const res = await fetch(`/feedback?_sort=id&_order=desc`)
    const data = await res.json()

    setFeedback(data)
    setIsLoading(false)
  }


  // add Feedback

  const addFeedback = async (newFeedback)=>
  {
    const b= await fetch('/feedback',
    {
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(newFeedback)
    })
    const data  = await b.json()
    setFeedback([data,...feedback])  
  }
  
  // edit feedback 
 const editFeedback= (item)=>{
  setEditFeedback({
    item,
    edit:true
  })
 }
// update feedback
 const updateFeedback =(id,updItem)=>{
  console.log(id,updItem)
  setFeedback(feedback.map((item)=>(item.id==id ? {...item,...updItem}:item))
  )

 }
  // delete feedback
  const deleteFeedback = (id) =>{
    if(window.confirm('Are you sure you went to Delete')){
   setFeedback(feedback.filter((item)=>item.id!==id))}
  }
  return <FeedbackContext.Provider 
  value={{
    feedback,
    feedbackEdit,
    isLoading,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback,
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext