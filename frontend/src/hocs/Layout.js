import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import { checkAuthenticated, loadUser } from '../actions/auth';

const Layout = ({ checkAuthenticated, loadUser, children }) => {
    useEffect(() => {
        checkAuthenticated();
        loadUser();
    }, [checkAuthenticated, loadUser]);

    return (
        <div>
            <Navbar>
            {children}
            </Navbar>
        </div>
    );
};

export default connect(null, { checkAuthenticated, loadUser })(Layout);
