import React from 'react'
import styled from 'styled-components';

export default function index() {
    const Div = styled.div`
        flex-shrink: 0;
        background-color: #f8f9fa;
`;

    return (
        <Div>
            <footer>
                <h3>Footer</h3>
            </footer>
        </Div>
    )
}
