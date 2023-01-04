import React,{useState} from 'react'
import './note.css'
import {Button} from 'react-bootstrap'
import axios from 'axios'

function AddNote({handleNote}) {
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
            handleNote()
            
            
        }).catch((error) =>{
            console.log(error)
            
            alert("something went wrong")

        })
        console.log("array" , note)
        
    }
    return (
        <div>
            <form onSubmit ={handleSubmit}>
            <div className ="note new">
                <input 
                name = 'title'
                placeholder ="type here to add title"
                value ={note.title}
                onChange ={handleChange}
                type  = "text"
                />
                <textarea rows='16' 
                cols ='16' 
                name = 'description'
                placeholder ="type here to add a note"
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
    )
}

export default AddNote
