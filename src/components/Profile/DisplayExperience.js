import React from 'react';
import { connect } from 'react-redux';
import Table from './styled/Table';
import Th from './styled/Th';
import Tr from './styled/Tr';
import DeleteBtn from './styled/DeleteBtn';
import Thead from './styled/Thead';
import { deleteExp } from '../../actions/profileActions';

const DisplayExperience = ({ experience, deleteExp }) => {

    const experienceList = experience.map(exp => {
        return (
            <Tr key={exp._id}>
                <Th>{exp.company}</Th>
                <Th>{exp.title}</Th>
                <Th>{exp.from}</Th>
                <Th>{exp.to}</Th>
                <Th><DeleteBtn onClick={() => deleteExp(exp._id)}>Delete</DeleteBtn></Th>
            </Tr>
        )
    })
    return (
        <div>
            <h4>Experience:</h4>
            <Table>
                <Thead>
                    <tr>
                        <Th>Company</Th>
                        <Th>Title</Th>
                        <Th>Date from</Th>
                        <Th>Date to</Th>
                    </tr>
                </Thead>
                <tbody>
                    {experienceList}
                </tbody>
            </Table>
        </div>
    )
}


export default connect(null, { deleteExp })(DisplayExperience)

