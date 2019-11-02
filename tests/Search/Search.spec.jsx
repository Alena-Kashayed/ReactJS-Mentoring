import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import Search from '../../src/Search/Search';

const mockStore = configureStore();

describe('Search', () => {
  it('is rendered correctly', () => {
    const wrapper = shallow(<Search
      store={mockStore({})}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
