import React from 'react';
import LoginForm from '../Login/LoginForm'

export default function index() {
    return (
        <div>
            <LoginForm onSubmit={values => console.log(values)} />
        </div>
    )
}
