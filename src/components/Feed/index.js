import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFeed } from '../../actions/feedActions';
import FeedCard from './styled/FeedCard';
import PageWrapper from '../common/PageWrapper';
import { Link } from 'react-router-dom';

function index({ feed, isLoading, error, user, getFeed, postAd }) {
    useEffect(() => {
        getFeed();
    }, []);

    return (
        <PageWrapper>
            {user && user.type === 'Company' ? <Link to='/ads/new'>Create ad</Link> : null}
            {feed ? (
                <>
                    {feed.profiles ? feed.profiles.map(p =>
                        <FeedCard key={p._id}>
                            <h2>{p.user.name}</h2>
                            <p>
                                {p.type}
                                {p.skills}
                            </p>
                        </FeedCard>
                    ) : null}
                    {feed.ads ? feed.ads.map(a =>
                        <FeedCard key={a._id}>
                            <h2>{a.title}</h2>
                            <p>
                                {a.description}
                                {a.skills}
                            </p>
                        </FeedCard>
                    ) : null}
                </>
            ) : null}
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
