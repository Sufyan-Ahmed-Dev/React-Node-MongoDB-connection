import React from 'react'
import { Link } from "react-router-dom"
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to={"/"} className="navbar-brand">React-App</Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <Link to={"/"} className="nav-item nav-link active">Home</Link>
                            <Link to={"/about"} className="nav-item nav-link">About</Link>
                            <Link to={"/services"} className="nav-item nav-link " >Services</Link>
                        </div>
                        <div className="navbar-nav ms-auto">
                            <Link to={"/login"} className="nav-item nav-link">Login</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar