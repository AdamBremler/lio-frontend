import styled from 'styled-components';

export default styled.div`
    margin: 10px 0 10px;

    > label {
        margin: 0;
        font-weight: bold;
        color: ${({ theme }) => theme.textColor.secondary};
    }

    input, textarea, .rw-widget-container, .rw-multiselect, .rw-list {
        border: ${({ theme }) => theme.border.primary};
        border-radius: 5px;

        ${({ theme, error }) => error ? `border-color: ${theme.color.error}` : undefined};
    }

    input, textarea {
        padding: ${({ theme }) => theme.padding.input};
    }

    .rw-widget-input {
        border: none;
        box-shadow: none;
    }
`;

// rw-select-list rw-widget-input rw-widget-container rw-widget