import styled from 'styled-components';
import theme from 'styles/theme';

interface IButton {
  onClick: () => void;
}

const Button = styled<IButton, any>('div')`
  font-size: 16px;
  min-width: 1rem;
  text-align: center;
  padding: 0.5em;
  background: ${theme.color.white};
  border: 1px solid ${theme.color.grey};
  outline: none;
  user-select: none;
  cursor: pointer;
  &:hover {
    background: ${theme.color.whiteGrey};
  }
`;

export default Button;