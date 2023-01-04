import React,{useEffect,useState} from 'react'
import { Button, Table } from 'react-bootstrap'
import axios from 'axios'
import { CSVLink } from "react-csv"


function ExportExpense() {
    const [expense,setExpense] = useState('')

    const getExpense = () =>{
            axios.get('https://expense-income-note-tracker.herokuapp.com/charts/get_expense')
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
        <div>
            {expense?<>

                <CSVLink
                    data={expense}
                    filename={"expense-file.csv"}
                    className="btn btn-primary"
                    target="_blank"
                    className ="btn btn-info p-3"
                    >
                    Download 
            </CSVLink>;
            
                <div className ="table-responsive">
                <Table striped bordered hover border-success>
                <thead >
                    <td>Name</td>
                    <td>Price</td>
                    <td>Category</td>
                    <td>Date</td>
                </thead>
            <tbody>

                    {expense.map((e) =>{
                        return(<tr>
                            <td>{e.expense_name}</td>
                            <td>{e.date}</td>
                            <td>{e.price}</td>
                            <td>{e.category}</td>
                            </tr>)
                    })}
            </tbody>

            </Table>
            </div>
            
            </>:<></>}
            
        </div>
    )
}

export default ExportExpense
