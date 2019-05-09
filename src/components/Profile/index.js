import styled from 'styled-components';
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
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
            <h2>Profile</h2>
            <Link to="/dashboard">Edit your profile</Link>
        </Div>
    )
}

const mapStateToProps = state => ({
    user: state.user,
    profile: state.profile
})

export default connect(mapStateToProps, { getProfile })(index)
