import React from 'react'
import Paragraph from './styled/Paragraph';

const Experience = ({ experience: { company, title, location, current, from, to, description } }) => {
    return (
        <div>
            <Paragraph>Company name: {company}</Paragraph>
            <Paragraph>Position: {title}</Paragraph>
            <Paragraph>Location: {location}</Paragraph>
            <Paragraph>Description: {description}</Paragraph>
        </div>
    )
}


export default Experience
