import styled from 'styled-components';
import Pic from './pic.jpg'

export default styled.div`
    background-image: linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(${Pic});
    height: 900px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
`;