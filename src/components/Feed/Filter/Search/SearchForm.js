import React from 'react';
import { Field, reduxForm } from 'redux-form';
import SearchInput from './SearchInput';
import SearchFormWrapper from './styled/SearchFormWrapper';
import searchIcon from './img/search.svg';
import SearchButton from './styled/SearchButton';

const validate = values => {
    const errors = {};

    if (!values.query || !/\S/.test(values.query)) {
        errors.query = 'Required';
    }

    return errors;
}

function SearchForm({ handleSubmit, pristine, reset, submitting }) {
    return (
        <form onSubmit={handleSubmit}>
            <SearchFormWrapper>
                <Field name='query' component={SearchInput} type='text' label='Search' />
                <SearchButton><img src={searchIcon} /></SearchButton>
            </SearchFormWrapper>
        </form>
    )
}

export default reduxForm({
    form: 'feedSearch',
    validate
})(SearchForm);
