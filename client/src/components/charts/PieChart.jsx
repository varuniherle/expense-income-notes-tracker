import React, { useEffect ,useState} from 'react'
import {Pie}  from 'react-chartjs-2'
import axios from 'axios';
import {Row,Col, Card,Badge} from 'react-bootstrap'

function PieChart() {
    const [total_income,setIncome] = useState(0)
    const [total_expense,setExpense] = useState(0)
    
    const getExpense = () =>{
        axios.get("https://expense-income-note-tracker.herokuapp.com/expense/get_total_expense")
        .then((response) =>{
            setExpense(response.data.sum)
            console.log(total_expense)
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    const getIncome = () =>{
        axios.get("https://expense-income-note-tracker.herokuapp.com/income/get_total_income")
        .then((response) =>{
            setIncome(response.data.message.sum)
            console.log(total_income)
        })
        .catch((error) =>{
            console.log(error)
            console.log(total_expense)
        })
    }
    useEffect(()=>{
        getIncome()
        getExpense()
    })
    const data = {
        labels: ['expense', 'income'],
        datasets: [
          {
            label: 'Total',
            data: [total_expense,total_income],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(0, 255, 0, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(0, 255, 0, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    //   console.log(data)
    
    return (
        <div>
            <div>
                <Row>
                    <Col>
                    <Card>
                        <Card.Body>
                        <Pie data={data} 
                        width={300}
                        height={250}
                        options ={{maintainAspectRatio:false}}
                        />
                        </Card.Body>
                        <Card.Footer>
                            <div>
                            <Badge bg ="success">Income: {total_income}</Badge>
                            </div>
                            <div>
                            <Badge bg ="warning">Expense :{total_expense}</Badge>
                            </div>
                        
                        </Card.Footer>
                    </Card>
                    
                        
                    
                    
                </Col>
                {/* <Col>
                <Card>
                    <Card.Body>
                        <p>
                            Income :{total_income}
                        </p>
                        <p>
                            Expense : {total_expense}
                        </p>
                    </Card.Body>
                </Card>            
                </Col> */}
                </Row>
                
            </div>
        </div>
    )
}

export default PieChart
