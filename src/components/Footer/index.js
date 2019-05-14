import React from 'react'
import Footer from './styled/Footer'
import FooterWrapper from './styled/FooterWrapper';
import StyledLinkLogo from '../Navbar/styled/StyledLinkLogo';

export default function index() {

    return (
        <FooterWrapper>
            <Footer>
                <StyledLinkLogo>LIO</StyledLinkLogo>
                <p>Website made by Adam Bremler and Tolga Köyluoglu</p>
            </Footer>
        </FooterWrapper>
    )
}
