import styled from 'styled-components';
import { Field } from 'redux-form';

export default styled(Field)`
    &, * {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        z-index: 10;
        opacity: 0;
    }
`;
