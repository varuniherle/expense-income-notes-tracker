import axios from 'axios';
import React,{useState} from 'react'
import {Button, Form, FormControl} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';

function EditModal(props) {

        const [edit,setEdit] = useState({
        '_id':props.id,
        'title':props.title,
        'created_date':props.created_date,
        'description':props.description
    })
    const handleDelete =() =>{
      axios.post('https://expense-income-note-tracker.herokuapp.com/notes/delete',{id:edit._id}).then((res)=>{
          props.handleNote()
      }).catch((err) =>{
          alert("something went wrong")
          console.log(err)
      })
  }

      const handleEditChange =(e)=>{
        setEdit(values =>({...values,[e.target.name]:e.target.value}))
       
    }
    const handleEditSubmit =(e) =>{
        e.preventDefault()
        axios.post('https://expense-income-note-tracker.herokuapp.com/notes/edit_note',edit)
        .then((res) =>{
            if (res.status== 200){
                props.handleNote()
            }
            else{
                alert(res.data.message)
            }
        })
        .catch((error) =>{
            console.log(error)
            alert("something went wrong")
        })
        console.log(edit)
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
          {edit.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Edit here</h4>
        <Form onSubmit ={handleEditSubmit}>
            <Form.Control 
            as= "textarea"
            value ={edit.description}
            cols ="10"
            rows ="8"
            name ="description"
            onChange ={handleEditChange}
            />
            <Button type ="submit">Save</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleDelete}>Delete</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </div>
    )
}

export default EditModal
