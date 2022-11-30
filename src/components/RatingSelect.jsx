import { useState } from "react"


const RatingSelect = () => {
  const [selected ,setSelected] = useState(10)
  const handleChange =(e)=>{
     
    setSelected(e.target.value   )
  }
  return (
   <ul className="rating">
    <li>
      <input 
      type="radio" 
      name="rating"
      id='num1'
      value='1' 
      onChange={handleChange}
       checked={selected==1} />
    </li>
    <label htmlFor='num1'>1</label>

   
   </ul>
 
  )
}

export default RatingSelect   