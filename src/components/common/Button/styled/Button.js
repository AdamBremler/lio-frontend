import styled from 'styled-components';
import { lighten } from 'polished';

export default styled.button`
    display: block;
    padding: 10px 30px;
    margin: 16px auto;
    border-radius: 5px;
    width: fit-content;
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.bg.primary};
    font-weight: bold;
    border: none;
    transition: all 0.2s;

    :hover {
        background-color: ${({ theme }) => lighten(0.1, theme.color.primary)};
    }
`;
