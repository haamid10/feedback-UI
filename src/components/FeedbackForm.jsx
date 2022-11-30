import Card from "./shared/Card"
import {useState} from 'react'
const FeedbackForm = () => {
  const [text, setText] = useState('')
  return (
    <Card>
      <form action="">
        <h2>How would you rate your service with us?</h2>
        <div className="input-group">
          <input type="text " placeholder="write the review" value={text} onChange={(e)=>setText(e.target.value)} />
          <button type="submit " >Send</button>
        </div>
      </form>
      </Card> 
  )    
}

export default FeedbackForm