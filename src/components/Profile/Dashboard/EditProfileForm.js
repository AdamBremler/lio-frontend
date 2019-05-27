import React from 'react';
import { Field, reduxForm } from 'redux-form';
import industries from '../../../constants/industries';
import InputField from '../../common/InputField';
import TextareaField from '../../common/TextareaField';
import AdFormCard from '../../Ad/styled/AdCard';
import Button from '../../common/Button';
import { Link } from 'react-router-dom';
import LocationField from '../../common/LocationField';
import SkillSelectField from '../../common/SkillSelectField';
import DropdownSelectField from '../../common/DropdownSelectField';

const validate = values => {
    const errors = {};

    if ((!values.firstname || !values.surname) || !values.name) {
        if (values.firstname || values.surname) {
            if (!values.firstname) errors.firstname = 'Required';
            if (!values.surname) errors.surname = 'Required';
        } else if (!values.name && !values.firstname && !values.surname) {
            if (!values.name) errors.name = 'Required';
            if (!values.firstname) errors.firstname = 'Required';
            if (!values.surname) errors.surname = 'Required';
        }
    }

    if (!values.industry) {
        errors.industry = 'Required';
    }


    return errors;
}

function EditProfileForm({ handleSubmit, pristine, reset, submitting, initialValues }) {
    return (
        <AdFormCard>
            <h1>Edit Profile</h1>
            <form onSubmit={handleSubmit}>
                {initialValues.type === 'Student' ? (
                    <>
                        <Field name='firstname' component={InputField} type='text' label='First name' />
                        <Field name='surname' component={InputField} type='text' label='Surname' />
                    </>
                ) : (
                        <Field name='name' component={InputField} type='text' label='Company name' />
                    )}
                <Field name='picture' component={InputField} type='text' label='Picture' />
                <Field name='location' component={LocationField} label='Location' />
                <Field name='description' component={TextareaField} type='text' label='Description' />
                <Field name='status' component={InputField} type='text' label='Status' />
                <Field name="industry" component={DropdownSelectField} label="Industry" data={industries} />
                <SkillSelectField />
                <Field name='website' component={InputField} type='text' label='Website' />
                <Button type='submit' disabled={submitting}>Submit</Button>
                <Link to="/profile">Go back</Link>
            </form>
        </AdFormCard>
    )
}

export default reduxForm({
    form: 'EditProfileForm',
    validate
})(EditProfileForm);
