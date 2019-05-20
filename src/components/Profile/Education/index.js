import React from 'react';
import { connect } from 'react-redux';
import PageWrapper from '../../common/PageWrapper';
import EducationForm from './EducationForm';
import { saveEducation } from '../../../actions/profileActions';

function index({ saveEducation }) {
    return (
        <PageWrapper>
            <EducationForm onSubmit={saveEducation} />
        </PageWrapper>
    );
}

const mapDispatchToProps = dispatch => ({
    saveEducation: input => dispatch(saveEducation(input))
});

export default connect(
    null,
    mapDispatchToProps
)(index);


