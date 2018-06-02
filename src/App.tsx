import * as React from 'react';
import './App.css';
import Toolbar from './Toolbar';
import './index.css';

class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <Toolbar />
      </div>
    );
  }
}

export default App;
