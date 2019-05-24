import styled from 'styled-components';

export default styled.button`
    margin: 2px;
    cursor: pointer;
    background-color: #ff0000;
    padding: 10px 10px;
    color: #fff;
    border: none;
    font-size: 10px;
    border-radius: 4px;
    &:hover {
        background-color: #dc0a0a;
        border: solid 1px;
        border-color: #dc0a0a;
        margin: 1px
    }
    @media (max-width: 500px) {
        padding: 5px 5px;
    }
`;
