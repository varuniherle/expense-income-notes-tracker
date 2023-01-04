import React from 'react'
import {Modal,Button} from 'react-bootstrap'
import DeleteIncome from './DeleteIncome'
import Edit_Income from './Edit_Income'

function Income_modal(props) {
    console.log(props)
    return (
        <div>
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            
            <Modal.Header closeButton >
                <Modal.Title id="contained-modal-title-vcenter">Edit or Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Edit_Income income = {props.income} getIncome ={props.getIncome}/>
            </Modal.Body>
            <Modal.Footer>
                <DeleteIncome _id ={props.income._id} />
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Income_modal
