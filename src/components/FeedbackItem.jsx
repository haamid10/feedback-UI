import Card from "./shared/Card"
const FeedbackItem = ({item}) => {
 
  return (
    <Card >
       {/* <button onClick={reverse=true}></button> */}
    <div className="num-display">{item.rating}</div>
    <div className="text-display">{item.text}</div>
    {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  )
}

export default FeedbackItem 