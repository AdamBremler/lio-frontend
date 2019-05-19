import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputField from '../../common/InputField';
import TextareaField from '../../common/TextareaField';
import DateTimePicker from '../../common/DateTimePicker';
import SkillSelectField from '../../common/SkillSelectField';
import AdFormCard from './styled/AdFormCard';
import Button from '../../common/Button';
import LocationField from '../../common/LocationField';

const validate = values => {
    const errors = {};

    if (!values.title) {
        errors.title = 'Required';
    }

    if (!values.description) {
        errors.description = 'Required';
    }

    if (!values.skills || !values.skills.length) {
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
        <AdFormCard>
            <h1>Create ad</h1>
            <form onSubmit={handleSubmit}>
                <Field name='title' component={InputField} type='text' label='Title' />
                <Field name='description' component={TextareaField} type='text' label='Description' />
                <SkillSelectField />
                <Field name='location' component={LocationField} label='Location' />
                <Field name='endDate' component={DateTimePicker} type='text' label='Application deadline' />
                <Button type='submit' disabled={submitting}>Submit ad</Button>
            </form>
        </AdFormCard>
    )
}

export default reduxForm({
    form: 'createAd',
    validate
})(CreateAdForm);
