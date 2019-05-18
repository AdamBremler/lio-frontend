import styled from 'styled-components';
import { lighten } from 'polished';

export default styled.button`
    display: block;
    width: fit-content;
    height: fit-content;
    padding: 6px 10px 10px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.bg.primary};
    font-weight: bold;
    border: none;
    transition: all 0.2s;

    :hover {
        background-color: ${({ theme }) => lighten(0.1, theme.color.primary)};
    }

    > img {
        width: 20px;
    }
`;
