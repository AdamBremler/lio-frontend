import styled from 'styled-components';

export default styled.div`
    width: 40%;
    margin: auto;
    color: #fff;
    font-size: 15px;
    padding-top: 200px;
    @media (max-width: 500px) {
        width: 90%;
        padding-top: 150px;  
        text-align: center; 
    }
    @media only screen and (max-device-width: 1024px) and (min-device-width: 768px) {
        width: 60%;
        padding-top: 200px;  
        text-align: center; 
    }
`;