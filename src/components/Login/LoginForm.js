import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputField from '../common/InputField'
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Form = styled.form`
    width: 15%;
    margin: auto;
    padding-top: 30px;
`;

const Div = styled.div`
    margin-bottom: 20px;
`;


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
        <Form onSubmit={handleSubmit}>
            <div className="form-group">
                <Field name="email" component={InputField} type="email" label="Email" />
            </div>
            <Div>
                <Field name="password" component={InputField} type="password" label="Password" />
            </Div>
            <button type="submit" className="btn btn-primary" disabled={submitting}>Login</button>
            <Link to="/register">Register</Link>
        </Form>
    )
}

export default reduxForm({
    form: 'login',
    validate
})(LoginForm);