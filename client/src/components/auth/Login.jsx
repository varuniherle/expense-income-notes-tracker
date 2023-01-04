import React from 'react'
import {Form,Button, Container} from 'react-bootstrap'
import { useState,useContext } from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import AuthContext from '../../context/UserAuth';

function Login() {
    const navigate = useNavigate()
    const {getLoggedIn} = useContext(AuthContext)
    const [inputs,setInputs] = useState({
        email:'',
        password:'',
    });
    const [error , setError] = useState(false)
    const handleChange =(e) =>{
        setError(false)
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name,value)
        setInputs(values =>({...values,[name]:value}))
    }
    const handleSubmit= (e) =>{
        e.preventDefault()
        // alert(inputs.email)
        console.log(inputs)
        try{
            axios.post('https://expense-income-note-tracker.herokuapp.com/auth/login',inputs,{
                withCredentials:true,
            })
            .then((response)=>{
                console.log(response)
                if(response.status ==200){
                    // alert("Logged In ")
                    getLoggedIn()
                    navigate("/")
                    
                }
                else{
                    setError(true)
                }
                
            })
            .catch((error) =>{
                // alert("couldn't jsdi")
                console.log(error)
                setError(true)
            })
        }
        catch(error){
            console.log("error while sedning the resquest")
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
                
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
    </Form>
    {error ? 
    <> <p className ="text-danger">Incorrect userId or password</p>
    </>:<></>}
    </Container>
    </div>
    )
}

export default Login
