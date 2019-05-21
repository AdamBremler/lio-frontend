import styled from 'styled-components';
import { DropdownList } from 'react-widgets';

export default styled(DropdownList)`
    &&& {
        position: absolute;
        top: auto;
        right: -12px;
    }

    .rw-widget-input, .rw-widget-input > * {
        display: none;
        margin-left: 0;
    }

    .rw-popup-container {
        width: 250px;
        bottom: -55px;
        position: relative;
    }

    .rw-list-option {
        padding: 0;
        position: relative;
    }

    .rw-state-selected.rw-state-selected.rw-state-selected {
        background-color: ${({ theme }) => theme.color.primary};
    }

    .rw-dropdown-list {
        pointer-events: none;
    }
`;
