import React from 'react';
import { connect } from 'react-redux';
import PageWrapper from '../../common/PageWrapper';
import { saveProfile } from '../../../actions/profileActions';
import EditProfileForm from './EditProfileForm';

function index({ saveProfile }) {
    return (
        <PageWrapper>
            <EditProfileForm onSubmit={saveProfile} />
        </PageWrapper>
    );
}

const mapDispatchToProps = dispatch => ({
    saveProfile: () => dispatch(saveProfile())
});

export default connect(
    null,
    mapDispatchToProps
)(index);
