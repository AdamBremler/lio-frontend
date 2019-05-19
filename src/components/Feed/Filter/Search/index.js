import React from 'react';
import normalize from '../../../../helpers/normalizeBeforeSubmit';
import SearchForm from './SearchForm';

export default function index({ getFeed }) {
    return (
        <div>
            <SearchForm onSubmit={normalize(getFeed)} />
        </div>
    );
}
