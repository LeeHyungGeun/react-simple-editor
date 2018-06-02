import * as React from 'react';
import { Button } from '../common';
import './toolbar.css';

interface IProps {
};
interface IState {
};
interface IButtonClick {
  effect: string;
}

class ToolbarContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  public onClick(args: IButtonClick) {
    const { effect } = args;
    alert(effect);
  }
  public render() {
    return (
      <div className="toolbar-container">
        <div className="toolbar-row">
          <Button onClick={this.onClick}>Bold</Button>
          <Button onClick={this.onClick}>Italic</Button>
          <Button onClick={this.onClick}>Underline</Button>
          <Button onClick={this.onClick}>Strike</Button>
        </div>
      </div>
    )
  }
}
export default ToolbarContainer;