import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getFeed } from '../../actions/feedActions';
import FeedCard from './styled/FeedCard';
import PageWrapper from '../common/PageWrapper';
import { Link } from 'react-router-dom';
import { truncate as tr, shuffle } from 'lodash';
import Tag from '../common/styled/Tag';
import SubTitle from './styled/FeedCardSubTitle';

function index({ feed, isLoading, error, user, getFeed, postAd }) {
    useEffect(() => {
        getFeed();
    }, []);

    const feedList = feed ? shuffle(feed).map(i =>
        i._itemType === 'profile' ? (
            <FeedCard key={i._id}>
                <h2>{i.user.name}</h2>
                <p>
                    {i.type}
                    {i.skills}
                </p>
            </FeedCard>
        ) : i._itemType === 'ad' ? (
            <FeedCard key={i._id}>
                <h2>{tr(i.title, { length: 75 })}</h2>
                <SubTitle>{i.location}</SubTitle>
                <p>{tr(i.description, { length: 300 })}</p>
                {i.skills.map(s => <Fragment key={s}><Tag>{s}</Tag>{' '}</Fragment>)}
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
