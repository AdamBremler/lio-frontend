import React from 'react';
import CheckboxWrapper from './styled/CheckboxDropdownItemWrapper';

export default function CheckboxDropdownCheckbox({
    input: { value, ...input },
    label,
    type,
    meta: { touched, error, warning },

}) {
    return (
        <div>
            <CheckboxWrapper {...input} type='checkbox' checked={value} />
        </div>
    );
}
