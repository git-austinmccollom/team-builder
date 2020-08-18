import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import uuid from 'react-uuid';
import Form from './Components/Form'
import TeamMember from './Components/TeamMember'

function App() {
  const [ team, setTeam ] = useState([{id: uuid(), name: 'Austin McCollom', email: 'austinmccollom@gmail.com', role: 'Full-Stack Web Developer'}, {id: uuid(), name: 'Sam Hill', email: 'samuelgarretthill@gmail.com', role: 'Full-Stack Web Developer'}]);
  return (
    <div className="App">
      <h1>Team</h1>
      <Form />
      {
        team.map( member => {
          return <TeamMember key={member.id} member={member} />
        })
      }
    </div>
  );
}

export default App;
