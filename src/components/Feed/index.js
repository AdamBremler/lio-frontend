import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFeed } from '../../actions/feedActions';
import FeedCard from './styled/FeedCard';
import PageWrapper from '../common/PageWrapper';
import { truncate as tr } from 'lodash';
import SubTitle from './styled/FeedCardSubTitle';
import TagList from '../common/TagList';
import FeedProfileImage from './styled/FeedProfileImage';
import FeedProfileCard from './styled/FeedProfileCard';
import FeedLink from './FeedLink';
import UnstyledLink from '../common/styled/UnstyledLink';
import Pagination from '../common/Pagination';
import Filter from './Filter';
import TopBarWrapper from './styled/TopBarWrapper';
import CreateAdLink from './styled/CreateAdLink';
import createAdIcon from './img/createAd.svg';

function index({ feed, isLoading, error, user, pagination, getFeed, postAd }) {
    useEffect(() => {
        if (!feed) getFeed();
    }, []);

    const feedList = feed && pagination ? feed.slice(
        (pagination.current - 1) * pagination.pageSize,
        (pagination.current - 1) * pagination.pageSize + pagination.pageSize
    ).map(i =>
        i._itemType === 'profile' ? (
            <FeedProfileCard key={i._id}>
                <UnstyledLink to={`/profile/${i._id}`}>
                    <FeedProfileImage src={i.picture} />
                </UnstyledLink>
                <div>
                    <UnstyledLink to={`/profile/${i._id}`}>
                        <h2>{i.type === 'Student' ? `${i.firstname} ${i.surname}` : i.name}</h2>
                        <SubTitle>{i.location}</SubTitle>
                        <p>{tr(i.description, { length: 125 })}</p>
                    </UnstyledLink>
                    <FeedLink href={i.website}>{i.website}</FeedLink>
                    <TagList list={i.skills.slice(0, 10)} />
                </div>
            </FeedProfileCard>
        ) : i._itemType === 'ad' ? (
            <FeedCard key={i._id}>
                <UnstyledLink to={`/ads/${i._id}`}>
                    <h2>{tr(i.title, { length: 75 })}</h2>
                    <SubTitle>{`${i.profile.name} - ${i.location}`}</SubTitle>
                    <p>{tr(i.description, { length: 300 })}</p>
                </UnstyledLink>
                <TagList list={i.skills.slice(0, 10)} />
            </FeedCard>
        ) : null
    ) : null;

    return (
        <PageWrapper>
            <TopBarWrapper>
                {user && user.type === 'Company' ? <CreateAdLink to='/ads/new' title='Create ad'><img src={createAdIcon} /></CreateAdLink> : null}
                <Filter user={user} getFeed={getFeed} />
            </TopBarWrapper>
            {feedList}
            {feed ? <Pagination total={feed.length} name='feed' /> : null}
        </PageWrapper>
    )
}

const mapStateToProps = state => ({
    feed: state.feed.feed,
    isLoading: state.login.isLoading,
    error: state.login.error,
    user: state.user.user,
    pagination: state.pagination.feed
});

const mapDispatchToProps = dispatch => ({
    getFeed: params => dispatch(getFeed(params))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(index);
