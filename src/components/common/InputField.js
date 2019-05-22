import React from 'react';
import InputWrapper from './styled/InputWrapper';
import InputError from './styled/InputError';

export default function InputField({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) {
    return (
        <InputWrapper error={touched && error}>
            <label>{label}</label>
            <div>
                <input {...input} type={type} />
                {touched && (
                    (error && <InputError>{error}</InputError>) ||
                    (warning && <span>{warning}</span>)
                )}
            </div>
        </InputWrapper>
    )
}
