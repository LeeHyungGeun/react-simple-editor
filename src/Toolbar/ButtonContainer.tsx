import * as React from 'react';
import Button from 'common/Button';

interface IButtonContainerProps {
  onClick: (args: any) => void;
  effect: string;
}

class ButtonContainer extends React.Component<IButtonContainerProps> {
  constructor(props: IButtonContainerProps) {
    super(props);
  }
  public render() {
    return (
      <Button onClick={this.props.onClick.bind(this, this.props.effect)}>
        {this.props.effect}
      </Button>
    )
  }
}

export default ButtonContainer;