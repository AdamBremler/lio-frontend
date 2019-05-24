import styled from 'styled-components';

export default styled.div`
    flex-grow: 1;
    width: 60%;
    margin: auto;
    padding-top: 30px;
    @media (max-width: 500px) {
        width: 95%;
    }
    @media only screen and (max-device-width: 1024px) and (min-device-width: 768px) {
        width: 95%;
    }

`;