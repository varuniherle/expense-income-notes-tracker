import React,{useEffect,useState} from 'react'
import { Button, Table } from 'react-bootstrap'
import axios from 'axios'
import { CSVLink } from "react-csv"

function ExportIncome() {
    const [data,setData] = useState('')
    let d;
     
    
    useEffect(()=>{
        const getIncome = async () =>{
            try{
               const response = await axios.get('https://expense-income-note-tracker.herokuapp.com/charts/get_income');
               await setData(response.data)
               console.log(data)
            }
            catch(error){
                console.log(error)
            }
            
        }
        
        getIncome()
    },[])
    
    return (
        <div>
            {data? 
            <>
            <p>theres a data</p>
            <CSVLink
                    data={data}
                    filename={"data-file.csv"}
                    className="btn btn-primary"
                    target="_blank"
                    className ="btn btn-info p-3"
                    >
                    Download 
            </CSVLink>;
            <div class="table-responsive">
            <Table striped bordered hover>
                <thead >
                    <td>Name</td>
                    <td>Date</td>
                    <td>Price</td>
                    <td>Category</td>

                </thead>
            <tbody>

                    {data.map((e) =>{
                        return(<tr>
                            <td>{e.income_name}</td>
                            <td>{e.income_amount}</td>
                            <td>{e.category}</td>
                            <td>{e.income_date}</td>
                            </tr>)
                    })}
            </tbody>

            </Table>
            </div>
            
            </>
            :<>
            
            </>
            }
        </div>
    )
}

export default ExportIncome
