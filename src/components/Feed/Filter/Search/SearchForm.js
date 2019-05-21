import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector, submit } from 'redux-form';
import { getFeed } from '../../../../actions/feedActions';
import SearchInput from './SearchInput';
import SearchFormWrapper from './styled/SearchFormWrapper';
import searchIcon from './img/search.svg';
import SearchButton from './styled/SearchButton';
import SearchInputWrapper from './styled/SearchInputWrapper';
import Options from './Options';
import CheckboxDropdown from './CheckboxDropdown';

function SearchForm({ handleSubmit, pristine, reset, submitting, filterButtonValue, initialValues, feed, user, getFeed, submitFeedForm }) {
    useEffect(() => {
        if (!feed) getFeed(initialValues);
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <SearchFormWrapper>
                <SearchInputWrapper>
                    <Field name='query' component={SearchInput} type='text' label='Search' />
                </SearchInputWrapper>
                <SearchButton><img src={searchIcon} /></SearchButton>
                <Options submitFeedForm={submitFeedForm} filterButtonValue={filterButtonValue} />
                <CheckboxDropdown filterButtonValue={filterButtonValue} user={user} />
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
    },
    feed: state.feed.feed,
    user: state.user.user
});

const mapDispatchToProps = dispatch => ({
    getFeed: params => dispatch(getFeed(params)),
    submitFeedForm: () => dispatch(submit('feedSearch'))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchForm);
