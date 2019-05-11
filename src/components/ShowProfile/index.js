import styled from 'styled-components';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getProfile } from '../../actions/profileActions';

const Div = styled.div`
        flex-grow: 1;
`;

const index = ({ getProfile, profile: { profile, user }, match, user: { loggedinUser } }) => {
    useEffect(() => {
        getProfile(match.params.id)
    }, [getProfile])
    console.log(profile)
    return (
        <Div>
            <p>Name: {profile.firstname} {profile.surname}</p>
            <p>{profile.picture}</p>
            <p>Status: {profile.status}</p>
            <p>Location: {profile.location}</p>
            <p>Bio: {profile.description}</p>
            <p>Website: {profile.website}</p>
            <p>Skills: {profile.skills}</p>
        </Div>
    )
}

index.propTypes = {

}

const mapStateToProps = state => {
    return {
        profile: state.profile,
        user: state.user,
    }
}

export default connect(mapStateToProps, { getProfile })(index)
