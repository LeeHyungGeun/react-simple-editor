import * as React from 'react';
import './editor.css';

class Editor extends React.PureComponent {
  public render() {
    return (
      <div className="editor-content-container">
        <div className="editor-content" contentEditable={true} />
      </div>
    );
  }
}

export default Editor;