import React from 'react'
import Table from './styled/Table';
import Th from './styled/Th';
import Tr from './styled/Tr';
import DeleteBtn from './styled/DeleteBtn';
import Thead from './styled/Thead';

const DisplayEducation = ({ education }) => {

    const EducationList = education.map(i => {
        return (
            <Tr key={i._id}>
                <Th>{i.school}</Th>
                <Th>{i.field}</Th>
                <Th>{i.degree}</Th>
                <Th>{i.from} - {i.to}</Th>
                <Th><DeleteBtn type="submit">Delete</DeleteBtn></Th>
            </Tr>
        )
    })
    return (
        <div>
            <h4>Education:</h4>
            <Table>
                <Thead>
                    <tr>
                        <Th>School</Th>
                        <Th>Program</Th>
                        <Th>Degree</Th>
                        <Th>Years</Th>
                        <Th></Th>
                    </tr>
                </Thead>
                <tbody>
                    {EducationList}
                </tbody>
            </Table>
        </div>
    )
}
export default DisplayEducation

