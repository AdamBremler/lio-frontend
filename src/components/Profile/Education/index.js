import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveEducation } from '../../../actions/profileActions';

const Div = styled.div`
flex-grow: 1;
`;
const Input = styled.input`
width: 40%;
`

const index = ({ saveEducation, profile: { profile } }) => {
    const [formData, setFormData] = useState({

    })
    console.log(profile)
    const { school, degree, field, description, from, to, isStudying } = formData

    const onChange = e => {
        console.log(e.target.value)
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = e => {
        e.preventDefault()
        saveEducation(formData)
    }

    return (
        <Div>
            <h3>Add education</h3>
            <form onSubmit={e => onSubmit(e)}>
                <div>
                    <label>Name of school/university: </label>
                    <br />
                    <Input type="text" name="school" placeholder="Name of school/university" value={school} onChange={e => onChange(e)} />
                </div>
                <div>
                    <label>Degree: </label>
                    <br />
                    <Input type="text" name="degree" placeholder="E.g: 'Bachelor's degree'" value={degree} onChange={e => onChange(e)} />
                </div>
                <div>
                    <label>Program: </label>
                    <br />
                    <Input type="text" name="field" placeholder="E.g: Software Developer" value={field} onChange={e => onChange(e)} />
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
                    <input type="checkbox" name="isStudying" value={isStudying} onChange={e => onChange(e)} />
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

export default connect(mapStateToProps, { saveEducation })(index)

