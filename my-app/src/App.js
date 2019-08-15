import React from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import UsersList from './components/UsersList';
import {Route} from 'react-router-dom';
import {ProtectedRoute} from './components/ProtectedRoute';
import 'semantic-ui-css/semantic.min.css';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <h1>Registration Form</h1>
      <Route path='/register' component={Nav} />
      <Route exact path='/register' component={RegistrationForm} />
      <ProtectedRoute path='/users' component={UsersList} />
    </div>
  );
}

export default App;
