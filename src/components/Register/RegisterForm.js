import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputField from '../common/InputField';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SelectField from '../common/SelectField';
import userTypes from '../../constants/userTypes';
import Button from '../common/Button';
import ButtonWrapper from './styled/ButtonWrapper';

const Form = styled.form`
    width: 20%;
    margin: auto;
    padding-top: 30px;

    input {
        width: 100%;
    }
`;

const Div = styled.div`
    margin-bottom: 20px;
    flex-grow: 1;
`;

const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    }

    if (!values.type) {
        errors.type = 'Required';
    }

    return errors;
}

function RegisterForm({ handleSubmit, pristine, reset, submitting }) {
    return (
        <Form onSubmit={handleSubmit}>
            <Field name="email" component={InputField} type="email" label="Email" />
            <Field name="type" component={SelectField} label="Type" data={userTypes} />
            <Field name="password" component={InputField} type="password" label="Password" />
            <ButtonWrapper>
                <Button type="submit" disabled={submitting}>Register</Button>
                <Link to="/login">Login</Link>
            </ButtonWrapper>
        </Form>
    )
}

export default reduxForm({
    form: 'register',
    validate
})(RegisterForm);
