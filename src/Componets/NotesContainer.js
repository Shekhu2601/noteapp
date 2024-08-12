import { useEffect, useState } from "react"
import Notes from "./Notes"
import Sidebar from "./Sidebar"
import './NoteContainer.css'
import img1 from '../Asset/img1.png'
import enc from '../Asset/encription.png'
import plush from '../Asset/plush.png'

function NotesContainer(props)  {
    const [addItem ,setAddItem]= useState(JSON.parse(localStorage.getItem("title")) ||[] )
    const [cbtn, setCbtn] = useState(false);
    
    
    const red =(red)=>{
      
        
        

     
    }
    const createbtn = ()=>{
        setCbtn(!cbtn)
    }
    const addNote =(note)=>{
      
      setAddItem((preData)=>{
        return[...preData,note]
      })
      console.log(note)
    }
    useEffect(()=>{
  localStorage.setItem("title",JSON.stringify(addItem))
    },[addItem])
    return (
      <div className="NoteContainer">
       
       
        
      <div className="sidebar">
        <h1 className="heading">Pocket Note</h1>
        <button onClick={() => setCbtn(!cbtn)} className="Gbtn"><img src={plush} alt="plush"></img> </button>
      {addItem.map((val, index)=>{
          return(
            <Sidebar
            
            
            key={index}
            id={index}
            title={val.title}

            
            />
            
          )
          
        })}

      </div>
        <div  className={`hide ${cbtn ? "createNote" : ""}`} >
        <Notes  red={red} createbtn={createbtn} passNote={addNote}/>
        </div>
        <div className="mainPage">
            <img className="imgB" src={img1} alt="img"></img>
            <h1>Pocket Notes</h1>
            <p>Send and receive messages without keeping your phone online.
           </p>
            <p> Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
            <div className="footer">
              <img  src={enc} alt="enc"></img>
              <p className="enc" >  end-to-end encrypted</p>  
            </div>
        </div>
      </div>
    );
  }
  

export default NotesContainer

