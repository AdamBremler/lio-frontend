import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/userActions';
import LoginForm from './LoginForm';
import styled from 'styled-components';

const Div = styled.div`
    flex-grow: 1;
`;

function index({ login, isLoading, error }) {
    return (
        <Div>
            <LoginForm onSubmit={login} />
            {error}
        </Div>
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
