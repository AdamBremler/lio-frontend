import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { getProfile } from '../../actions/profileActions';
import Div from './styled/Div';
import Header from './styled/Header';
import LinkWrapper from './styled/LinkWrapper';
import Button from './styled/Button';
import TextWrapper from './styled/TextWrapper';
import Picture from './styled/Picture';
import ImgWrapper from './styled/ImgWrapper';
import DisplayExperience from './DisplayExperience';
import DisplayEducation from './DisplayEducation';

const index = ({ getProfile, user, profile }) => {
    useEffect(() => {
        getProfile();
    }, [])
    return (
        <Div>
            {profile !== '' && !isEmpty(profile) ? (
                <Div>
                    <Header>
                        Welcome {profile.firstname}!
                        </Header>
                    <ImgWrapper>
                        <Picture src={profile.picture}></Picture>
                    </ImgWrapper>
                    <TextWrapper>
                        Here you can edit and add information to your profile.
                        </TextWrapper>
                    {profile.type === 'Company' ? (
                        <LinkWrapper>
                            <Link to="/dashboard">
                                <Button>Edit Profile</Button>
                            </Link>
                            <Link to={`/profile/${profile._id}`}>
                                <Button>View profile</Button>
                            </Link>
                        </LinkWrapper>
                    ) : (
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
                                <Link to={`/profile/${profile._id}`}>
                                    <Button>View profile</Button>
                                </Link>
                            </LinkWrapper>
                        )}

                    {profile.type === 'Company' ? (
                        <div></div>
                    ) : (
                            <div>
                                <DisplayExperience experience={profile.experience} />
                                <DisplayEducation education={profile.education} />
                            </div>
                        )}
                </Div>
            ) : (
                    <div>
                        <p>You have not setup a profile yet, please add some info.</p>
                        <Link to="/dashboard">Create Profile</Link>
                    </div>
                )}
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
