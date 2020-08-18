import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
import TeamMember from './Components/TeamMember'

function App() {
  // const [team]
  return (
    <div className="App">
      <h1>Team</h1>
      <Form />
      <TeamMember />

    </div>
  );
}

export default App;
