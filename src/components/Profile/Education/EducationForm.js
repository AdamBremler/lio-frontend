import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputField from '../../common/InputField';
import TextareaField from '../../common/TextareaField';
import DateTimePicker from '../../common/DateTimePicker';
import AdFormCard from '../../Ad/styled/AdCard';
import Button from '../../common/Button';
import { Link } from 'react-router-dom';

const validate = values => {
    const errors = {};

    if (!values.school) {
        errors.school = 'Required';
    }

    if (!values.degree) {
        errors.degree = 'Required';
    }

    if (!values.program) {
        errors.program = 'Required';
    }


    return errors;
}

function EducationForm({ handleSubmit, pristine, reset, submitting }) {
    return (
        <AdFormCard>
            <h1>Add education</h1>
            <form onSubmit={handleSubmit}>
                <Field name='school' component={InputField} type='text' label='School' />
                <Field name='degree' component={InputField} type='text' label='Degree' />
                <Field name='program' component={InputField} type='text' label='Program' />
                <Field name='description' component={TextareaField} type='text' label='Description' />
                <Field name='from' component={DateTimePicker} type='text' label='From' />
                <Field name='to' component={DateTimePicker} type='text' label='To. If you are currently studying at this school, you can leave it blank.' />
                <Button type='submit' disabled={submitting}>Submit</Button>
                <Link to="/profile">Go back</Link>
            </form>
        </AdFormCard>
    )
}

export default reduxForm({
    form: 'educationForm',
    validate
})(EducationForm);