import React from 'react';
import Header from './components/Header';
import CommentsArea from './components/CommentsArea';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

class App extends React.Component {

  state = {
    comments : [
      {
        username: '',
        email: '',
        comment: '',
        trend: ''
        
      }
    ]
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">

        <Header
          header = {"TRENDI"}
        />
        <Redirect
          from="/"
          to="/login" />
        <Switch>
          <Route path="/login" component={LoginForm}/>
          <Route path="/signup" component={SignupForm}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
