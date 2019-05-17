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
import TopWrap from './styled/TopWrap';
import InfoWrap from './styled/InfoWrap';
import SkillsWrap from './styled/SkillsWrap';

const index = ({ getProfilebyId, profile, match, user }) => {
    useEffect(() => {
        getProfilebyId(match.params.id)
    }, [getProfilebyId])
    return (
        <Wrapper>
            <TopWrap>
                <Header>{profile.firstname} {profile.surname}</Header>
                <div>
                    <ImgWrap>
                        <Picture src={profile.picture} alt={profile.firstname}></Picture>
                    </ImgWrap>
                    <TopContainer>
                        <HeaderBio>About {profile.firstname}:</HeaderBio>
                        <Paragraph>{profile.description}</Paragraph>
                    </TopContainer>
                </div>
            </TopWrap>
            <SkillsWrap>
                <HeaderBio>Skills:</HeaderBio>
                <Paragraph>{profile.skills}</Paragraph>
            </SkillsWrap>
            <InfoWrap>
                <Paragraph>{profile.status}</Paragraph>
                <Paragraph>{profile.location}</Paragraph>
                <LinkWrap>
                    <Link to={profile.website}>{profile.website}</Link>
                </LinkWrap>
            </InfoWrap>
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
