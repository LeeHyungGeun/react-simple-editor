import styled from 'styled-components';
import theme from '../styles/theme';

interface IButton {
  onClick: () => void;
}

const Button = styled<IButton, any>('div')`
  font-size: 16px;
  padding: 0.5em;
  background: ${theme.color.white};
  border: 1px solid ${theme.color.grey};
  outline: none;
  user-select: none;
  cursor: pointer;
`;

export default Button;