import React from 'react';
import { Field, reduxForm } from 'redux-form';

function RegisterForm({ handleSubmit }) {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email" component="input" type="email" />
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <Field name="name" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field name="password" component="input" type="password" />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default reduxForm({
    form: 'register'
})(RegisterForm);
