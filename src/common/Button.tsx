import styled from 'styled-components';
import theme from '../styles/theme';

const Button = styled.div`
  font-size: 16px;
  padding: 0.5em;
  background: ${theme.color.white};
  border: 1px solid ${theme.color.grey};
  outline: none;
  user-select: none;
  cursor: pointer;
`;

export default Button;