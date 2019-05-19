import styled from 'styled-components';

export default styled.div`
    margin: 0 auto auto;
    padding-top: 20px;
    width: 40%;

    @media (max-width: 1600px) {
        width: 50%;
    }

    @media (max-width: 1200px) {
        width: 68%;
    }

    @media (max-width: 992px) {
        width: 75%;
    }

    @media (max-width: 768px) {
        width: 93%;
    }

    @media (max-width: 576px) {
        width: 93%;
    }
`;
