import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFeed } from '../../actions/feedActions';

function index({ feed, isLoading, error, getFeed }) {
    useEffect(() => {
        getFeed();
    }, []);

    return (
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
    )
}

const mapStateToProps = state => ({
    feed: state.feed.feed,
    isLoading: state.login.isLoading,
    error: state.login.error
});

const mapDispatchToProps = dispatch => ({
    getFeed: () => dispatch(getFeed())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(index);
