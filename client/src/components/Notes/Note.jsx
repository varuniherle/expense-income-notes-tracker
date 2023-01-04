import React,{useState} from 'react'
import {MdDeleteForever, MdEdit} from 'react-icons/md'
import {Button, Form, FormControl} from 'react-bootstrap'
import './note.css'
import axios from 'axios'
import Popup from 'reactjs-popup';
import Modal from 'react-bootstrap/Modal';
import EditModal from './EditModal'


function Note({id,title,description,created_date,handleNote}) {

    

    const [modalShow, setModalShow] = useState(false)

    return (
        <div>
        <div className="note" onClick={() => setModalShow(true)}>
            <div className ="note-header">
                <span style ={{'textTransform':'uppercase'}}><b>{title}</b></span>
                <small className="date"> {created_date.split("T")[0]}</small>
            </div>
            
                {description.split('\n').map(e =><span> {e}</span>)}
            
        </div>   
            
            <EditModal 
            show={modalShow}
            onHide={() => setModalShow(false)}
            id ={id}
            title ={title}
            created_date ={created_date}
            description ={description}
            handleNote = {handleNote}
            />
        </div>
    )
}

export default Note
