import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputField from '../common/InputField';
import DateTimePicker from '../common/DateTimePicker';

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
            <div>
                <Field name='title' component={InputField} type='text' label='Title' />
            </div>
            <div>
                <Field name='description' component={InputField} type='text' label='Description' />
            </div>
            <div>
                <Field name='skills' component={InputField} type='text' label='Skills' />
            </div>
            <div>
                <Field name='location' component={InputField} type='text' label='Location' />
            </div>
            <div>
                <Field name='endDate' component={DateTimePicker} type='text' label='End date for this ad' />
            </div>
            <button type='submit' disabled={submitting}>Submit ad</button>
        </form>
    )
}

export default reduxForm({
    form: 'createAd',
    validate
})(CreateAdForm);
