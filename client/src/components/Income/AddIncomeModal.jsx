import axios from 'axios';
import React, { useState } from 'react'
import {Modal,Button, Form} from 'react-bootstrap'
function AddIncomeModal(props) {
    const [messages, setMessages] = useState({
        code:false,
        message:'',
        status: 0
    })
    const [income,setIncome] = useState({
        income_name:'',
        income_amount:0,
        income_date:'',
        category:''
    })
    const handleChange= (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name,value)
        setIncome(values =>({...values,[name]:value}))
        // console.log(income)
    }
    const handleSubmit =(e)=>{
        console.log(income)
        axios.post("https://expense-income-note-tracker.herokuapp.com/income/",income)
        .then((response) =>{
            if(response.status == 200){
                console.log(response.data.message)
                setMessages({
                    code:true,
                    status:200,
                    message:"Record added"
                })
                props.getIncome()

            }
            else{
                console.log(response.message.data, "oops something went wrong")
                setMessages({
                    code:true,
                    status:response.status,
                    message:"OOps somenting went wrong"
                })
            }
        })
        .catch((error)=>{
            console.log("oops something went wrong while sending the request")
            setMessages({
                code:true,
                status:500,
                message:"oops something went wrong while sending the request"
            })
        })
        e.preventDefault()
    }
    return (
        <div>
            <Modal 
            {...props}
            fullscreen = {true}
            >
            <Modal.Header closeButton>
            <Modal.Title>New Income</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                <Form onSubmit ={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Income Name</Form.Label>
                        <Form.Control
                        name ="income_name"
                        type = "text"
                        onChange = {handleChange}
                        value = {income.income_name}
                        
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Income date</Form.Label>
                        <Form.Control
                        name ="income_date"
                        type = "date"
                        value = {income.income_date}
                        onChange = {handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Income amount</Form.Label>
                        <Form.Control
                        name ="income_amount"
                        type = "number"
                        value = {income.income_amount}
                        onChange = {handleChange}
                        />
                    <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Select name = "category" 
                    value = {income.category} 
                    onChange ={handleChange}
                    className="mb-3"
                    >
                        <option value="salary">Salary</option>
                        <option value="gift">Gift</option>
                        <option value="intrest">Intrest</option>
                        <option value="parents">Parents</option>
                    </Form.Select>
                </Form.Group>
                    </Form.Group>
                    <Button type = "submit">Save</Button>
                </Form>
            {messages.code == true? 
            <>
            
            {messages.status == 200? 
            <p className ="text-success">{messages.message}</p>
            :
            <p className ="text-danger">{messages.message}</p>
            }
            </>
            :<>
            
            </>}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>

            </Modal>
        </div>
    )
}

export default AddIncomeModal
