import React from 'react'
import ParagraphBottom from './styled/ParagraphBottom';

const Experience = ({ experience: { company, title, location, current, from, to, description } }) => {
    return (
        <div>
            <h4>Experience:</h4>
            <ParagraphBottom>Company name: {company}</ParagraphBottom>
            <ParagraphBottom>Position: {title}</ParagraphBottom>
            <ParagraphBottom>Location: {location}</ParagraphBottom>
            <ParagraphBottom>Description: {description}</ParagraphBottom>
        </div>
    )
}


export default Experience
