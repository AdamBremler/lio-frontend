import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFeed } from '../../actions/feedActions';
import FeedCard from './styled/FeedCard';
import PageWrapper from '../common/PageWrapper';
import { Link } from 'react-router-dom';
import { truncate as tr, shuffle } from 'lodash';
import SubTitle from './styled/FeedCardSubTitle';
import TagList from '../common/TagList';
import FeedProfileImage from './styled/FeedProfileImage';
import FeedProfileCard from './styled/FeedProfileCard';
import FeedLink from './FeedLink';

function index({ feed, isLoading, error, user, getFeed, postAd }) {
    useEffect(() => {
        getFeed();
    }, []);

    const feedList = feed ? shuffle(feed).map(i =>
        i._itemType === 'profile' ? (
            <FeedProfileCard key={i._id}>
                <FeedProfileImage src={i.picture} />
                <div>
                    <h2>{i.type === 'Student' ? `${i.firstname} ${i.surname}` : i.name}</h2>
                    <SubTitle>{i.location}</SubTitle>
                    <p>{tr(i.description, { length: 125 })}</p>
                    <FeedLink href={i.website}>{i.website}</FeedLink>
                    <TagList list={i.skills.slice(0, 10)} />
                </div>
            </FeedProfileCard>
        ) : i._itemType === 'ad' ? (
            <FeedCard key={i._id}>
                <h2>{tr(i.title, { length: 75 })}</h2>
                <SubTitle>{i.location}</SubTitle>
                <p>{tr(i.description, { length: 300 })}</p>
                <TagList list={i.skills.slice(0, 10)} />
            </FeedCard>
        ) : null
    ) : null;

    return (
        <PageWrapper>
            {user && user.type === 'Company' ? <Link to='/ads/new'>Create ad</Link> : null}
            {feedList}
        </PageWrapper>
    )
}

const mapStateToProps = state => ({
    feed: state.feed.feed,
    isLoading: state.login.isLoading,
    error: state.login.error,
    user: state.user.user
});

const mapDispatchToProps = dispatch => ({
    getFeed: () => dispatch(getFeed())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(index);
