import React, { useEffect, useState } from 'react'
import Note from './Note'
import './note.css'
import axios from 'axios'
import AddNote from './AddNote'
import Search from './Search'
import {Button} from 'react-bootstrap'
import NewNote from './NewNote'

function ViewNotes() {
    const [note,setNote] = useState('')
    const getData = () =>{
        axios.get('https://expense-income-note-tracker.herokuapp.com/notes/get_notes').then(res =>{
            setNote(res.data)
        })
    }

    useEffect(()=>{
        getData()
    },[])
    const [modalShow, setModalShow] = useState(false);
    const [searchText,setSearchText] = useState('')

    console.log(searchText)
    console.log(note)
    const n = Object.values(note).filter((n)=> n.title.toLowerCase().includes(searchText))
    console.log(n)

    return (
    <div className="container">
        <div>
            <Search setSearchText ={setSearchText}/>
        </div>
        <div>
            <Button onClick ={() =>setModalShow(true)} className=" btn-sm btn-info">New Note</Button>
            <NewNote 
            fullscreen={true}
            show={modalShow}
            onHide={() => setModalShow(false)}
            handleNote = {getData}
            />
            
        </div>
        <div className ="note-list">
        
        {note ? 
        <>
        {n.map((n) =>{
        return <Note key = {n._id}
        id = {n._id} 
        description ={n.description}
        title ={n.title}
        created_date={n.created_date}
        handleNote = {getData}
        />})}
        <div>
            
        </div>
        </> 
        : 
        <>No data yet</>
        }
    
        </div>
    </div>
    )
}

export default ViewNotes
