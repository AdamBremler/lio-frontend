import React from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/userActions';
import RegisterForm from './RegisterForm';
import styled from 'styled-components';
import normalize from '../../helpers/normalizeBeforeSubmit';

const Div = styled.div`
    flex-grow: 1;
`;

function index({ register, isLoading, error }) {
    return (
        <Div>
            <RegisterForm onSubmit={normalize(register)} />
            {error}
        </Div>
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
