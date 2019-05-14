import styled from 'styled-components';
import Card from '../../common/Card';

export default styled.div`
    > form {
        display: flex;
        flex-direction: column;
        align-items: center;

        > * {
            width: 60%;

            > * > * {
                width: 100%;
            }
        }
    }
`;
