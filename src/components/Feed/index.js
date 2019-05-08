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
            {user ? <CreateAdForm onSubmit={postAd} /> : null}
            <div>
                {feed ? feed.profiles.map(i =>
                    <div key={i._id}>
                        <h2>{i.user.name}</h2>
                        <p>
                            {i.type}
                            {i.skills}
                        </p>
                    </div>
                ) : null}
            </div>
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
