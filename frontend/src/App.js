import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PubicPage from './containers/PubicPage';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import Home from "./containers/Home";

import { Provider } from 'react-redux';
import store from './store';

import Layout from './hocs/Layout';
import ProtectedRoute from "./hocs/ProtectedRoute";

const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={PubicPage} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                    <ProtectedRoute exact path='/home' component={Home} />
                    <Route exact path='/reset-password' component={ResetPassword} />
                    <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
                    <Route exact path='/activate/:uid/:token' component={Activate} />
                </Switch>
            </Layout>
        </Router>
    </Provider>
);

export default App;