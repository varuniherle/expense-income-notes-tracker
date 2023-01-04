import React from 'react'
import {Form,Button, Container} from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function Register() {
    
    const navigate = useNavigate()
    const [inputs,setInputs] = useState({
        email:'',
        password:'',
        verifypassword:'',
        name:''
    });
    const [error,setError] =useState(false)
    const [error_message,setMessage] = useState('')
    const handleChange =(e) =>{
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name,value)
        setError(false)
        setMessage('')
        setInputs(values =>({...values,[name]:value}))
    }
    const handleSubmit= (e) =>{
        e.preventDefault()
        // alert(inputs.email)
        // console.log(inputs)
        try{
            axios.post('https://expense-income-note-tracker.herokuapp.com/auth/',inputs,{
                withCredentials:true,
            })
            .then((response)=>{
                try{
                    if (response.data!=''){
                        // alert(response.data)
                        setError(true)
                        setMessage(response.data.message)
                        console.log(response.data)
                    }
                    else{
                    alert("Registered successfully")
                        navigate('/login')
                    }
                }
                catch(error){
                    console.log(response)
                }
                
            })
            .catch((error) =>{
                
                console.log(error)

            })
        }
        catch(error){
            // alert("somehthing went worng")
            setError(true)
            setMessage('Server error, could not send the request')
            console.log(error)
        }
    }
    return (
        <div>
            <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                     type="email" 
                     placeholder="Enter email" 
                     name = "email"
                     value = {inputs.email || ''}
                     onChange ={handleChange}
                     required/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password"
                        name = "password"
                        value= {inputs.password || ''}
                        onChange ={handleChange}
                        required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Verify Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Verify Password" 
                        name = 'verifypassword'
                        value = {inputs.verifypassword}
                        onChange = {handleChange}
                        required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                     type="text" 
                     placeholder="Enter name" 
                     name = "name"
                     value = {inputs.name || ''}
                     onChange ={handleChange}
                     required/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit" >
                    Submit
                </Button>
    </Form>
    {error? <>
    <p className ="text-danger">{error_message}</p>
    </>:<></>}
    </Container>
    </div>
    )
}

export default Register
