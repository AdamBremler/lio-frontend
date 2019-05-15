import React from 'react';
import { connect } from 'react-redux';
import Table from './styled/Table';
import Th from './styled/Th';
import Tr from './styled/Tr';
import DeleteBtn from './styled/DeleteBtn';
import Thead from './styled/Thead';
import { deleteExp } from '../../actions/profileActions';

const DisplayExperience = ({ experience, deleteExp }) => {

    const onSubmit = (id) => {
        deleteExp(id)
    }

    const experienceList = experience.map(exp => {
        return (
            <Tr key={exp._id}>
                <Th>{exp.company}</Th>
                <Th>{exp.title}</Th>
                <Th>{exp.from} - {exp.to}</Th>
                <Th><DeleteBtn onClick={() => onSubmit(exp._id)}>Delete</DeleteBtn></Th>
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
                        <Th>Years</Th>
                        <Th></Th>
                    </tr>
                </Thead>
                <tbody>
                    {experienceList}
                </tbody>
            </Table>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        profile: state.profile.profile,
        user: state.user.user,
    }
}

export default connect(mapStateToProps, { deleteExp })(DisplayExperience)

