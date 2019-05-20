import React from 'react';
import Div from './styled/Div';
import Banner from './styled/Banner';
import BannerText from './styled/BannerText';
import Paragraph from './styled/Paragraph';
import Header from './styled/Header';
import Button from './styled/Button';
import { Link } from 'react-router-dom'

export default function index() {
    return (
        <Div>
            <Banner>
                <BannerText>
                    <Header>A Simpler way to find internship!</Header>
                    <Paragraph>Lio is a platform for students and companys to connect with eachother. Sign up and create your profile today.</Paragraph>
                    <Link to="/register">
                    <Button>Join now!</Button>
                    </Link>
                    <Link to="/login">
                    <Button>Login</Button>
                    </Link>
                </BannerText>
            </Banner>
        </Div>
    )
}
