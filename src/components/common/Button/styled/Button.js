import styled from 'styled-components';
import { lighten } from 'polished';

export default styled.button`
    display: block;
    padding: 14px 34px;
    margin: 16px auto;
    border-radius: 5px;
    width: fit-content;
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.bg.primary};
    font-weight: bold;
    font-size: 1em;
    border: none;
    transition: all 0.2s;
    cursor: pointer;

    :hover {
        background-color: ${({ theme }) => lighten(0.1, theme.color.primary)};
    }
`;
