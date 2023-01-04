import React, { useEffect } from 'react'
import {Bar} from 'react-chartjs-2'
import axios from 'axios'
import LineChart from './LineChart';
import Chart from 'chart.js/auto';
function BarChart() {
    const [data,setData] = React.useState('')
    const getData = () =>{
        axios.get('https://expense-income-note-tracker.herokuapp.com/expense/get_expenses').then(res =>{
            setData(res.data)
        })
    }
    useEffect(()=>{
        getData()
    },[])

    console.log(data)
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
    if(data!=''){
        data.map((datas) =>{
            var date = datas.date
            var month = monthNames[parseInt(date.split("-")[1])-1]
            exp[month]= exp[month]+datas.price 
        })
    }
    var month = Object.keys(exp)
    var value = Object.values(exp)
    console.log(exp,month)
    return (
        <div>
            {data ?
            <>
             <Bar
             data ={{
                labels: month,
                datasets: [
            {
            label: 'Expense of the year',
            data: value,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
            },

            ]
             }}
             
             />
             <LineChart 
             exp ={exp} 
             data ={data}
             height="250px"
             width="250px"
             options={{ maintainAspectRatio: false }}
             />
            </>:
            <>No data</>}
           
        </div>
    )
}

export default BarChart
