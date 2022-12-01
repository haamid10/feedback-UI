import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'
import {motion ,AnimatePresence} from 'framer-motion'


const FeedbackList = ({feedback,onAdd}) => {
  if(!feedback||feedback.length === 0) {
    return <p>No feedbacks Yet</p>
  }

//   return (
//     <div className='feedback-list'>
//      {feedback.map((item)=>(
//       <FeedbackItem onDelete={onAdd} key={item.id} item={item}/>))}</div>
//   )
// }
return (
  <div className='feedback-list'>
    <AnimatePresence>
   {feedback.map((item)=>(
      <motion.div key={item.id}
      initial={{opacity:0}}
      animate={{opacity: 1}}
      exit={{opacity:0}}>
      <FeedbackItem onDelete={onAdd} key={item.id} item={item}/>
      </motion.div>
      ))}
    </AnimatePresence>
    </div>
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