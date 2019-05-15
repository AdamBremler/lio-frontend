import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getProfilebyId } from '../../actions/profileActions';
import Experience from './Experience';
import Education from './Education';
import Wrapper from './styled/Wrapper';
import Picture from '../Profile/styled/Picture';
import Paragraph from './styled/Paragraph';
import ImgWrap from './styled/ImgWrap';
import Header from './styled/Header';
import TopContainer from './styled/TopContainer';
import BottomContainer from './styled/BottomContainer';
import { Link } from 'react-router-dom'
import HeaderBio from './styled/HeaderBio';
import LinkWrap from '../ShowProfile/styled/LinkWrap';

const index = ({ getProfilebyId, profile, match, user }) => {
    useEffect(() => {
        getProfilebyId(match.params.id)
    }, [getProfilebyId])
    console.log(profile.education)
    return (
        <Wrapper>
            <ImgWrap>
                <Picture src={profile.picture} alt={profile.firstname}></Picture>
            </ImgWrap>
            <TopContainer>
                <Header>{profile.firstname} {profile.surname}</Header>
                <Paragraph>{profile.status}</Paragraph>
                <Paragraph>{profile.location}</Paragraph>
                <HeaderBio>About {profile.firstname}:</HeaderBio>
                <Paragraph>{profile.description}</Paragraph>
                <LinkWrap>
                    <Link to={profile.website}>{profile.website}</Link>
                </LinkWrap>
                <HeaderBio>Skills:</HeaderBio>
                <Paragraph>{profile.skills}</Paragraph>
            </TopContainer>
            <BottomContainer>
                {profile.experience.length > 0 ? (
                    <div>
                        <HeaderBio>Experience</HeaderBio>
                        {profile.experience.map(experience => (
                            <Experience key={experience._id} experience={experience} />
                        ))}
                    </div>
                ) : (
                        <HeaderBio>No experience</HeaderBio>
                    )}
                {profile.education.length > 0 ? (
                    <div>
                        <HeaderBio>Education</HeaderBio>
                        {profile.education.map(education => (
                            <Education key={education._id} education={education} />
                        ))}
                    </div>
                ) : (
                        <HeaderBio>No education</HeaderBio>
                    )}
            </BottomContainer>
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
