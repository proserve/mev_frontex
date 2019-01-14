import React from 'react';
import 'isomorphic-fetch';
import { shallow } from 'enzyme';
import Cards from './index';

describe('Cards', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Cards />);
    expect(component).toMatchSnapshot();
  });
});
