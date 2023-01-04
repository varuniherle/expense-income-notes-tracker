import React ,{useContext} from 'react'
import AuthContext from '../../context/UserAuth'
import {Row,Col, Card} from 'react-bootstrap'
import PieChart from '../charts/PieChart'
import HomeLogin from './HomeLogin'
import ExportExpense from './ExportExpense'
import ExportIncome from './ExportIncome'

function Home() {
      
    const {loggedIn} = useContext(AuthContext)
    return (
        <div className ="container">
            {loggedIn == true? 
            <>
            <h1>Welcome</h1>
            <div>
                <PieChart />
                <p>Export your expense</p>
                <div className ="row">
                    <div className ="col">
                    <a href ="/ExportIncome" className ="btn btn-primary">Export Income</a>
                    </div>
                    <div className ="col">
                    <a href ="/ExportExpense" className ="btn btn-primary">Export Expense</a>
                   
                    </div>
                     
                </div>
                <a href ="/custom_chart">Know More about your Expense</a>
            </div>
            </> 
            
            :<>
               <HomeLogin /> 
            </>}
         </div>
    )
}

export default Home
