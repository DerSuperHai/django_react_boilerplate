import React from 'react';
import {useLocation} from 'react-router-dom';
import { connect } from 'react-redux';
import PublicNavbar from "./PublicNavbar";

const Navbar = ({ isAuthenticated, children }) => {
    const location = useLocation()

    if(!location.pathname.includes("home")) {
        return <PublicNavbar isAuthenticated={isAuthenticated}>{children}
        </PublicNavbar>
    }
    return children
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {})(Navbar);
