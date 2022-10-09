import React from 'react';
import { connect } from 'react-redux';
import { checkAuthenticated } from '../actions/auth';
import {Redirect, Route} from "react-router-dom";

const ProtectedRoute = ({ component: Component, requireAdmin, isAuthenticated, user, ...rest }) => {
    if (isAuthenticated !== null) {
        if (!isAuthenticated) {
            return <Redirect to='/login'/>
        }
    }
    if (user !== null){
        if (requireAdmin && !user.is_superuser){
            return <Redirect to='/login' />
        }
    }

    return (
        <Route
            {...rest}
            render={(props) => <Component {...props} />}
        />
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

export default connect(mapStateToProps, { checkAuthenticated })(ProtectedRoute);
