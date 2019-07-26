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
  sendName = (name) => {
    this.setState({
      username:name
    });
  }
  render() {
    return (
      <BrowserRouter>
      <div className="App">

        <Header
          header = {"TRENDI"}
        />

        <Switch>
          <Route path="/login" render={(props) => <LoginForm {...props} sendName={this.sendName}/>}/>
          <Route path="/signup" component={SignupForm}/>
          <Route path="/trendi" render={(props) => <CommentsArea {...props} username={this.state.username}/>}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
