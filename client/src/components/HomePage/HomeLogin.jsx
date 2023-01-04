import React from 'react'
import './home.css'

function HomeLogin() {
    return (
        <div>
            <div className=" conatiner center">
                    <div className=" my-auto" >
                    <div className="card">
                        <i className="fa fa-user fa-5x d-flex justify-content-center p-2" aria-hidden="true"></i>
                        <div className="card-body  p-2">
                            <h4 className="card-title">Kindly Login or Register</h4>
                            <div className="d-flex justify-content-evenly">
                            <a href="/login" className="btn btn-primary">Login</a>
                            
                            <a href="/register" className="btn btn-primary ">Register</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default HomeLogin
