import React from 'react';
import FeedLinkWrapper from './styled/FeedLinkWrapper';

export default function FeedLink(props) {
    return (
        <FeedLinkWrapper>
            <a {...props} target='_blank' />
        </FeedLinkWrapper>
    );
}
