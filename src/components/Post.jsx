import { Navigate,useNavigate,Routes,Route } from "react-router-dom"

const Post = () => {
  // const params= useParams()
  const navigate = useNavigate()
  const status = 40
  const onClick =()=>{
    navigate('/about')
    return   <p>siuuu</p>
    
  }

  if(status === 404){
    return <Navigate to='/notFound'/>
  }
  return (
    <div>Post
      <h1>Post</h1>
      <a href="/">back home</a>
    <button onClick={onClick}>sooy</button>
  <Routes>
    <Route path="/show" element={<p>Hello world</p>}/>
  </Routes>
    </div>
  )
} 

export default Post