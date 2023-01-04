import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import Each_income from './Each_income'
import './income.css'
import AddIncomeModal from './AddIncomeModal'
function Income() {
    const [data,setData] = useState('')
    const [newIncome,setNewIncome] = useState(false) 

    const getIncome = () =>{
        axios.get('https://expense-income-note-tracker.herokuapp.com/income/')
        .then((response) =>{
            
            if(response.status == 200){
                console.log(response.data)
                setData(response.data)
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    

    useEffect(()=>{
        getIncome()
    },[])
    
    return (
        <div className ="scroll container">
            <div className ="pt-3">
            <Button className ="btn-info" onClick ={()=>setNewIncome(true)}>New Income</Button>
            <AddIncomeModal 
            getIncome ={getIncome}
            show = {newIncome}
            onHide ={() =>setNewIncome(false)}
            />
            </div>
            
            {data ? <>
            <div className = "income-list">
            {data.map((d) =>{
                return (
                <div key = {d._id}>
                    <Each_income income = {d} getIncome={getIncome}/>
                </div>
                )
            })}
            </div>
            </>
            :
            <></>
            
        }
            
        </div>
    )
}

export default Income
