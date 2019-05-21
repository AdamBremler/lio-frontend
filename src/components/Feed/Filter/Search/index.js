import React from 'react';
import normalize from '../../../../helpers/normalizeBeforeSubmit';
import SearchForm from './SearchForm';

export default function index({ getFeed }) {
    return (
        <div>
            <SearchForm onSubmit={({ filterButton, ...values }) => normalize(getFeed)(values)} />
        </div>
    );
}
