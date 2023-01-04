import axios from 'axios'
import React,{useState} from 'react'
import { Form, InputGroup, Button,Row,Col} from 'react-bootstrap'
import Income from '../Income/Income'
import LineChart_Income from './LineChart_Income'
import Line_custom from './Line_custom'

function Custom() {
    const [income,setIncome] = useState('')
    const [expense,setExpense] = useState('')
    const [error,setError] = useState(false)
    const [message,setMessage] = useState('')
    const [dates,setDates] = useState({
        start:'',
        end:''
    })
    const onChangeHandler = (e) =>{
        const name = e.target.name;
        const value = e.target.value
        setDates(values => ({...values, [name]: value}))
        setError(false)
        setMessage('')
        console.log(name,value)
        
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(dates)
        if(dates.start > dates.end){
            setError(true)
            setMessage("Start date should not be greater than end date")
            console.log("error")
        }
        else{
            console.log(dates)
            axios.post("https://expense-income-note-tracker.herokuapp.com/charts/get_expense_date/",dates)
            .then((res) =>{
                setExpense(res.data)
                console.log(expense)
            }).catch((error) =>{
                console.log(error)
                setError(true)
                setMessage("something went wrong while sending the data")
            })
            axios.post("https://expense-income-note-tracker.herokuapp.com/charts/get_income_date",dates)
            .then((res) =>{
                
                setIncome(res.data)
                console.log(income,res.data)
            }).catch((error) =>{
                console.log(error)
                setError(true)
                setMessage("something went wrong while sending the data")
            })
        }
    }
    return (
        <div className ="container">
            <Form onSubmit ={handleSubmit}>
                <Row>
                    <Form.Label column="lg" lg={2}>
                    Start date
                    </Form.Label>
                    <Col>
                    <Form.Control
                     type =  "date"
                      name="start"
                      onChange={onChangeHandler}
                      value = {dates.start || ''}
                       
                      required/>
                    </Col>
                </Row>
                <Row>
                    <Form.Label column="lg" lg={2}>
                    End date
                    </Form.Label>
                    <Col>
                    <Form.Control 
                    type = "date" 
                    name = "end"
                    onChange={onChangeHandler}
                    value = {dates.end} 
                    required/>
                    </Col>
                </Row>
                {error ?
                <><p className="text-danger">{message}</p></>
                :
                <></>
                }
                <Button variant="primary" id="button-addon2" type ="submit">
                    Get data
                </Button>
                </Form>
                {expense ?
                <>
                    <Line_custom  expense ={expense}/>
                </>:
                    
                <>
                <p>No expense yet</p>
                </>}

                {income ? 
                <>
                <LineChart_Income income ={income}/>
                </> 
                :
                <>
                <p>
                    No income yet
                </p>
                </>}
            
            
        </div>
    )
}

export default Custom
