import { useState } from "react"

const FeedbackItem = () => {
  const [rating ,setRating]= useState(7)
  const [text ,setText]= useState('this is an example of us ')
  const handleClick = () => {
    setRating(10)
  }
  return (
    <div className='card'>
    <div className="num-display">{rating}</div>
    <div className="text-display">{text}</div>
    <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default FeedbackItem 