import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getProfile, saveProfile } from '../../actions/profileActions';

const Div = styled.div`
flex-grow: 1;
`;
const Input = styled.input`
width: 40%;
`

const index = ({ getProfile, saveProfile, profile }) => {
    const [formData, setFormData] = useState({
        location: '',
        description: '',
        status: '',
        type: '',
        website: '',
    })
    console.log(profile)
    const { location, description, status, type, website } = formData

    const onChange = e => {
        console.log(e.target.value)
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = e => {
        e.preventDefault()
        saveProfile(formData)
    }

    useEffect(() => {
        getProfile();
    }, [])
    return (
        <Div>
            <h3>Edit Profile</h3>
            <form onSubmit={e => onSubmit(e)}>
                <div>
                    <label>Location: </label>
                    <br />
                    <Input type="text" name="location" placeholder="City" required value={location} onChange={e => onChange(e)} />
                </div>

                <div>
                    <label>Description: </label>
                    <br />
                    <Input type="text" name="description" placeholder="Some bio about yourself" required value={description} onChange={e => onChange(e)} />
                </div>

                <div>
                    <label>Status: </label>
                    <br />
                    <Input type="text" name="status" placeholder="Current status" required value={status} onChange={e => onChange(e)} />
                </div>

                <div>
                    <label>Type: </label>
                    <br />
                    <Input type="text" name="type" placeholder="Are you a student or looking for a job?" required value={type} onChange={e => onChange(e)} />
                </div>

                <div>
                    <label>Website: </label>
                    <br />
                    <Input type="text" name="website" placeholder="Website, linkedin etc" required value={website} onChange={e => onChange(e)} />
                </div>
                <button type="submit">Save Changes</button>
                <Link to="/profile">Back to profile</Link>
            </form>
        </Div>
    )
}

const mapStateToProps = state => {
    return {
        profile: state.profile,
        user: state.user,
    }
}

export default connect(mapStateToProps, { saveProfile, getProfile })(index)
