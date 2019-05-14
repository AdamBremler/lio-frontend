import styled from 'styled-components';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getProfilebyId } from '../../actions/profileActions';
import Experience from './Experience';
import Education from './Education';
const Div = styled.div`
        flex-grow: 1;
`;

const index = ({ getProfilebyId, profile, match, user }) => {
    useEffect(() => {
        getProfilebyId(match.params.id)
    }, [getProfilebyId])
    console.log(profile.education)
    return (
        <Div>
            <p>Name: {profile.firstname} {profile.surname}</p>
            <img src={profile.picture} alt="selfie" />
            <p>Status: {profile.status}</p>
            <p>Location: {profile.location}</p>
            <p>Bio: {profile.description}</p>
            <p>Website: {profile.website}</p>
            <p>Skills: {profile.skills}</p>
            <h5>Experience:</h5>
            {profile.experience.length > 0 ? (
                <div>
                    {profile.experience.map(experience => (
                        <Experience key={experience._id} experience={experience} />
                    ))}
                </div>
            ) : (
                    <h5>No experience</h5>
                )}
            <h5>Education:</h5>
            {profile.education.length > 0 ? (
                <div>
                    {profile.education.map(education => (
                        <Education key={education._id} education={education} />
                    ))}
                </div>
            ) : (
                    <h5>No education</h5>
                )}
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
