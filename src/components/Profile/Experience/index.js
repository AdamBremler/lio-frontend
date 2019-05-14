import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveExperience } from '../../../actions/profileActions';

//todo: Fix datetimepicker when feed and profile is merged to develop
const Div = styled.div`
flex-grow: 1;
`;
const Input = styled.input`
width: 40%;
`

const index = ({ saveExperience, profile: { profile } }) => {
    const [formData, setFormData] = useState({

    })
    console.log(profile)
    const { title, company, location, description, from, to, isEmployed } = formData

    const onChange = e => {
        console.log(e.target.value)
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = e => {
        e.preventDefault()
        saveExperience(formData)
    }

    return (
        <Div>
            <h3>Add experience</h3>
            <form onSubmit={e => onSubmit(e)}>
                <div>
                    <label>Title: </label>
                    <br />
                    <Input type="text" name="title" placeholder="Title" value={title} onChange={e => onChange(e)} />
                </div>
                <div>
                    <label>Company: </label>
                    <br />
                    <Input type="text" name="company" placeholder="Name of the company" value={company} onChange={e => onChange(e)} />
                </div>
                <div>
                    <label>Location: </label>
                    <br />
                    <Input type="text" name="location" placeholder="Location of the company" value={location} onChange={e => onChange(e)} />
                </div>

                <div>
                    <label>Description: </label>
                    <br />
                    <Input type="text" name="description" placeholder="Optional description" value={description} onChange={e => onChange(e)} />
                </div>

                <div>
                    <label>Date from: </label>
                    <br />
                    <Input type="text" name="from" value={from} onChange={e => onChange(e)} />
                </div>

                <div>
                    Current
                    <input type="checkbox" name="isEmployed" value={isEmployed} onChange={e => onChange(e)} />
                    <br />
                    <label>Date to: </label>
                    <br />
                    <Input type="text" name="to" value={to} onChange={e => onChange(e)} />
                </div>

                <button type="submit">Submit</button>
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

export default connect(mapStateToProps, { saveExperience })(index)
