import React from 'react'
import { Line } from "react-chartjs-2";

function LineChart_Income(props) {
    const income = props.income
    console.log(income)

    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

    var inc = {
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
    
    if(income!=''){
        income.map((i) =>{
            var date = i.income_date
            var month = monthNames[parseInt(date.split("-")[1])-1]
            inc[month]= inc[month]+i.income_amount 
        })
    }
    
    var month = Object.keys(inc)
    var value = Object.values(inc)
    console.log(inc ,"inc data  ")
    console.log(month,value)
    const data ={
        labels : month,
        datasets:[{
            label:"Income",
            data : value,
            fill :false,
            borderColor:'rgb(0, 255, 0)'
        }]
    }

    return (
        <div>
            <Line data = {data} />
        </div>
    )
}

export default LineChart_Income
