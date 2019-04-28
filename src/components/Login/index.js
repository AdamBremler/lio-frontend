import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/userActions';
import LoginForm from './LoginForm';

function index({ login, isLoading, error }) {
    return (
        <div>
            <LoginForm onSubmit={login} />
            {error}
        </div>
    )
}

const mapStateToProps = state => ({
    isLoading: state.login.isLoading,
    error: state.login.error
});

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(index);
