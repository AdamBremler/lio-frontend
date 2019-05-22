import React from 'react'
import ParagraphBottom from './styled/ParagraphBottom';

const Experience = ({ experience: { company, title, location, current, from, to, description } }) => {
    return (
        <div>
            <br />
            <ParagraphBottom>Company name: {company}</ParagraphBottom>
            <ParagraphBottom>Title: {title}</ParagraphBottom>
            <ParagraphBottom>Location: {location}</ParagraphBottom>
            <ParagraphBottom>Description: {description}</ParagraphBottom>
            <ParagraphBottom>Date from: {from}</ParagraphBottom>
            <ParagraphBottom>Date to: {to}</ParagraphBottom>
        </div>
    )
}


export default Experience
