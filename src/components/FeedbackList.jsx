import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'

const FeedbackList = ({feedback,onAdd}) => {
  if(!feedback||feedback.length === 0) {
    return <p>No feedbacks Yet</p>
  }

  return (
    <div className='feedback-list'>
     {feedback.map((item)=>(
      <FeedbackItem onDelete={onAdd} key={item.id} item={item}/>))}</div>
  )
}

FeedbackList.PropType ={
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    })
  )
}

export default FeedbackList