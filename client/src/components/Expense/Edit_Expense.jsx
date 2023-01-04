import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import EachExpense from './EachExpense'


function Edit_Expense() {
    const [expense,setExpense] = useState('')

    const getExpense = () =>{
            axios.get('https://expense-income-note-tracker.herokuapp.com/expense/get_expenses')
            .then((response)=>{
                    setExpense(response.data)       
            })
            .catch((error)=>{
                console.error(error);
                alert("something went wrong")
            })
    }
    
    
    
    console.log(expense)
    useEffect(() =>{
        getExpense()
    },[])
    
    return (
        <div className="container">
            <div className="header pt-2">
                <div className ="filter">
                
                </div>
                <div>
                    <a type ="button" className ="btn btn-info btn-sm" href ="/AddExpense">Add Expense</a>
                </div>
                
            </div>
            {expense? 
            <>
            <div className = "expense-list">
                
                {expense.map((exp) =>{
                    return(

                    <EachExpense 
                        key = {exp._id}
                        _id = {exp._id}
                        expense_name = {exp.expense_name}
                        date ={exp.date}
                        price ={exp.price}
                        description = {exp.description}
                        category ={exp.category}
                        getExpense ={getExpense}
                    />)
                })}
            </div>
            </>
            : 
            <>No data yet</>}
            
        </div>
    )
}

export default Edit_Expense
