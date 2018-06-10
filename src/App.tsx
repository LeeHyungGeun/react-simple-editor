import * as React from 'react';
import './index.css';
import './App.css';
import Toolbar from './Toolbar';
import Editor from './Editor';

class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <div className="simple-editor-container">
          <div className="simple-editor-toolbar">
            <Toolbar />
          </div>
          <div className="simple-editor-content">
            <Editor />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
