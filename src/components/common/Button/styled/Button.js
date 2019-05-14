import styled from 'styled-components';

export default styled.button`
    display: block;
    padding: 10px 30px;
    margin: 10px auto;
    border-radius: 5px;
    width: fit-content;
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.bg.primary};
    font-weight: bold;
`;
