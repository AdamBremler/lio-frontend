import styled from 'styled-components';
import { lighten } from 'polished';

export default styled.button`
    display: block;
    width: fit-content;
    height: fit-content;
    padding: 12.5px 13px 12px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.bg.primary};
    font-weight: bold;
    border: none;
    transition: all 0.2s;
    cursor: pointer;

    :hover {
        background-color: ${({ theme }) => lighten(0.1, theme.color.primary)};
    }

    > img {
        width: 20px;
    }
`;
