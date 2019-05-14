import styled from 'styled-components';

export default styled.div`
    background-color: ${({ theme }) => theme.bg.primary};
    box-shadow: ${({ theme }) => theme.shadow.primary};
    margin: 20px 0;
    padding: 10px;
    border-radius: 5px;
`;
