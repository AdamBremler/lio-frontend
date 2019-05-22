import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PageWrapper from '../../common/PageWrapper';
import { getProfile, saveProfile } from '../../../actions/profileActions';
import EditProfileForm from './EditProfileForm';

function index({ profile, getProfile, saveProfile }) {
    useEffect(() => {
        getProfile();
    }, []);

    return (
        <PageWrapper>
            <EditProfileForm initialValues={profile} onSubmit={saveProfile} />
        </PageWrapper>
    );
}

const mapStateToProps = state => ({
    profile: state.profile.profile,
});

const mapDispatchToProps = dispatch => ({
    getProfile: () => dispatch(getProfile()),
    saveProfile: profile => dispatch(saveProfile(profile))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(index);
