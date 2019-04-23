import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../actions/profileActions';

function index({ match, user, isLoading, error, getProfile }) {
    useEffect(() => {
        getProfile(match.params.id);
    }, []);

    return (
        <div>
            {user ?
                <div>
                    <div>{user.name}</div>
                    <div>{user.email}</div>
                </div>
                : null
            }
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.profile.user,
    isLoading: state.profile.isLoading,
    error: state.profile.error
});

const mapDispatchToProps = dispatch => ({
    getProfile: id => dispatch(getProfile(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(index);
