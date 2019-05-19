import styled from 'styled-components';

export default styled.img`
    object-fit: cover;
    width: 130px;
    height: 130px;
    border-radius: 50%;

    @media (max-width: 768px) {
        width: 80px;
        height: 80px;
    }
`;
