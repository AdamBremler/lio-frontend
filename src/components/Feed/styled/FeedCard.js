import styled from 'styled-components';

export default styled.div`
    background-color: ${({ theme }) => theme.bg.primary};
    box-shadow: 0 2px 10px 0 rgba(134, 141, 155, 0.2);
    margin: 20px;
    padding: 10px;
    border-radius: 5px;
`;
