import React from 'react';
import moment from 'moment';
import { DateTimePicker as Picker } from 'react-widgets';
import momentLocalizer from 'react-widgets-moment';
import 'react-widgets/dist/css/react-widgets.css';
import InputWrapper from './styled/InputWrapper';
import InputError from './styled/InputError';

momentLocalizer(moment);

export default function DateTimePicker({ input: { onChange, value }, label, showTime, meta: { touched, error, warning } }) {
    return (
        <InputWrapper error={touched && error}>
            <label>{label}</label>
            <div>
                <Picker
                    onChange={onChange}
                    format='YYYY-MM-DD'
                    time={showTime}
                    value={!value ? null : new Date(value)}
                />
                {touched && (
                    (error && <InputError>{error}</InputError>) ||
                    (warning && <span>{warning}</span>)
                )}
            </div>
        </InputWrapper>
    )
};
