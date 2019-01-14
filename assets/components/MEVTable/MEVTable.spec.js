import React from 'react';
import 'isomorphic-fetch';
import { shallow } from 'enzyme';
import MEVTable from './index';

describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<MEVTable />);
    expect(component).toMatchSnapshot();
  });
});
