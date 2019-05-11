import styled from 'styled-components';
import { Link } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux';

const Div = styled.div`
        flex-grow: 1;
`;

const index = ({ user: { user } }) => {
    return (
        <Div>
            <br />
            <h4>Welcome {user.name}!</h4>
            <br />
            <Link to="/dashboard">Edit profile</Link>
            <br />
            <Link to="/education">Add education</Link>
            <br />
            <Link to="/experience">Add experience</Link>
            <br />
            <Link to={`/profile/${user.id}`}>View profile</Link>
        </Div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps)(index)
