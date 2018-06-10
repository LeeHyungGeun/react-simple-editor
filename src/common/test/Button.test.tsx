import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
const { shallow } = Enzyme;

import Button from 'common/Button';
import theme from 'styles/theme';

describe('<Button />', () => {
  const wrapper = shallow(<Button />);
  it('renders the app without crushed', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('background color is white', () => {
    expect(wrapper.find('div').prop('stye')).toHaveProperty('backgroundColor', theme.color.white);
  });
});