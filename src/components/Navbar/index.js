import React from 'react'
import { connect } from 'react-redux';
import StyledLinkLogo from './styled/StyledLinkLogo';
import StyledLink from './styled/StyledLink';
import LinkWrapper from './styled/LinkWrapper';
import NavList from './styled/NavList';
import Nav from './styled/Nav';
import Div from './styled/Div';
import Logo from './styled/logo.png';

function index({ user, profile }) {
    const notLoggedIn = (
        <div>
            <NavList>
                <StyledLink to="/login">
                    Login
            </StyledLink>
            </NavList>
        </div>

    )
    const loggedIn = (
        <LinkWrapper>
            <NavList>
                <StyledLink to="/logout">Logout</StyledLink>
            </NavList>
            <NavList>
                <StyledLink to="/profile">Profile</StyledLink>
            </NavList>
        </LinkWrapper>
    )
    return (
        <Div>
            <Nav>
                <StyledLinkLogo src={Logo}></StyledLinkLogo>
                <LinkWrapper>
                    {user ? loggedIn : notLoggedIn}
                    <NavList>
                        <StyledLink to="/">Home</StyledLink>
                    </NavList>
                    <NavList>
                        <StyledLink to="/feed">Feed</StyledLink>
                    </NavList>
                </LinkWrapper>
            </Nav>
        </Div>
    )
}

const mapStateToProps = state => ({
    user: state.user.user,
    profile: state.profile.profile
});

export default connect(
    mapStateToProps
)(index);
