import React from 'react';
import Header from './components/Header';
import CommentsArea from './components/CommentsArea';

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
      <div className="App">
        <Header
          header = {"TRENDI"}
        />
        <CommentsArea/>
      </div>
    );
  }
}

export default App;
