import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getProfilebyId } from '../../actions/profileActions';
import Experience from './Experience';
import Education from './Education';
import Wrapper from './styled/Wrapper';
import BottomContainer from './styled/BottomContainer';
import Picture from '../Profile/styled/Picture';
import Paragraph from './styled/Paragraph';

const index = ({ getProfilebyId, profile, match, user }) => {
    useEffect(() => {
        getProfilebyId(match.params.id)
    }, [getProfilebyId])
    console.log(profile.education)
    return (
        <Wrapper>
            <Picture src={profile.picture} alt={profile.firstname}></Picture>
            <BottomContainer>
                <h1>{profile.firstname} {profile.surname}</h1>
                <Paragraph>{profile.status}</Paragraph>
                <Paragraph>{profile.location}</Paragraph>
                <Paragraph>{profile.description}</Paragraph>
                <Paragraph>{profile.website}</Paragraph>
                <Paragraph>Skills: {profile.skills}</Paragraph>
            </BottomContainer>
            <h2>Experience:</h2>
            {profile.experience.length > 0 ? (
                <div>
                    {profile.experience.map(experience => (
                        <Experience key={experience._id} experience={experience} />
                    ))}
                </div>
            ) : (
                    <h2>No experience</h2>
                )}
            <h2>Education:</h2>
            {profile.education.length > 0 ? (
                <div>
                    {profile.education.map(education => (
                        <Education key={education._id} education={education} />
                    ))}
                </div>
            ) : (
                    <h2>No education</h2>
                )}
        </Wrapper>
    )
}

const mapStateToProps = state => {
    return {
        profile: state.profile.profile,
        user: state.user.user,
    }
}

export default connect(mapStateToProps, { getProfilebyId })(index)
