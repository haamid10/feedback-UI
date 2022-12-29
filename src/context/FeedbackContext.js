import {createContext,useState,useEffect} from 'react'

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
    const res = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
    const data = await res.json()

    setFeedback(data)
    setIsLoading(false)
  }

 
  // edit feedback 
 const editFeedback= (item)=>{
  setEditFeedback({
    item,
    edit:true
  })
 }
//  kkk

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

  // add feedback
  const addFeedback = (newFeedback)=>{
    // const id= Math.floor(Math.random()*100)+1
    // const newFeedback=[...feedback,id]
    setFeedback([...feedback,newFeedback])
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