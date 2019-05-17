import styled from 'styled-components';

export default styled.div`
    width: 60%;
    margin: auto;

    h1 {
        margin-bottom: 30px;
    }

    form > * > * {
        > input, textarea {
            width: 100%;
        }
    }
`;
