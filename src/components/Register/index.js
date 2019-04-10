import React from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/userActions';
import RegisterForm from './RegisterForm';

function index({ register, isLoading, error }) {
    return (
        <div>
            <RegisterForm onSubmit={register} />
        </div>
    )
}

const mapStateToProps = state => ({
    isLoading: state.registration.isLoading,
    error: state.registration.error
});

const mapDispatchToProps = dispatch => ({
    register: user => dispatch(register(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(index);
