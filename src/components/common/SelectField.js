import React from 'react';
import { SelectList } from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css';
import InputWrapper from './styled/InputWrapper';

export default function SelectField({ input, label, data, meta: { touched, error, warning } }) {
    return (
        <InputWrapper>
            <label>{label}</label>
            <SelectList
                {...input}
                onBlur={() => input.onBlur()}
                data={data}
            />
            {touched && (
                (error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>)
            )}
        </InputWrapper>
    );
}
