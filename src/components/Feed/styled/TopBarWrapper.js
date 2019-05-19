import styled from 'styled-components';

export default styled.div`
    display: flex;

    > * + * {
        margin-left: 10px;
    }
`;
