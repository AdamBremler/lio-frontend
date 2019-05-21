import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { getFeed } from '../../../../actions/feedActions';
import normalize from '../../../../helpers/normalizeBeforeSubmit';
import SearchInput from './SearchInput';
import SearchFormWrapper from './styled/SearchFormWrapper';
import searchIcon from './img/search.svg';
import SearchButton from './styled/SearchButton';
import SearchInputWrapper from './styled/SearchInputWrapper';
import Options from './Options';
import CheckboxDropdown from './CheckboxDropdown';

function SearchForm({ handleSubmit, pristine, reset, submitting, filterButtonValue, dispatch, onSubmit }) {
    useEffect(() => {
        setTimeout(() => handleSubmit(values => onSubmit(values)), 4000)
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <SearchFormWrapper>
                <SearchInputWrapper>
                    <Field name='query' component={SearchInput} type='text' label='Search' />
                </SearchInputWrapper>
                <SearchButton><img src={searchIcon} /></SearchButton>
                <Options dispatch={dispatch} filterButtonValue={filterButtonValue} />
                <CheckboxDropdown filterButtonValue={filterButtonValue} />
            </SearchFormWrapper>
        </form>
    )
}

SearchForm = reduxForm({
    form: 'feedSearch'
})(SearchForm);

const selector = formValueSelector('feedSearch');

const mapStateToProps = state => ({
    filterButtonValue: selector(state, 'filterButton'),
    initialValues: {
        inclStudents: !state.user.user || state.user.user.type === 'Company',
        inclCompanies: !state.user.user || state.user.user.type === 'Student',
        inclAds: !state.user.user || state.user.user.type === 'Student',
    }
});

const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchForm);
