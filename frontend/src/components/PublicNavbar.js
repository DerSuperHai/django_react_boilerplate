import React from 'react';
import {Link} from "react-router-dom";

const PublicNavbar = ({ isAuthenticated, children }) => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light sticky-top">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">APP NAME</Link>
                    <div className="d-flex align-items-center">
                        {isAuthenticated ?
                            <Link className="nav-link" to="/home">Dashboard</Link> :
                            <Link className="nav-link" to="/login">Login</Link>
                        }
                        <Link to="/signup" className="btn btn-primary ms-3" role="button">Sign Up</Link>
                    </div>
                </div>
            </nav>
        {children}
        </div>
    )
}

export default PublicNavbar;
