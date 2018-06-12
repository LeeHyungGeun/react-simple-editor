import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
const { shallow, mount } = Enzyme;

import Button from 'common/Button';
import theme from 'styles/theme';

describe('<Button />', () => {
  const wrapper = shallow(<Button />);
  it('renders the app without crushed', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });

  // it('background color is white', () => {
    // const component = mount(<Button />);
    // expect(component.children().prop('style')).toBe(theme.color.white);
    // expect(wrapper.find('div').prop('style')).toHaveProperty('background', theme.color.white);
  // });
});