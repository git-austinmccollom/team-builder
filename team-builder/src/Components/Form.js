import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    border: 1px solid black;
    border-radius: 10px;
    width: 40%;
    margin: auto;
    padding 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
        margin: 5px 0 5px;
    }
`

export default function Form(props) {
    const { formValues, updateForm, submitForm } = props

    const onChange = (event) => {
        const { name, value } = event.target;
        console.log(event.target);
        updateForm( name, value )
    }

    const onSubmit = (event) => {
        event.preventDefault();
        submitForm();
    }

    return (
        <StyledForm onSubmit={onSubmit}>
            <h2>add team member:</h2>
            <input
                value={formValues.name}
                name='name'
                type='text'
                maxLength='20'
                placeholder='Name'
                onChange={onChange}
            />
            <input
                value={formValues.email}
                name='email'
                type='email'
                maxLength='20'
                placeholder='Email'
                onChange={onChange}
            />
            <input
                value={formValues.role}
                name='role'
                type='text'
                maxLength='20'
                placeholder='Role'
                onChange={onChange}
            />
            <button>submit</button>
        </StyledForm>
    )
}