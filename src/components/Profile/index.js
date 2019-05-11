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
    console.log(profile)
    return (
        <Div>
            <br />
            <h4>Welcome {profile.firstname}!</h4>
            <br />
            <Link to="/dashboard">Edit profile</Link>
            <br />
            <Link to="/education">Add education</Link>
            <br />
            <Link to="/experience">Add experience</Link>
            <br />
            <Link to={`/profile/${user.id}`}>View profile</Link>
        </Div>
    )
}


const mapStateToProps = state => {
    return {
        profile: state.profile.profile,
        user: state.user.user,
    }
}

export default connect(mapStateToProps, { getProfile })(index)
