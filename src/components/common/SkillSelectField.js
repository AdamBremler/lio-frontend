import React from 'react';
import { Field } from 'redux-form';
import skills from '../../constants/skills';
import MultiSelect from './MultiSelectField';
import 'react-widgets/dist/css/react-widgets.css';

export default function SkillSelectField({ defaultValue = [] }) {
    return (
        <Field
            name='skills'
            component={MultiSelect}
            defaultValue={defaultValue}
            data={skills}
            label='Skills'
        />
    );
}
