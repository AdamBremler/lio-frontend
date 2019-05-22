import React from 'react';
import { Multiselect } from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css';
import InputWrapper from './styled/InputWrapper';
import InputError from './styled/InputError';

export default function MultiSelectField({ input: { onChange, value }, data, label, defaultValue, meta: { touched, error, warning } }) {
    return (
        <InputWrapper error={touched && error}>
            <label>{label}</label>
            <Multiselect
                onChange={onChange}
                value={value ? value : defaultValue}
                data={data}
                allowCreate={true}
                onCreate={val => onChange([...(value ? value : defaultValue), val])}
            />
            {touched && (
                (error && <InputError>{error}</InputError>) ||
                (warning && <span>{warning}</span>)
            )}
        </InputWrapper>
    );
}
