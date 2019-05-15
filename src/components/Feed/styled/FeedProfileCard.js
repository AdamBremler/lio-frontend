import styled from 'styled-components';
import FeedCard from './FeedCard';

export default styled(FeedCard)`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 25px;
`;
