import React from 'react';
import { connect } from 'react-redux';
import PageWrapper from '../../common/PageWrapper';
import { saveExperience } from '../../../actions/profileActions';
import ExperienceForm from './ExperienceForm';

function index({ saveExperience }) {
    return (
        <PageWrapper>
            <ExperienceForm onSubmit={saveExperience} />
        </PageWrapper>
    );
}

const mapDispatchToProps = dispatch => ({
    saveExperience: input => dispatch(saveExperience(input))
});

export default connect(
    null,
    mapDispatchToProps
)(index);

