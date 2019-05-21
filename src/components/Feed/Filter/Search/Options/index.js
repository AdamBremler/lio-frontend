import React from 'react';
import { submit } from 'redux-form';
import options from './img/options.svg';
import OptionsButtonWrapper from './styled/OptionsButtonWrapper';
import OptionsButtonField from './styled/OptionsButtonField';

export default function index({ dispatch, filterButtonValue }) {
    return (
        <OptionsButtonWrapper title='Filter' onClick={() => filterButtonValue && dispatch(submit('feedSearch'))}>
            <OptionsButtonField name='filterButton' component='input' type='checkbox' label='Search' />
            <img src={options} />
        </OptionsButtonWrapper>
    );
}
