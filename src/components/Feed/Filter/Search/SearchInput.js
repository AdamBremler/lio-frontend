import React from 'react';
import InputWrapper from '../../../common/styled/InputWrapper';

export default function SearchInput({
    input,
    label,
    type
}) {
    return (
        <InputWrapper noMargin>
            <div>
                <input {...input} type={type} placeholder={label} />
            </div>
        </InputWrapper>
    )
}
