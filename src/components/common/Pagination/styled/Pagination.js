import styled from 'styled-components';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

export default styled(Pagination)`
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;

    .rc-pagination-item, .rc-pagination-jump-next, .rc-pagination-jump-prev, .rc-pagination-prev, .rc-pagination-next {
        padding: 0%;
        color: ${({ theme }) => theme.textColor.tertiary};
        background-color: ${({ theme }) => theme.bg.primary};
        box-shadow: ${({ theme }) => theme.shadow.primary};
        border-radius: 5px;

        :hover a {
            color: ${({ theme }) => theme.color.primary};
        }

        :not(.rc-pagination-item-active) {
            border-color: ${({ theme }) => theme.bg.primary};
        }

        &.rc-pagination-item-active {
            border-color: ${({ theme }) => theme.color.primary};
        }
    }
`;
