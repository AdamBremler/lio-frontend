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
import Div from './styled/WrapEduAndExp';
import TagList from '../common/TagList';

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
                        <HeaderBio>About {profile.firstname || profile.name}:</HeaderBio>
                        <Paragraph>{profile.description}</Paragraph>
                    </TopContainer>
                </div>
            </TopWrap>
            {profile.skills ? (
                <SkillsWrap>
                    <HeaderBio>Skills:</HeaderBio>
                    <TagList list={profile.skills.slice(0, 10)} />
                </SkillsWrap>
            ) : null}
            <InfoWrap>
                <HeaderBio>Details</HeaderBio>
                <Paragraph>Status: {profile.status}</Paragraph>
                <Paragraph>Location: {profile.location}</Paragraph>
                <LinkWrap>
                    Website: <Link to={profile.website}>{profile.website}</Link>
                </LinkWrap>
            </InfoWrap>
            {profile.type === 'Company' ? (
                <BottomContainer></BottomContainer>
            ) : (
                    <BottomContainer>
                        {profile.experience && profile.experience.length > 0 ? (
                            <Div>
                                <HeaderBio>Experience</HeaderBio>
                                {profile.experience.map(experience => (
                                    <Experience key={experience._id} experience={experience} />
                                ))}
                            </Div>
                        ) : (
                                <HeaderBio>No experience</HeaderBio>
                            )}
                        {profile.education && profile.education.length > 0 ? (
                            <Div>
                                <HeaderBio>Education</HeaderBio>
                                {profile.education.map(education => (
                                    <Education key={education._id} education={education} />
                                ))}
                            </Div>
                        ) : (
                                <HeaderBio>No education</HeaderBio>
                            )}
                    </BottomContainer>
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
