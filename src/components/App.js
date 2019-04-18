import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './common/ProtectedRoute';
import PublicRoute from './common/PublicRoute';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Logout from './Logout';

export default function App() {
    return (
        <div>
            <Switch>
                <ProtectedRoute exact path="/" component={Home} />
                <PublicRoute exact path="/login" component={Login} />
                <PublicRoute exact path="/register" component={Register} />
                <ProtectedRoute exact path="/logout" component={Logout} />
            </Switch>
        </div>
    );
}
