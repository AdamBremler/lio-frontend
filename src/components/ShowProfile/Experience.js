import React from 'react'


const Experience = ({ experience: { company, title, location, current, from, to, description } }) => {
    return (
        <div>
            <p>Company name: {company}</p>
            <p>Position: {title}</p>
            <p>Location: {location}</p>
            <p>Description: {description}</p>
        </div>
    )
}


export default Experience
