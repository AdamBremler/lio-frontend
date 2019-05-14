import React from 'react';
import { Multiselect } from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css';
import InputWrapper from './styled/InputWrapper';

export default function MultiSelectField({ input: { onChange, value }, data, label, defaultValue, meta: { touched, error, warning } }) {
    return (
        <InputWrapper>
            <label>{label}</label>
            <Multiselect
                onChange={onChange}
                value={value ? value : defaultValue}
                data={data}
                allowCreate={true}
                onCreate={val => onChange([...(value ? value : defaultValue), val])}
            />
            {touched && (
                (error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>)
            )}
        </InputWrapper>
    );
}
