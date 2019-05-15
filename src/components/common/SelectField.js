import React from 'react';
import { SelectList } from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css';
import InputWrapper from './styled/InputWrapper';
import InputError from './styled/InputError';

export default function SelectField({ input, label, data, meta: { touched, error, warning } }) {
    return (
        <InputWrapper error={touched && error}>
            <label>{label}</label>
            <SelectList
                {...input}
                onBlur={() => input.onBlur()}
                data={data}
            />
            {touched && (
                (error && <InputError>{error}</InputError>) ||
                (warning && <span>{warning}</span>)
            )}
        </InputWrapper>
    );
}
