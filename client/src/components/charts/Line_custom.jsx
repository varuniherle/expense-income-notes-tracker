import React from "react";
import { Line } from "react-chartjs-2";


function Line_custom(props) {
//    const income = props.income
    const expense = props.expense
    // const income_price = []
    // const income_date =[]

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

var exp = {
    "January":0, 
    "February":0, 
    "March":0,
    "April":0,
    "May":0, 
    "June":0,
    "July":0 , 
    "August":0,
    "September":0,
    "October":0, 
    "November":0,
    "December":0
    }
    
    if(expense!=''){
        expense.map((expenses) =>{
            var date = expenses.date
            var month = monthNames[parseInt(date.split("-")[1])-1]
            exp[month]= exp[month]+expenses.price 
        })
    }
    
    var month = Object.keys(exp)
    var value = Object.values(exp)

    // console.log(month,value)

 
    const data ={
        labels : month,
        datasets:[{
            label:"Expenditure",
            data : value,
            fill :false,
            borderColor:'rgb(255, 0, 0)'
        }]
    }
       
    return (
        <div>
            <Line data={data} />     
        </div>
    )
}

export default Line_custom
