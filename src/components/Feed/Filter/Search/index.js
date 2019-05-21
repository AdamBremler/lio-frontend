import React from 'react';
import normalize from '../../../../helpers/normalizeBeforeSubmit';
import SearchForm from './SearchForm';

export default function index({ user, getFeed }) {
    const userSkills = user ? user.skills : false;

    return (
        <div>
            <SearchForm onSubmit={({ filterButton, skills, ...values }) =>
                normalize(getFeed)({ ...values, skills: skills ? userSkills : false })
            } />
        </div>
    );
}
