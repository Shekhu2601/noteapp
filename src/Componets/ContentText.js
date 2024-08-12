import React from 'react'
import './ContentText.css'

function ContentText(props) {
  return (
    <div
      className="content-container">
        
        
        <p className="text"> {props.content}</p>
        <p className='date'> {props.date}</p>
        <p className='time'> {props.time}</p>
      </div>
      
    
  )
}

export default ContentText

