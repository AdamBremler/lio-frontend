import React from 'react';
import CheckboxDropdownWrapper from './styled/CheckboxDropdownWrapper';
import CheckboxDropdownItem from './CheckboxDropdownItem';

export default function CheckboxDropdown({ filterButtonValue, user }) {
    return (
        <CheckboxDropdownWrapper open={filterButtonValue} onToggle={() => null} itemComponent={CheckboxDropdownItem} data={[
            { name: 'inclStudents', label: 'Include Students' },
            { name: 'inclCompanies', label: 'Include Companies' },
            { name: 'inclAds', label: 'Include Advertisements' },
            ...(user ? [{ name: 'skills', label: 'Include only your skills' }] : [])
        ]} />
    );
}
