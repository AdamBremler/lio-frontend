import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { PUBLIC_ROUTE_REDIRECT_PATH } from '../../constants/paths';

function PublicRoute(props) {
    const { token, ...other } = props;

    return token ? <Redirect to={PUBLIC_ROUTE_REDIRECT_PATH} /> : <Route {...other} />;
}

const mapStateToProps = state => ({
    token: state.user.token
});

export default connect(
    mapStateToProps
)(PublicRoute);
