import {FaTimes} from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Card from "./shared/Card"
const FeedbackItem = ({item}) => {
  const{deleteFeedback} =useContext(FeedbackContext)
 
  return (
    <Card >
       {/* <button onClick={reverse=true}></button> */}
    <div className="num-display">{item.rating}</div>
    <button className='close' onClick={()=>deleteFeedback(item.id)}><FaTimes color='purple'/>
     </button>
    <div className="text-display">{item.text}</div>
    {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  )
}

export default FeedbackItem 