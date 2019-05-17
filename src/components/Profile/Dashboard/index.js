import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProfile, saveProfile } from '../../../actions/profileActions';

const Div = styled.div`
flex-grow: 1;
`;
const Input = styled.input`
width: 40%;
`

const index = ({ getProfile, saveProfile, profile: { profile } }) => {
    const [formData, setFormData] = useState({
        firstname: !profile.firstname ? '' : profile.firstname,
        location: !profile.location ? '' : profile.location,
        surname: !profile.surname ? '' : profile.surname,
        picture: !profile.picture ? 'https://heartvalvevoice.com/application/files/avatars/avatar-default.png' : profile.picture,
        description: !profile.description ? '' : profile.description,
        status: !profile.status ? '' : profile.status,
        type: !profile.type ? '' : profile.type,
        website: !profile.website ? '' : profile.website,
        skills: !profile.skills ? '' : profile.skills,
    })
    const { firstname, surname, picture, location, description, status, type, website, skills } = formData

    const onChange = e => {
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
                    <label>First name: </label>
                    <br />
                    <Input type="text" name="firstname" placeholder="First name" value={firstname} onChange={e => onChange(e)} />
                </div>
                <div>
                    <label>Last name: </label>
                    <br />
                    <Input type="text" name="surname" placeholder="Last name" value={surname} onChange={e => onChange(e)} />
                </div>
                <div>
                    <label>Location: </label>
                    <br />
                    <Input type="text" name="picture" placeholder="Photo URL, e.g: wwww.myphoto.com" value={picture} onChange={e => onChange(e)} />
                </div>
                <div>
                    <label>Location: </label>
                    <br />
                    <Input type="text" name="location" placeholder="City" value={location} onChange={e => onChange(e)} />
                </div>

                <div>
                    <label>Description: </label>
                    <br />
                    <Input type="text" name="description" placeholder="Some bio about yourself" value={description} onChange={e => onChange(e)} />
                </div>

                <div>
                    <label>Status: </label>
                    <br />
                    <Input type="text" name="status" placeholder="Current status" value={status} onChange={e => onChange(e)} />
                </div>

                <div>
                    <label>Type: </label>
                    <br />
                    <Input type="text" name="type" placeholder="Are you a student or looking for a job?" value={type} onChange={e => onChange(e)} />
                </div>

                <div>
                    <label>Skills: </label>
                    <br />
                    <Input type="text" name="skills" placeholder="Main skills e.g: Developer, Javascript, Frontend.." value={skills} onChange={e => onChange(e)} />
                </div>

                <div>
                    <label>Website: </label>
                    <br />
                    <Input type="text" name="website" placeholder="Website, linkedin etc" value={website} onChange={e => onChange(e)} />
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
