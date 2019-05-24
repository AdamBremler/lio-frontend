import styled from 'styled-components';

export default styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin: auto;
    padding: 20px;
    @media (max-width: 500px) {
        width: 95%;
        padding: 0px;
    }
    @media only screen and (max-device-width: 1024px) and (min-device-width: 768px) {
        width: 95%;
    }
`;