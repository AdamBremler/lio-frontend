import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getProfile } from '../../actions/profileActions';
import Div from './styled/Div';
import Header from './styled/Header';
import LinkWrapper from './styled/LinkWrapper';
import Button from './styled/Button';
import TextWrapper from './styled/TextWrapper';
import Picture from './styled/Picture';
import ImgWrapper from './styled/ImgWrapper';

const index = ({ getProfile, user, profile }) => {
    useEffect(() => {
        getProfile();
    }, [])
    console.log(profile)
    return (
        <Div>
            <Header>
                Welcome {profile.firstname}!
            </Header>
            <ImgWrapper>
                <Picture src={profile.picture}></Picture>
            </ImgWrapper>
            <TextWrapper>
                Here you can add and edit your profile information.
            </TextWrapper>
            <LinkWrapper>
                <Link to="/dashboard">
                    <Button>Edit Profile</Button>
                </Link>
                <Link to="/education">
                    <Button>Add education</Button>
                </Link>
                <Link to="/experience">
                    <Button>Add experience</Button>
                </Link>
                <Link to={`/profile/${user.id}`}>
                    <Button>View profile</Button>
                </Link>
            </LinkWrapper>
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
