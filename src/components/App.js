import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './common/ProtectedRoute';
import PublicRoute from './common/PublicRoute';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Logout from './Logout';
import Navbar from './Navbar';
import Footer from './Footer';
import Profile from './Profile';
import styled from 'styled-components';

const Div = styled.div`
display: flex;
min-height: 100vh;
flex-direction: column;
`;

export default function App() {
    return (
        <Div>
            < Navbar />
            <Switch>
                <ProtectedRoute exact path="/" component={Home} />
                <PublicRoute exact path="/login" component={Login} />
                <PublicRoute exact path="/register" component={Register} />
                <ProtectedRoute exact path="/logout" component={Logout} />
                <ProtectedRoute exact path="/profile" component={Profile} />
            </Switch>
            <Footer />
        </Div>
    );
}
