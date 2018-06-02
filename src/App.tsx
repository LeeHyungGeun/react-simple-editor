import * as React from 'react';
import './App.css';
import Toolbar from './Toolbar';
import './index.css';

class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <div className="editor">
          <Toolbar />
        </div>
      </div>
    );
  }
}

export default App;
