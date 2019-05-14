import React from 'react';
import InputWrapper from './styled/InputWrapper';

export default function InputField({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) {
    return (
        <InputWrapper>
            <label>{label}</label>
            <div>
                <input {...input} type={type} />
                {touched && (
                    (error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>)
                )}
            </div>
        </InputWrapper>
    )
}
