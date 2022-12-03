import { useParams } from "react-router-dom"
const Post = () => {
  const params= useParams() 
  return (
    <div>Post
      <h1>Post{params.id}</h1>
    </div>
  )
}

export default Post