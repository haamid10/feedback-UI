import Card from "./shared/Card"
const FeedbackItem = ({item}) => {
 
  return (
    <Card>
    <div className="num-display">{item.rating}</div>
    <div className="text-display">{item.text}</div>
    {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  )
}

export default FeedbackItem 