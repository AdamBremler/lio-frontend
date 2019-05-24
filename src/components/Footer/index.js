import React from 'react'
import Footer from './styled/Footer'
import FooterWrapper from './styled/FooterWrapper';
import StyledLinkLogo from '../Navbar/styled/StyledLinkLogo';
import Logo from '../Navbar/styled/logo.png';
import P from './styled/P';

export default function index() {

    return (
        <FooterWrapper>
            <Footer>
                <StyledLinkLogo src={Logo}></StyledLinkLogo>
                <P>Copyright © 2019 Lio</P>
            </Footer>
        </FooterWrapper>
    )
}
