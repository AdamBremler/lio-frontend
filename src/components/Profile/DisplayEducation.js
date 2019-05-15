import React from 'react'
import Table from './styled/Table';
import Th from './styled/Th';
import Tr from './styled/Tr';
import DeleteBtn from './styled/DeleteBtn';

const DisplayEducation = ({ education }) => {
    const EducationList = education.map(i => {
        return (
            <Tr key={i._id}>
                <Th>{i.school}</Th>
                <Th>{i.field}</Th>
                <Th>{i.degree}</Th>
                <Th>{i.from} - {i.to}</Th>
                <Th><DeleteBtn>Delete</DeleteBtn></Th>
            </Tr>
        )
    })
    return (
        <div>
            <h4>Experience</h4>
            <Table>
                <tr>
                    <Th>School</Th>
                    <Th>Program</Th>
                    <Th>Degree</Th>
                    <Th>Years</Th>
                    <Th></Th>
                </tr>
                {EducationList}
            </Table>
        </div>
    )
}
export default DisplayEducation

