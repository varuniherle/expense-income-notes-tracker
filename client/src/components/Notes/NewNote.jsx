import axios from 'axios';
import React,{useState} from 'react'
import {Button, Form, FormControl} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';

function NewNote(props) {
    var today = new Date().toISOString().slice(0, 10)
    const [note,setNote] = useState({
        'title':'',
        'description' :'',
        'created_date':today
    })

    const handleChange =(e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setNote(values =>({...values,[name]:value}))
    }
    const handleSubmit =(e) =>{
        // e.preventDefault()
        axios.post('https://expense-income-note-tracker.herokuapp.com/notes',note).then((res) =>{
            alert(res.data.message)
            props.handleNote()


        }).catch((error) =>{
            console.log(error)
            
            alert("something went wrong")

        })
        console.log("array" , note)
        
    }
    return (
        <div>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         My Notes
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <div>
            <form onSubmit ={handleSubmit}>
            <div className ="note new">
                <input 
                name = 'title'
                placeholder ="Title"
                value ={note.title}
                onChange ={handleChange}
                type  = "text"
                />
                <textarea rows='8' 
                cols ='10' 
                name = 'description'
                placeholder ="Type here to add a note"
                type ="text"
                value = {note.description}
                onChange ={handleChange}
                name = 'description'
                />
                
                <div className = 'note-footer p-2'>
                <Button className="btn btn-primary btn-xs" type ='submit'>Save</Button>
                </div>
            </div>
            </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </div>
    )
}

export default NewNote
