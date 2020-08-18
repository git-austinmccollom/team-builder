import React from 'react'


export default function Form(props) {

    return (
        <form>
            <input
                name='name'
                type='text'
                maxLength='20'
                placeholder='Name'
            />
        </form>
    )
}