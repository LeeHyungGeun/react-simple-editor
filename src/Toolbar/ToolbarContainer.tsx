import * as React from 'react';
import Button from './ButtonContainer';
import './toolbar.css';

interface IProps {
};
interface IState {
};
class ToolbarContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
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
          <Button onClick={this.onClick} effect="bold">Bold</Button>
          <Button onClick={this.onClick} effect="italic">Italic</Button>
          <Button onClick={this.onClick} effect="underline">Underline</Button>
          <Button onClick={this.onClick} effect="strike">Strike</Button>
        </div>
      </div>
    )
  }
}
export default ToolbarContainer;