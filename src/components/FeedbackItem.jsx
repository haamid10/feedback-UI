import {FaTimes} from 'react-icons/fa'
import Card from "./shared/Card"
const FeedbackItem = ({item,onDelete}) => {
 
  return (
    <Card >
       {/* <button onClick={reverse=true}></button> */}
    <div className="num-display">{item.rating}</div>
    <button className='close' onClick={()=>onDelete(item.id)}><FaTimes/>
     </button>
    <div className="text-display">{item.text}</div>
    {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  )
}

export default FeedbackItem 