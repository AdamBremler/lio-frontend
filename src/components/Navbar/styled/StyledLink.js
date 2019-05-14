import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #333;
    &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: #333;
}`;
export default (props) => <StyledLink {...props} />;
