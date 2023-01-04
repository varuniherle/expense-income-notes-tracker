import axios from 'axios';
import React,{useState} from 'react'
import {Form,Button, Container, Row,Col} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import './expense.css'

function ExpenseForm() {
    const navigate = useNavigate()
    var today = new Date().toISOString().slice(0, 10)
    const [inputs,setInputs] = useState({
        expense_name: '',
        date:today,
        price:0,
        description :'',
        category:''
        
    })
    const handleChange=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        // console.log(inputs)
    }
    const  handleSubmit =(e) =>{
        // setInputs(values => ({...values, ['caterory']: e.caterory.value}))
        e.preventDefault()
        console.log("handle submit is called",inputs)
        try{
            axios.post("https://expense-income-note-tracker.herokuapp.com/expense/",inputs)
            .then((response) =>{
                alert(response.data.message);
                navigate("/Expense")
              })
              .catch(err =>{
                console.log(err);
                alert(err.response.data.message)
              })
                       
            // alert("data added")
            
            // window.location.reload() //refershes

        }
        catch(error){
            alert("something went wrong")
            console.log(error)
         }
        
    }

    return (
        <div className ="container">
        <a href="/Expense" className ="p-2">Back &laquo;</a>

            <div  className="">
            <Form onSubmit ={handleSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>Name</Form.Label>
                <Col sm={10}>
                <Form.Control type="text" 
                placeholder="Title" 
                name = "expense_name"
                value = { inputs.expense_name || ""}
                onChange = {handleChange}
                required
                />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>Date</Form.Label>
            <Col sm={10}>
            <Form.Control type="date" 

                placeholder="date of the expense" 
                name = "date"
                value = {inputs.date || ""}
                onChange = {handleChange}
                required
            />
            </Col>
            </Form.Group >
                
                
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>price</Form.Label>
            <Col sm={10}>
            <Form.Control type="number" 
                placeholder="price of the expense" 
                name = "price"
                value = {inputs.price || ""}
                onChange = {handleChange}
                min ="0"
                required
                />
            </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>Summary</Form.Label>
            <Col sm={10}>
            <Form.Control type="text" 
                placeholder="description of the expense" 
                name = "description"
                value = {inputs.description || ""}
                onChange = {handleChange}
                required
                />
            </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>Category</Form.Label>
            <Col sm={10}>
            <Form.Select aria-label="Default select example" name ="category" value ={inputs.category} onChange ={handleChange}>
                    <option value="Investment">Investment</option>
                    <option value="Food">Food</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Gifts">Gifts</option>
                    <option value="HouseHold">HouseHold</option>
                    <option value="Medicine">Medicine</option>
                    <option value="Education">Education</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Others">Others</option>
            </Form.Select>
            </Col>
            
            </Form.Group>
            <Form.Group>
            <Button variant="primary" type="submit">Save</Button>
            </Form.Group>
                
            
            </Form>
            </div>
            <div></div>
        </div>
    )
}

export default ExpenseForm
