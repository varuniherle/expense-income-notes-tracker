import React,{useContext} from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import AuthContext from '../../context/UserAuth'
import LogoutBtn from '../auth/Logout'


function NavigationBar() {
    const {loggedIn} = useContext(AuthContext)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" >
            <Container>
            <Navbar.Brand href="/">My Stuffs</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                {loggedIn===true ? <> 
                    <Nav className="me-auto">
                    <Nav.Link href="/Expense">My Expenses</Nav.Link>
                    <Nav.Link href="/Notes">My Notes</Nav.Link>
                    <Nav.Link href="/Income">My Income</Nav.Link>
                    
                    <LogoutBtn />

                </Nav>
                </>: <>
                <Nav>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">
                    Register
                    </Nav.Link>
                    
                </Nav>
                </>}
                
                
            </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
}

export default NavigationBar
