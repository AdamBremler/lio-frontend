import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './common/ProtectedRoute';
import PublicRoute from './common/PublicRoute';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Logout from './Logout';
import Profile from './Profile';

export default function App() {
    return (
        <div>
            <Switch>
                <ProtectedRoute exact path='/' component={Home} />
                <ProtectedRoute exact path='/logout' component={Logout} />

                <Route exact path='/profiles/:id' component={Profile} />

                <PublicRoute exact path='/login' component={Login} />
                <PublicRoute exact path='/register' component={Register} />
            </Switch>
        </div>
    );
}
