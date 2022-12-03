import React from 'react'
import { Link } from "react-router-dom"


const Header = ({bgColor,text,textColor}) => {
  const headerStyles ={
    backgroundColor: bgColor,
    color: textColor,
    
     
  }

  return (
    <header style={headerStyles}>
    <div className='container'> 
    <Link className='header' style={headerStyles} to="/"> <h1>{text}</h1></Link>
     
    </div>
    </header>
  )
}
Header.defaultProps ={
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95'
}
export default Header