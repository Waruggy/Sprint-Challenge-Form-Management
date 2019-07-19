import React from 'react';
import logo from './logo.svg';
import './App.css';
import RegistrationForm from './components/Registration';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="App">
      <h1>RegistrationForm</h1>
      <RegistrationForm />
    </div>
  );
}

export default App;
