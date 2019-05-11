import React from 'react';
import { Switch } from 'react-router-dom';
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
import Dashboard from './Profile/Dashboard';
import Education from './Profile/Education';
import Experience from './Profile/Experience';
import ShowProfile from './ShowProfile';


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
                <ProtectedRoute exact path="/profile/:id" component={ShowProfile} />
                <ProtectedRoute exact path="/logout" component={Logout} />
                <ProtectedRoute exact path="/profile" component={Profile} />
                <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                <ProtectedRoute exact path="/education" component={Education} />
                <ProtectedRoute exact path="/experience" component={Experience} />
            </Switch>
            <Footer />
        </Div>
    );
}
