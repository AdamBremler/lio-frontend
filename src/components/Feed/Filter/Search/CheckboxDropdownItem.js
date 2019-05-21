import React from 'react';
import { Field } from 'redux-form';
import Checkbox from './CheckboxDropdownCheckbox';
import Label from './styled/CheckboxDropdownItemLabel';

export default function CheckboxDropdownItem({ value: { name, label } }) {
    return (
        <>
            <Field component={Checkbox} name={name} />
            <Label>{label}</Label>
        </>
    );
}
