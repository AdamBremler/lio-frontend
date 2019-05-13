import React from 'react';
import moment from 'moment';
import { DateTimePicker as Picker } from 'react-widgets';
import momentLocalizer from 'react-widgets-moment';
import 'react-widgets/dist/css/react-widgets.css';

momentLocalizer(moment);

export default function DateTimePicker({ input: { onChange, value }, label, showTime, meta: { touched, error, warning } }) {
    return (
        <div>
            <label>{label}</label>
            <div>
                <Picker
                    placeholder={label}
                    onChange={onChange}
                    format='DD MMM YYYY'
                    time={showTime}
                    value={!value ? null : new Date(value)}
                />
                {touched && (
                    (error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>)
                )}
            </div>
        </div>
    )
};
