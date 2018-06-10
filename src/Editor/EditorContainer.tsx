import * as React from 'react';
import Editor from './Editor';

interface IEditorProps {

};
interface IEditorState {

};

class EditorContainer extends React.Component<IEditorProps, IEditorState> {
  public render() {
    return (
      <Editor />
    );
  }
}

export default EditorContainer;