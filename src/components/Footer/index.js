import React from 'react'
import Footer from './styled/Footer'
import FooterWrapper from './styled/FooterWrapper';
import StyledLinkLogo from '../Navbar/styled/StyledLinkLogo';
import Logo from '../Navbar/styled/logo.png';

export default function index() {

    return (
        <FooterWrapper>
            <Footer>
                <StyledLinkLogo src={Logo}></StyledLinkLogo>
                <p>@Copyright  © 2019 LIO</p>
            </Footer>
        </FooterWrapper>
    )
}
