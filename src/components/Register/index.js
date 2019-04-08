import React from 'react';
import RegisterForm from './RegisterForm';

export default function index() {
    return (
        <div>
            <RegisterForm onSubmit={values => console.log(values)} />
        </div>
    )
}
