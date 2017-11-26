import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import Details from '../../src/Details/Details';

const mockStore = configureStore();

describe('Details', () => {
  it('is rendered correctly', () => {
    const wrapper = shallow(<Details store={mockStore({ currentFilm: {} })} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
