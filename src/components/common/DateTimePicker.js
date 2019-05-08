import React from 'react';
import moment from 'moment';
import { DateTimePicker as Picker } from 'react-widgets';
import momentLocalizer from 'react-widgets-moment';
import 'react-widgets/dist/css/react-widgets.css';

moment.locale('en');
momentLocalizer();

export default function DateTimePicker({ input: { onChange, value }, showTime }) {
    return <Picker
        onChange={onChange}
        format="DD MMM YYYY"
        time={showTime}
        value={!value ? null : new Date(value)}
    />
};
