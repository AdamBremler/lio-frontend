import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import InputField from '../common/InputField';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SelectField from '../common/SelectField';
import userTypes from '../../constants/userTypes';
import Button from '../common/Button';
import ButtonWrapper from './styled/ButtonWrapper';
import { connect } from 'react-redux';
import industries from '../../constants/industries';
import DropdownSelectField from '../common/DropdownSelectField';

const Form = styled.form`
    width: 20%;
    margin: auto;
    padding-top: 30px;

    input {
        width: 100%;
    }
    @media (max-width: 500px) {
        width: 70%;
    }
    @media only screen and (max-device-width: 1024px) and (min-device-width: 768px) {
        width: 60%;
        padding-top: 100px;
    }
`;

const validate = values => {
    const errors = {};

    if (!values.email || !/\S/.test(values.email)) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password || !/\S/.test(values.password)) {
        errors.password = 'Required';
    }

    if (!values.type || !/\S/.test(values.type)) {
        errors.type = 'Required';
    } else {
        switch (values.type) {
            case 'Student':
                if (!values.firstname || !/\S/.test(values.firstname)) errors.firstname = 'Required';
                if (!values.surname || !/\S/.test(values.surname)) errors.surname = 'Required';
                break;
            case 'Company':
                if (!values.name || !/\S/.test(values.name)) errors.name = 'Required';
                break;
        }
    }

    if (!values.industry || !/\S/.test(values.industry)) {
        errors.industry = 'Required';
    }

    return errors;
}

function RegisterForm({ handleSubmit, pristine, reset, submitting, typeValue }) {
    return (
        <Form onSubmit={handleSubmit}>
            <Field name="email" component={InputField} type="email" label="Email" />
            <Field name="type" component={SelectField} label="Type" data={userTypes} />
            {typeValue === 'Student' ? (
                <>
                    <Field name="firstname" component={InputField} type="text" label="First name" />
                    <Field name="surname" component={InputField} type="text" label="Surname" />
                </>
            ) : typeValue === 'Company' ? (
                <Field name="name" component={InputField} type="text" label="Company name" />
            ) : null}
            <Field name="industry" component={DropdownSelectField} label="Industry" data={industries} />
            <Field name="password" component={InputField} type="password" label="Password" normalize={value => value && value.replace(/\s/g, '')} />
            <ButtonWrapper>
                <Button type="submit" disabled={submitting}>Register</Button>
                <Link to="/login">Login</Link>
            </ButtonWrapper>
        </Form>
    )
}

RegisterForm = reduxForm({
    form: 'register',
    validate
})(RegisterForm);

const selector = formValueSelector('register');

const mapStateToProps = state => ({
    typeValue: selector(state, 'type')
});

export default connect(
    mapStateToProps
)(RegisterForm);
