import React from 'react';
import AlgoliaPlaces from './AlgoliaPlaces';
import InputWrapper from '../styled/InputWrapper';
import InputError from '../styled/InputError';

export default function ({ input: { onChange, value }, data, label, defaultValue, meta: { touched, error, warning } }) {
    return (
        <InputWrapper error={touched && error}>
            <label>{label}</label>
            <AlgoliaPlaces
                placeholder=''

                options={{
                    appId: process.env.REACT_APP_SEARCH_ID,
                    apiKey: process.env.REACT_APP_SEARCH_KEY,
                    language: 'en'
                }}

                onChange={({ query, rawAnswer, suggestion, suggestionIndex }) => onChange(suggestion.value)}

                onSuggestions={({ rawAnswer, query, suggestions }) => onChange(query)}

                value={value}

                onClear={() => onChange('')}
            />
            {touched && (
                (error && <InputError>{error}</InputError>) ||
                (warning && <span>{warning}</span>)
            )}
        </InputWrapper>
    );
}
