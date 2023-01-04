import axios from 'axios'
import React, { useState,useContext,useEffect, createContext } from 'react'

const AuthContext = createContext()

function AuthContextProvider(props) {
    const [loggedIn,setLoggedIn] =useState(undefined)

    async function getLoggedIn() {
        const loggedInRes = await axios.get('https://expense-income-note-tracker.herokuapp.com/auth/loggedIn')
        setLoggedIn(loggedInRes.data)
        // console.log(loggedInRes.data)
        

    }
    useEffect(() => {
        getLoggedIn()
    }, [])
    console.log(loggedIn)
    
    return (
        <AuthContext.Provider value ={{loggedIn,getLoggedIn}}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext
export {AuthContextProvider}; 
