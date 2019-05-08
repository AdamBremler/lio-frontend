import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
        flex-grow: 1;
`;

export default function index() {
    return (
        <Div>
            <h1>Home</h1>
            <h4>Carousel Here ?</h4>
            <h4>Some info about the company here ?</h4>
        </Div>
    )
}
