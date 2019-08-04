import React from 'react';
import CommentsArea from './components/CommentsArea';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import NotFound from './components/NotFound';

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

   

        <Switch>

          <Route exact path="/" render={(props) => <LoginForm {...props} sendName={this.sendName}/>}/>
          <Route path="/signup" component={SignupForm}/>
          <Route path="/trendi" render={(props) => <CommentsArea {...props} username={this.state.username}/>}/>
          <Route component = {NotFound}/>}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
