import React from 'react';
import FilterWrapper from './styled/FilterWrapper';
import Search from './Search';

export default function index({ user, getFeed }) {
    return (
        <FilterWrapper>
            <Search getFeed={getFeed} />
        </FilterWrapper>
    );
}
