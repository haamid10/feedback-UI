import Card from "./shared/Card"
import Button from "./Button"
import {useState} from 'react'
const FeedbackForm = () => {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const handleTextChange = (e)=>{
    if(text === ''){
      setBtnDisabled(true)
      setMessage(null)}
      else if(text !== ''&&text.length<= 10){
        setMessage('please enter more than characteristics')

        setBtnDisabled(true)
      }
    else{
      setBtnDisabled(false)
      setMessage('')
    }
    setText(e.target.value)
  }
  return (
    <Card>
      <form action="">
        <h2>How would you rate your service with us?</h2>
        <div className="input-group">
          <input type="text " placeholder="write the review" value={text} onChange={handleTextChange} />
          <Button type="submit"   isDisabled={btnDisabled}>Send</Button>
        </div >
        {message&&<div className="message ">{message}</div>}
      </form>  
      </Card> 
  )    
}

export default FeedbackForm