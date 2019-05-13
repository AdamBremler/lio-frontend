import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputField from '../common/InputField';
import TextareaField from '../common/TextareaField';
import DateTimePicker from '../common/DateTimePicker';
import SkillSelectField from '../common/SkillSelectField';

const validate = values => {
    const errors = {};

    if (!values.title) {
        errors.title = 'Required';
    }

    if (!values.description) {
        errors.description = 'Required';
    }

    if (!values.skills) {
        errors.skills = 'Required';
    }

    if (!values.location) {
        errors.location = 'Required';
    }

    if (!values.endDate) {
        errors.endDate = 'Required';
    }

    return errors;
}

function CreateAdForm({ handleSubmit, pristine, reset, submitting }) {
    return (
        <form onSubmit={handleSubmit}>
            <Field name='title' component={InputField} type='text' label='Title' />
            <Field name='description' component={TextareaField} type='text' label='Description' />
            <SkillSelectField />
            <Field name='location' component={InputField} type='text' label='Location' />
            <Field name='endDate' component={DateTimePicker} type='text' label='Last date available' />
            <button type='submit' disabled={submitting}>Submit ad</button>
        </form>
    )
}

export default reduxForm({
    form: 'createAd',
    validate
})(CreateAdForm);
