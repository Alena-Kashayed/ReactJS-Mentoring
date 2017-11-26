import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import SortBy from '../../src/SortBy/SortBy';

const mockStore = configureStore();

describe('SortBy', () => {
  it('is rendered correctly', () => {
    const wrapper = shallow(<SortBy
      store={mockStore({
        currentFilm: {},
        sortBy: { value: '' },
      })}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
