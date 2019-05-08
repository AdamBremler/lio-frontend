import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputField from '../common/InputField';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Form = styled.form`
    width: 15%;
    margin: auto;
    padding-top: 30px;
`;

const Div = styled.div`
    margin-bottom: 20px;
    flex-grow: 1;
`;


const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Required';
    }

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

function RegisterForm({ handleSubmit, pristine, reset, submitting }) {
    return (
        <Form onSubmit={handleSubmit}>
            <div>
                <Field name="email" component={InputField} type="email" label="Email" />
            </div>
            <div>
                <Field name="name" component={InputField} type="text" label="Name" />
            </div>
            <Div>
                <Field name="password" component={InputField} type="password" label="Password" />
            </Div>
            <button type="submit" disabled={submitting} className="btn btn-primary">Register</button>
            <Link to="/login">Login</Link>
        </Form>
    )
}

export default reduxForm({
    form: 'register',
    validate
})(RegisterForm);
