import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import ContentText from "./ContentText";
import ContentNotes from "./ContentNotes";
import arro from '../Asset/arrro.png'

function Sidebar(props) {
    const [addText , SetAddText]= useState(JSON.parse(localStorage.getItem("content"))|| [])
    
    const addNote =(notec)=>{
        
        SetAddText((preData)=>{
          return[...preData,notec]
        })
        console.log(notec)
      }
      
    
  const [group, setGroup] = useState(true);
  const [groupr, setGroupr] = useState(true);
  const show =()=>{
    setGroup(!group)
    setGroupr(!groupr)
  }
  const imgb= props.title
  let cap = imgb.slice(0,1) + imgb.slice(1,2)
  let GroupName =imgb.slice(0,1).toUpperCase() + imgb.slice(1,)
  
  useEffect(()=>{
localStorage.setItem("content",JSON.stringify(addText))
  },[addText])
  return (
    <>
      <div className="container">
        <p onClick={show}   style={{backgroundColor:props.bgcolor}} className="imgbox"> {cap.toUpperCase() }</p>
        <h1 className="name"> {GroupName}</h1>
      </div>
      <div className={`content ${group ? "hidec" : "content "} ,hidec ${groupr ? "content":" "} `}>
        <div className="page">
          <header>
          <button onClick={() => setGroup(!group )}  className="mobile">
            <img src={arro} alt="arro"></img>
          </button>
            <p className="imgboxc">

              {cap.toUpperCase() }</p>
            <h1 className="namec"> {GroupName}</h1>
          </header>
          <div className="area"> 
          {addText.map((val, index)=>{
          return(
            <ContentText
            key={index}
            id={index}
            content={val.content}
            date={val.date}
            time={val.time}
            
            />
          )
        })}
            
          </div>
          <div className="input">
            <ContentNotes passNote={addNote}/>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
