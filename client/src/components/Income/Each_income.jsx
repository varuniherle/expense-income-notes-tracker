import { Button } from 'bootstrap';
import React, {useState} from 'react'
import './income.css'
import Income_modal from './Income_modal';

function Each_income(props) {

    const income_name = props.income.income_name;
    const income_amount = props.income.income_amount
    const _id = props.income._id
    const income_date = props.income.income_date
    const [modal,setmodal] = useState(false)
    
    return (
        <div>

            <div className ="income" onClick ={()=>setmodal(true)}>
                <div className ="income-header">
                <div className ="date"><span> {income_date.split("T")[0]} </span></div>
                </div>
                <div className ="income-footer">
                <span> {income_name}</span>
                <span>{income_amount}</span>
                </div>
            {/* <p>{income_amount}</p> */}
            </div>
        <Income_modal 
        show = {modal}
        onHide={() =>setmodal(false)}
        income = {props.income}
        getIncome={props.getIncome}
        />
    
        </div>
    )
}

export default Each_income
