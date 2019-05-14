import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';

const StyledLinkLogo = styled(Link)`
    text-decoration: none;
    color: #333;
    font-weight: 600;
    margin-top: 15px;
    font-size: 20px;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: #333;
    }
`;
export default (props) => <StyledLinkLogo {...props} />;