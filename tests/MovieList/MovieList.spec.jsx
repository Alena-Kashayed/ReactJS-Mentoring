import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import MovieList from '../../src/MovieList/MovieList';

const mockStore = configureStore();

describe('MovieList', () => {
  it('is rendered correctly', () => {
    const wrapper = shallow(<MovieList
      store={mockStore({
        films: { results: [] },
        sortBy: { value: '' },
      })}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
