import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';

const StyledLinkLogo = styled(Link)`
    text-decoration: none;
    color: #008CBA;
    font-weight: 600;
    margin-top: 22px;
    font-size: 25px;
    &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: #2098d1;
    }
`;
export default (props) => <StyledLinkLogo {...props} />;