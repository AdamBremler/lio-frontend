import React from 'react';
import { SelectList } from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css';

export default function SelectField({ input, data, label }) {
    return <div>
        <label>{label}</label>
        <SelectList
            {...input}
            onBlur={() => input.onBlur()}
            data={data}
        />
    </div>
}
