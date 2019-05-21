import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import InputField from '../../common/InputField';
import TextareaField from '../../common/TextareaField';
import DateTimePicker from '../../common/DateTimePicker';
import AdFormCard from '../../Ad/styled/AdCard';
import Button from '../../common/Button';
import { Link } from 'react-router-dom';
import LocationField from '../../common/LocationField';
import SkillSelectField from '../../common/SkillSelectField';

const validate = values => {
    const errors = {};

    if (!values.company) {
        errors.company = 'Required';
    }

    if (!values.title) {
        errors.title = 'Required';
    }

    if (!values.description) {
        errors.description = 'Required';
    }

    if (!values.location) {
        errors.location = 'Required';
    }


    return errors;
}

function EditProfileForm({ handleSubmit, pristine, reset, submitting }) {
    return (
        <AdFormCard>
            <h1>Edit Profile</h1>
            <form onSubmit={handleSubmit}>
                <Field name='firstname' component={InputField} type='text' label='First name' />
                <Field name='surname' component={InputField} type='text' label='Surname' />
                <Field name='picture' component={InputField} type='text' label='Picture' />
                <Field name='location' component={LocationField} label='Location' />
                <Field name='description' component={TextareaField} type='text' label='Description' />
                <Field name='status' component={DateTimePicker} type='text' label='Status' />
                <SkillSelectField />
                <Field name='website' component={InputField} type='text' label='Website' />
                <Button type='submit' disabled={submitting}>Submit</Button>
                <Link to="/profile">Go back</Link>
            </form>
        </AdFormCard>
    )
}

EditProfileForm = reduxForm({
    form: 'EditProfileForm',
    validate
})(EditProfileForm);

const mapStateToProps = state => ({
    initialValues: state.profile.profile
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProfileForm);
