import styled from 'styled-components';

export default styled.nav`
    width: 60%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    @media (max-width: 500px) {
        width: 100%;
        justify-content: space-evenly;
    }
    @media only screen and (max-device-width: 1024px) and (min-device-width: 768px) {
        width: 95%;
    }
`