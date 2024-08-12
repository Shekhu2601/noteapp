import React, { useState } from 'react'
import btnimg from '../Asset/btn.png'
import './ContentNote.css'

function ContentNotes(props) {
  let date =new Date().toDateString()
  let time =new Date().toLocaleTimeString()
    
    const [notec , setNotec]= useState({
        content:'',
        date:date,
        time:time
    })
    const [disable ,setDisable]=useState("typing")
    const inputEvent = (event)=>{
        const {name, value}=event.target;
        setNotec((preData)=>{
            return{...preData,
                [name]:value,
            }
        })
        console.log(notec)
    }
    const addEvent =()=>{
        props.passNote(notec)
        setNotec({
            content:'',
            date: date,
            time:time
        })
        

    }
  return (
    <div className='input'>
        
        
      <textarea
      
      type='text'
      placeholder='Enter your text here...........'
      name='content'
      value={notec.content}
      onChange={inputEvent} autoCapitalize='off'></textarea>
      <br/>
      
          

      <button 
      disabled={
        notec.content.length===0
      } className='  btnimg' onClick={addEvent}> <img src={btnimg}></img> </button> 
    </div>
  )

}

export default ContentNotes
