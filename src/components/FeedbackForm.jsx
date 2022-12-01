import Card from "./shared/Card"
import RatingSelect from "./RatingSelect" 
import Button from "./Button"
import {useState} from 'react'

const FeedbackForm = ({onadd}) => {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [rating, setRating] = useState(10)
  const [message, setMessage] = useState('')
  const handleTextChange = (e)=>{
    if(text === ''){
      setBtnDisabled(true)
      setMessage(null)}
      else if(text !== ''&&text.trim(). length<= 10){
        setMessage('please enter more than characteristics')

        setBtnDisabled(true)
      }
    else{
      setBtnDisabled(false)
      setMessage('')
    }
    setText(e.target.value)
  }
  const handleSubmit =(e)=>{
  e.preventDefault()
  if(text.trim().length > 10){
    const newFeedback ={
      rating,
      text,
    }
    
    onadd(newFeedback)
    setText('')
  }
  }
  return (
    <Card>
      <form action="" onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select ={(rating)=>setRating(rating)}/> 
        <div className="input-group">
          <input type="text " placeholder="write the review" value={text} onChange={handleTextChange} />
          <Button type="submit"   isDisabled={btnDisabled} >Send</Button>
        </div >
        {message&&<div className="message ">{message}</div>}
      </form>  
      </Card> 
  )    
}

export default FeedbackForm