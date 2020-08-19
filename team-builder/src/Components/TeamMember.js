import React from 'react'
import styled from 'styled-components'

export default function TeamMember(props) {
    const { name, email } = props.member

    const TeamMemberDiv = styled.div`
        border: 1px solid black;
        border-radius: 10px;
        display: flex;
        width: 80%;
        justify-content: center;
        margin: 20px auto 20px;
        p {
            padding: 1%;
        }
    `

    return (
        <TeamMemberDiv>
            <p>team member: {name}</p>
            <p>email: {email}</p>
        </TeamMemberDiv>
    )
}