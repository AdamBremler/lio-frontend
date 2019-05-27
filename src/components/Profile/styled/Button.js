import styled from 'styled-components';

export default styled.button`
    margin: 5px
    cursor: pointer;
    background-color: #2098d1;
    padding: 10px 25px;
    color: #fff;
    border: none;
    font-size: 14px;
    border-radius: 4px;
    &:hover {
        background-color: #00689A;
        border: solid 1px;
        border-color: ##2098DF;
        margin: 4px
    }
    @media (max-width: 500px) {
        padding: 5px 10px;
        font-size: 12px;
    }
`;
