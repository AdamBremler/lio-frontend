import React from 'react'
import ParagraphBottom from './styled/ParagraphBottom';

const Education = ({ education: { school, degree, field, description, current, from, to } }) => {
    return (
        <div>
            <ParagraphBottom>School: {school}</ParagraphBottom>
            <ParagraphBottom>Program: {field}</ParagraphBottom>
            <ParagraphBottom>Degree: {degree}</ParagraphBottom>
            <ParagraphBottom>Description: {description}</ParagraphBottom>
        </div>
    )
}


export default Education