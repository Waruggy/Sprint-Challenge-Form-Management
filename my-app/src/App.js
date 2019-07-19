import React from 'react';
import logo from './logo.svg';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import UsersList from './components/UsersList';
import {Route, Link} from 'react-router-dom';
import {ProtectedRoute} from './components/ProtectedRoute';
import 'semantic-ui-css/semantic.min.css';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <h1>Registration Form</h1>
      <Route path='/registration' component={Nav} />
      <Route exact path='/registration' component={RegistrationForm} />
      <ProtectedRoute path='/users' component={UsersList} />
    </div>
  );
}

export default App;
