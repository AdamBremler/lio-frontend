import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFeed } from '../../actions/feedActions';
import { postAd } from '../../actions/adActions';
import CreateAdForm from '../Ad/CreateAdForm';

function index({ feed, isLoading, error, user, getFeed, postAd }) {
    useEffect(() => {
        getFeed();
    }, []);

    return (
        <div>
            {user && user.type === 'Company' ? <CreateAdForm onSubmit={postAd} /> : null}
            {feed ? (
                <div>
                    {feed.profiles ? feed.profiles.map(p =>
                        <div key={p._id}>
                            <h2>{p.user.name}</h2>
                            <p>
                                {p.type}
                                {p.skills}
                            </p>
                        </div>
                    ) : null}
                    {feed.ads ? feed.ads.map(a =>
                        <div key={a._id}>
                            <h2>{a.title}</h2>
                            <p>
                                {a.description}
                                {a.skills}
                            </p>
                        </div>
                    ) : null}
                </div>
            ) : null}
        </div>
    )
}

const mapStateToProps = state => ({
    feed: state.feed.feed,
    isLoading: state.login.isLoading,
    error: state.login.error,
    user: state.user.user
});

const mapDispatchToProps = dispatch => ({
    getFeed: () => dispatch(getFeed()),
    postAd: input => dispatch(postAd(input))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(index);
