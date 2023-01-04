import React ,{useContext}from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from './components/layout/NavigationBar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import AuthContext from './context/UserAuth';
import ExpenseForm from './components/Expense/ExpenseForm'
import ViewNotes from './components/Notes/ViewNotes';
import Edit_Expense from './components/Expense/Edit_Expense';
import Income from './components/Income/Income';
import BarChart from './components/charts/BarChart';
import Home from './components/HomePage/Home';
import Custom from './components/charts/Custom';
import ExportExpense from './components/HomePage/ExportExpense';
import ExportIncome from './components/HomePage/ExportIncome';

function Router() {
    const loggedIn =  useContext(AuthContext)
    return (
        <div>
            <BrowserRouter>
            <NavigationBar />
            <Routes>
            <Route exact path ="/" element={<Home />}></Route>
            <Route path ="/Expense" element ={< Edit_Expense/>}/>
            <Route path ="/AddExpense" element ={<ExpenseForm />}/>
            <Route path ="/Chart" element ={<BarChart />} />
            <Route path = '/Custom_chart' element ={<Custom />} />
            <Route path = "/Income" element ={<Income/>} />
            <Route path ="/Notes" element = {<ViewNotes />}/>
            <Route path ="/register" element ={<Register/>} />
            <Route path ="/login" element = {<Login />} />
            <Route path ="/ExportExpense" element ={<ExportExpense />} />
            <Route path ="/ExportIncome" element = {<ExportIncome/>} />
            
            
            
            {/* {loggedIn == true?
            <>
            
            <Route path ="/Expense" element ={< Expenses/>}/>
            <Route path ="/EditExpense" element ={<EditExpense/>}/>
            <Route path ="/AddExpense" element ={<ExpenseForm />}/>
            <Route path ="/ExpensList" element ={<ExpenseList/>} />
            </> :
            
            <>
            <Route path ="/register" element ={<Register/>} />
            <Route path ="/login" element = {<Login />} />
            </>}
             */}
            
            
          
           

            

            
            
            
            
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router
