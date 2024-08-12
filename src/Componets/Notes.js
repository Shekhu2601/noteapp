import React, { useState } from 'react'
import './Notes.css'

function Notes(props) {
    const colors = ["red", "yellow", "pink"];
    const [note , setNote]= useState({
        title:'',
        
    })
    const [disable ,setDisable]=useState("typing")
    const inputEvent = (event)=>{
        const {name, value}=event.target;
        setNote((preData)=>{
            return{...preData,
                [name]:value,
            }
        })
        console.log(note)
    }

    const addColor = ()=>{
      props.addColor(colors)
      
      
      console.log(note)
  }


    const addEvent =()=>{
        props.passNote(note)
        props.createbtn()
        setNote(
          {
            title:'',
            
          }
        )

    }
  return (
    <div className='input'>
        <h2>Create New group</h2>
        <label htmlFor="name">Group Name</label> 
        
      <input
      type='text'
      placeholder='name'
      name='title'
      required
      value={note.title}
      onChange={inputEvent} autoCapitalize='off'></input>
      <br/>
      <div className="color">
          <label htmlFor="name">Choose Colour</label>
          <span>
            {colors.map((item, index) => (
              
              <li value={note.bgcolor}
              name="bgcolor"
                key={index}
                className="sidebarList"
                style={{ backgroundColor: item }}
              
              />
              
            ))}
          </span>
        </div>
      <button 
      disabled={note.title.length===0} className='btn' onClick={addEvent}> create</button>
      
    </div>
  )
}

export default Notes
