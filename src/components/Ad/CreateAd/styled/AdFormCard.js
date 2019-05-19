import styled from 'styled-components';

export default styled.div`
    width: 50%;
    margin: auto;

    h1 {
        margin-bottom: 30px;
    }

    form > * > * {
        position: relative;
        
        > input, textarea {
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        width: 70%;
    }

    @media (max-width: 576px) {
        width: 93%;
    }
`;
