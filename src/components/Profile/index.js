import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Div = styled.div`
        flex-grow: 1;
`;

export default function index() {
    return (
        <Div>
            <h2>Profile</h2>
            <Link to="/dashboard">Edit your profile</Link>
        </Div>
    )
}
