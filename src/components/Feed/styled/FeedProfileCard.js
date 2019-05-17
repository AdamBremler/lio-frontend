import styled from 'styled-components';
import FeedCard from './FeedCard';

export default styled(FeedCard)`
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: start;
    grid-gap: 25px;
`;
