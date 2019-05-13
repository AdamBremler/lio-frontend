import React from 'react';

export default function InputField({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) {
    return (
        <div>
            <label>{label}</label>
            <div>
                <textarea {...input} placeholder={label} type={type} />
                {touched && (
                    (error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>)
                )}
            </div>
        </div>
    )
}
