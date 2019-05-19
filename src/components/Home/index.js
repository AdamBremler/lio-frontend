import React from 'react';
import Div from './styled/Div';
import Banner from './styled/Banner';
import BannerText from './styled/BannerText';
import Paragraph from './styled/Paragraph';
import Header from './styled/Header';
import Button from './styled/Button';

export default function index() {
    return (
        <Div>
            <Banner>
                <BannerText>
                    <Header>A Simpler way to find internship!</Header>
                    <Paragraph>Lio is a platform for students and companys to connect with eachother. Sign up and create your profile today.</Paragraph>
                    <Button>Join now!</Button>
                </BannerText>
            </Banner>
            <h4>Some info about the company here ?</h4>
        </Div>
    )
}
