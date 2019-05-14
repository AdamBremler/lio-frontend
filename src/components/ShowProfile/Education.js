import React from 'react'


const Education = ({ education: { school, degree, field, description, current, from, to } }) => {
    return (
        <div>
            <p>School: {school}</p>
            <p>Program: {field}</p>
            <p>Degree: {degree}</p>
            <p>Description: {description}</p>
        </div>
    )
}


export default Education