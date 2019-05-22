import styled from 'styled-components';

export default styled.div`
    width: fit-content;
    padding: 0.5px 4.5px;
    background-color: ${({ theme }) => theme.bg.tertiary};
    color: white;
    font-size: 0.76em;
    font-weight: bold;
    border-radius: 4px;
    display: inline-block;
`;
