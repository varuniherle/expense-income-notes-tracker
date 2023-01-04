import axios from 'axios'
import e from 'cors'
import React, {useState} from 'react'
import { Form,Button } from 'react-bootstrap'

function Edit_Income(props) {

    const [message,setMessage] = useState('')
    const [code,setCode] = useState(false)

    const [edit,setEdit] = useState({
        income_name: props.income.income_name,
        income_amount: props.income.income_amount,
        category:props.income.category,
        _id:props.income._id,
        income_date:props.income.income_date.split("T")[0]
    })

    const onChangeHandler =(e)=>{
        
        const name = e.target.name;
        const value = e.target.value
        setEdit(values =>({...values, [name]:value}))
        // console.log(edit)
    }
    const handleSubmit=(e)=>{
        console.log("submit",edit)
        axios.post("https://expense-income-note-tracker.herokuapp.com/income/edit_income",edit).
        then((response)=>{
            console.log(response)
            if(response.status == 200){
                console.log(response.data.message)
                setCode(true)
                setMessage(response.data.message)
                props.getIncome()
            }
            else{
                setCode(true)
                setMessage('Couldnt update')
            }
        })
        .catch((error)=>{
            console.log(error)
            setCode(true)
            setMessage('Oops somrthing went wrong while sending the request')


        })
        e.preventDefault();
    }
    return (
        <div>
            
            <Form onSubmit ={handleSubmit}>
            <Form.Group className="mb-3">
            <Form.Label>Income name</Form.Label>
                <Form.Control type = "text" 
                name = "income_name" 
                onChange ={onChangeHandler}
                value = {edit.income_name}
                required
            />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Income amount</Form.Label>
                <Form.Control type = "text" 
                name = "income_amount" 
                onChange ={onChangeHandler}
                value = {edit.income_amount}
                required
            />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Income date</Form.Label>
                <Form.Control type = "date" 
                name = "income_date" 
                onChange ={onChangeHandler}
                value = {edit.income_date}
                required
            />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Income category</Form.Label>
            
            <Form.Select type = "checkbox" 
                name = "category" 
                onChange ={onChangeHandler}
                value = {edit.category}
            >
            <option value ={edit.category}>{edit.category}</option>
            <option value="Salary">Salary</option>
            <option value="Gift">Gift</option>
            <option value="Interest">Interest</option>
            <option value="Investment">Investment</option>
        </Form.Select>
            </Form.Group>

        <Button type ="submit">Save changes</Button>
            </Form>
            {code ? 
            <div>
            {
                message =="changed"?
                <p className="">Updated</p>
                :
                <p className="text-danger">{message}</p>
            }
            </div>
            :<>
            </>}
        </div>
    )
}

export default Edit_Income
