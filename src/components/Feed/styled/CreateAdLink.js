import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
    display: block;
    width: fit-content;
    height: fit-content;
    padding: 11px 11px 11px 13px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.bg.primary};
    border: ${({ theme }) => theme.border.primary};
    color: ${({ theme }) => theme.bg.primary};
    font-weight: bold;
    transition: all 0.2s;
    cursor: pointer;

    > img {
        width: 20px;
    }
`;
