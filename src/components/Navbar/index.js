import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Div = styled.div`
    flex-shrink: 0;
`;

export default function index(user) {
    const notLoggedIn = (
        <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/login">
                Login
            </Link>
        </div>

    )

    const loggedIn = (
        <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/profile">Profile</Link>
            <Link className="nav-item nav-link" to="/logout">
                Logout
                </Link>
        </div>
    )
    return (
        <Div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">LIO</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                        <Link className="nav-item nav-link" to="/feed">Feed</Link>
                        {user ? loggedIn : notLoggedIn}
                    </div>
                </div>
            </nav>
        </Div>
    )
}
