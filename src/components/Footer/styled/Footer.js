import styled from 'styled-components';

export default styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin: auto;
    padding: 20px;
    @media (max-width: 500px) {
        width: 100%;
        padding: 0px;
    }
`;