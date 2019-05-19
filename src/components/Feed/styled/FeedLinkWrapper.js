import styled from 'styled-components';

export default styled.div`
    margin: -4px 0 8px;

    > a {
        color: ${({ theme }) => theme.textColor.tertiary};
    }
`;
