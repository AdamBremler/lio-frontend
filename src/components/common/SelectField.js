import React from 'react';
import { SelectList } from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css';
import InputWrapper from './styled/InputWrapper';

export default function SelectField({ input, data, label }) {
    return (
        <InputWrapper>
            <label>{label}</label>
            <SelectList
                {...input}
                onBlur={() => input.onBlur()}
                data={data}
            />
        </InputWrapper>
    );
}
