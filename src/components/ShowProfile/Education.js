import React from 'react'
import Paragraph from './styled/Paragraph';

const Education = ({ education: { school, degree, field, description, current, from, to } }) => {
    return (
        <div>
            <Paragraph>School: {school}</Paragraph>
            <Paragraph>Program: {field}</Paragraph>
            <Paragraph>Degree: {degree}</Paragraph>
            <Paragraph>Description: {description}</Paragraph>
        </div>
    )
}


export default Education