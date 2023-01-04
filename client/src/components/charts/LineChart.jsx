import React, { useState } from 'react'
import {Line,Bar} from 'react-chartjs-2'


function LineChart(props) {
    
    const labels = Object.keys(props.exp)
    const values = Object.values(props.exp)
    console.log(labels,values)

    const data ={
        labels : labels,
        datasets:[{
            label:"Expenditure",
            data : values,
            fill :false,
            borderColor:'rgb(75, 192, 192)'
        }]
    }

    return (
        <div>
            <Line
            data ={data}
            width ={10}
            height={10}
             />

            <Bar 
            data = {data}
            />
        </div>
    )
}

export default LineChart
