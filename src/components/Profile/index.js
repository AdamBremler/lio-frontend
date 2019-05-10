import styled from 'styled-components';
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getProfile } from '../../actions/profileActions';

const Div = styled.div`
        flex-grow: 1;
`;

const index = ({ getProfile, user: { user }, profile: { profile } }) => {
    useEffect(() => {
        getProfile();
    }, [])
    console.log(profile)
    return (
        <Div>
            <h2>Profile</h2>
            <br />
            <h4>Welcome {user.name}!</h4>
            <p>Location: {profile.location}</p>
            <p>Description: {profile.description}</p>
            <p>Status: {profile.status}</p>
            <p>Type: {profile.type}</p>
            <p>Website: {profile.website}</p>
            <p>Registration Date: {profile.date}</p>
            <Link to="/dashboard">Edit your profile</Link>
        </Div>
    )
}

const mapStateToProps = state => {
    return {
        profile: state.profile,
        user: state.user,
    }
}

export default connect(mapStateToProps, { getProfile })(index)
