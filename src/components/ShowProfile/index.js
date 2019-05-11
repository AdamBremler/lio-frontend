import styled from 'styled-components';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getProfilebyId } from '../../actions/profileActions';

const Div = styled.div`
        flex-grow: 1;
`;

const index = ({ getProfilebyId, profile, match, user }) => {
    useEffect(() => {
        getProfilebyId(match.params.id)
    }, [getProfilebyId])
    console.log(profile)
    return (
        <Div>
            <p>Name: {profile.firstname} {profile.surname}</p>
            <img src={profile.picture} alt="selfie" />
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
        profile: state.profile.profile,
        user: state.user.user,
    }
}

export default connect(mapStateToProps, { getProfilebyId })(index)
