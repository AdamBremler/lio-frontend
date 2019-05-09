import React, { useEffect } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getProfile } from '../../actions/profileActions';
const Div = styled.div`
        flex-grow: 1;
`;

const index = ({ getProfile, user, profile }) => {
    useEffect(() => {
        getProfile();
    }, [])
    return (
        <Div>
            <h1>Dashboard</h1>
        </Div>
    )
}

const mapStateToProps = state => ({
    user: state.user,
    profile: state.profile
})

export default connect(mapStateToProps, { getProfile })(index)
