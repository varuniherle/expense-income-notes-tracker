import React, {useState } from 'react'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import {Button,Form} from 'react-bootstrap'


function EditModalExp(props) {

    const [exp,setexp] = useState({
        'price':props.price,
        'description':props.description,
        'expense_name':props.expense_name,
        '_id':props._id,
        'date':props.date,
        'category':props.category
    })
    const handleDelete = () =>{
       
        axios.post('https://expense-income-note-tracker.herokuapp.com/expense/delete',{id:exp._id})
        .then((res) =>{
            console.log(res)
            props.getExpense()
        })
        .catch((error)=>{
            alert("something went wrong")
        })
    }
    const handleChange= (e) =>{
        setexp(values =>({...values,[e.target.name]:e.target.value}))
    }
    const handleEdit = (e) =>{
        axios.post('https://expense-income-note-tracker.herokuapp.com/expense/edit_expense',exp)
        .then((res) =>{
            console.log(res)
            if(res.status == 200)
            {
                props.getExpense()
                alert(res.data.message)
            }
            else{
                alert(res.data.message)
            }
        })
        .catch((error)=>{
            console.log(error)
            alert("something went wrong")
            
        })
        console.log(exp)
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
          {props.expense_name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Edit</h4>
        <Form onSubmit = {handleEdit}>
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                        type = "number"
                     
                        placeholder ="price"
                        onChange ={handleChange}
                        value ={exp.price}
                        name = "price"
                        min ="0"
                        required
                        />
                        
                        <Form.Label>Let me here your story</Form.Label>
                        <Form.Control
                        as = "textarea"
                        name = "description"
                        onChange = {handleChange}
                        value = {exp.description}
                        required
                        />
                    <Form.Select name ="category" value ={exp.category} onChange ={handleChange}>
                    <option value ={exp.category}>{exp.category}</option>
                    <option value="Investment">Investment</option>    
                    <option value="Food">Food</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Gifts">Gifts</option>
                    <option value="HouseHold">HouseHold</option>
                    <option value="Medicine">Medicine</option>
                    <option value="Education">Education</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Others">Others</option>
            </Form.Select>

                        <br></br>
                        <Button type = "submit" >Submit</Button>
                        
                        
                    </Form>
      </Modal.Body>
      <Modal.Footer>
      <Button onClick ={handleDelete} >Delete</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </div>
    )
}

export default EditModalExp
