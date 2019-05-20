import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputField from '../../common/InputField';
import TextareaField from '../../common/TextareaField';
import DateTimePicker from '../../common/DateTimePicker';
import AdFormCard from '../../Ad/styled/AdCard';
import Button from '../../common/Button';
import { Link } from 'react-router-dom';
import LocationField from '../../common/LocationField';

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

function ExperienceForm({ handleSubmit, pristine, reset, submitting }) {
    return (
        <AdFormCard>
            <h1>Add experience</h1>
            <form onSubmit={handleSubmit}>
                <Field name='company' component={InputField} type='text' label='Company' />
                <Field name='title' component={InputField} type='text' label='Title' />
                <Field name='description' component={TextareaField} type='text' label='Description' />
                <Field name='location' component={LocationField} label='Location' />
                <Field name='from' component={DateTimePicker} type='text' label='From' />
                <Field name='to' component={DateTimePicker} type='text' label='To. If you are currently working at this company, you can leave it blank.' />
                <Button type='submit' disabled={submitting}>Submit</Button>
                <Link to="/profile">Go back</Link>
            </form>
        </AdFormCard>
    )
}

export default reduxForm({
    form: 'ExperienceForm',
    validate
})(ExperienceForm);