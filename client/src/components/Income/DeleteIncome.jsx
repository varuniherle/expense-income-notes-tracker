import { Button } from 'react-bootstrap'
import React from 'react'
import axios from 'axios'

function DeleteIncome(props) {
    
    const handle_delete = (_id) =>{
        console.log(_id)
        axios.post("https://expense-income-note-tracker.herokuapp.com/income/delete_income",{_id:_id})
        .then((response)=>{
            if(response.status == 200){
                console.log(response.data.message)
                window.location.reload(false);
                
            }
            else{
                console.log(response)
            }
        })
        .catch((error) =>{
            console.log(error)
        })
    }
    return (
        <div>
            <Button onClick ={() =>handle_delete(props._id)}>Delete </Button>
        </div>
    )
}

export default DeleteIncome
