import React from 'react';
import moment from 'moment';
import { DateTimePicker as Picker } from 'react-widgets';
import momentLocalizer from 'react-widgets-moment';
import 'react-widgets/dist/css/react-widgets.css';
import InputWrapper from './styled/InputWrapper';

momentLocalizer(moment);

export default function DateTimePicker({ input: { onChange, value }, label, showTime, meta: { touched, error, warning } }) {
    return (
        <InputWrapper>
            <label>{label}</label>
            <div>
                <Picker
                    onChange={onChange}
                    format='YYYY-MM-DD'
                    time={showTime}
                    value={!value ? null : new Date(value)}
                />
                {touched && (
                    (error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>)
                )}
            </div>
        </InputWrapper>
    )
};
