import React from 'react';
import options from './img/options.svg';
import OptionsButtonWrapper from './styled/OptionsButtonWrapper';
import OptionsButtonField from './styled/OptionsButtonField';

export default function index({ filterButtonValue, submitFeedForm }) {
    return (
        <OptionsButtonWrapper title='Filter' onClick={filterButtonValue ? submitFeedForm : () => null}>
            <OptionsButtonField name='filterButton' component='input' type='checkbox' label='Search' />
            <img src={options} />
        </OptionsButtonWrapper>
    );
}
