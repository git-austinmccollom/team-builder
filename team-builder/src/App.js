import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import uuid from 'react-uuid';
import Form from './Components/Form'
import TeamMember from './Components/TeamMember'

const initialTeam = {
  id: 1,
  name: 'Austin McCollom',
  email: 'austinmccollom@gmail.com',
  role: 'Full-Stack Web Developer'
}

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {
  const [ team, setTeam ] = useState([initialTeam]);
  const [ formValues, setFormValues ] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues( { ...formValues, [inputName]: inputValue } );
  }

  const submitForm = () => {
    const newMember = {
      id: uuid(),
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim()
    }
    console.log(newMember);
    setTeam( [...team, newMember])
  }
  return (
    <div className="App">
      <h1>Team</h1>
      <Form formValues={formValues} updateForm={updateForm} submitForm={submitForm}/>
      {
        team.map( member => {
          return <TeamMember key={member.id} member={member} />
        })
      }
    </div>
  );
}

export default App;
