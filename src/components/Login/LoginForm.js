import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputField from '../common/InputField';

const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.password) {
        errors.password = 'Required'
    }

    return errors;
}

function LoginForm({ handleSubmit, pristine, reset, submitting }) {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="email" component={InputField} type="email" label="Email" />
            </div>
            <div>
                <Field name="password" component={InputField} type="password" label="Password" />
            </div>
            <button type="submit" disabled={submitting}>Login</button>
        </form>
    )
}

export default reduxForm({
    form: 'login',
    validate
})(LoginForm);