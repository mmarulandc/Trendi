import React from 'react';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header
          header = {"Header"}
        />
      </div>
    );
  }
}

export default App;
