import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Pagination from './styled/Pagination';
import locale from 'rc-pagination/lib/locale/en_US';
import { setCurrentPage } from '../../../actions/paginationActions';

function index({ name, pagination, handleChange, current, pageSize, ...props }) {
    useEffect(() => {
        if (pagination[name] == undefined) {
            handleChange(name, current || pagination.default.current, pageSize || pagination.default.pageSize);
        }
    }, []);

    return (
        <Pagination
            locale={locale}
            {...props}
            current={pagination[name] ? pagination[name].current : pagination.default.current}
            pageSize={pagination[name] ? pagination[name].pageSize : pagination.default.pageSize}
            onChange={(current, pageSize) => handleChange(name, current, pageSize)}
        />
    );
}

index.propTypes = {
    name: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    pagination: state.pagination
});

const mapDispatchToProps = dispatch => ({
    handleChange: (name, current, pageSize) => dispatch(setCurrentPage(name, current, pageSize))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(index);
