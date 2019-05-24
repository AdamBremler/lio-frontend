import styled from 'styled-components';

export default styled.div`
    width: 25%;
    display: table-cell;
    vertical-align: top;
    padding-left: 20px;
    padding-right: 14px;
    @media (max-width: 500px) {
        display: flex;
        justify-content: center;
        width: 100%;
        margin: auto;
        padding: 0px;
    }
`;