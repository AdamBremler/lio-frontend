import React from 'react'
import Table from './styled/Table';
import Th from './styled/Th';
import Tr from './styled/Tr';
import DeleteBtn from './styled/DeleteBtn';

const DisplayExperience = ({ experience }) => {
    const experienceList = experience.map(exp => {
        return (
            <Tr key={exp._id}>
                <Th>{exp.company}</Th>
                <Th>{exp.title}</Th>
                <Th>{exp.from} - {exp.to}</Th>
                <Th><DeleteBtn>Delete</DeleteBtn></Th>
            </Tr>
        )
    })
    return (
        <div>
            <h4>Experience</h4>
            <Table>
                <tr>
                    <Th>Company</Th>
                    <Th>Title</Th>
                    <Th>Years</Th>
                    <Th></Th>
                </tr>
                {experienceList}
            </Table>
        </div>
    )
}

export default DisplayExperience

