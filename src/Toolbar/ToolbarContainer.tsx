import * as React from 'react';
import Button from './ButtonContainer';
import './toolbar.css';

interface IToolbarProps {
};
interface IToolbarState {
};
class ToolbarContainer extends React.Component<IToolbarProps, IToolbarState> {
  constructor(props: IToolbarProps) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  public onClick(effect: string): void {
    console.log(effect);
  }
  public render() {
    return (
      <div className="toolbar-container">
        <div className="toolbar-row">
          <Button onClick={this.onClick} effect="bold">B</Button>
          <Button onClick={this.onClick} effect="italic">I</Button>
          <Button onClick={this.onClick} effect="underline">U</Button>
          <Button onClick={this.onClick} effect="strike">S</Button>
        </div>
      </div>
    )
  }
}
export default ToolbarContainer;