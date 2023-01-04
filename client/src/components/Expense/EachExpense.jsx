import React,{useState} from 'react'
import { Button,Form } from 'react-bootstrap'
import './expense.css'
import {MdDeleteForever, MdEdit} from 'react-icons/md'
import Popup from 'reactjs-popup';
import axios from 'axios'
import EditModalExp from './editModalExp';



function EachExpense({_id,expense_name ,date, price ,description ,getExpense,category }) {
    
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <div className = "expense" onClick={() => setModalShow(true)}>
                <div className ="date"><span> {date.split("T")[0]} </span></div>
                
                <div className ="expense-header">
                <span> {expense_name}</span>
                <span>
                 {price}
                </span>
                </div>
                <div className ="expense-body">
                
                {/* <li>
                    Details:{description}
                </li> */}
                </div>
                
                
            </div>
            {/* <MdEdit onClick={() => setModalShow(true)} /> */}
                <EditModalExp 
                show={modalShow}
                onHide={() => setModalShow(false)}
                _id ={_id}
                expense_name = {expense_name}
                date ={date}
                price ={price} 
                category ={category}
                description ={description} 
                getExpense ={getExpense}
                />
                
                
        </div>
    )
}

export default EachExpense
