import styled from 'styled-components';

export default styled.div`
    position: relative;
    display: block;
    width: fit-content;
    height: fit-content;
    padding: 13px 12px 11px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.bg.primary};
    border: ${({ theme }) => theme.border.primary};
    color: ${({ theme }) => theme.bg.primary};
    font-weight: bold;
    cursor: pointer;

    > img {
        width: 20px;
        transition: all 0.2s;
    }

    :hover > img {
        opacity: 0.7;
    }
`;
