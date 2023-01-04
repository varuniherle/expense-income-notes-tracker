import { Button } from 'bootstrap';
import React,{useContext} from 'react'
import AuthContext from '../../context/UserAuth'
// import {useHistory} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function LogoutBtn() {
    const {getLoggedIn} = useContext(AuthContext)
    // const history = useHistory()
    const navigate = useNavigate();
    

    async function logOut() {
        await axios.get("https://expense-income-note-tracker.herokuapp.com/auth/logout")
         await getLoggedIn()
        navigate("/")
        
    }
    
    return (
        <div>
            <button onClick = {logOut} className ="btn btn-primary">Log Out</button>
        </div>
    )
}

export default LogoutBtn
