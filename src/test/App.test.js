import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './testUtils';
import App from '../components/App';

test('renders without error', () => {
  const wrapper = shallow(<App />);
  const component = findByTestAttr(wrapper, 'app-component');
  expect(component.length).toBe(1);
})