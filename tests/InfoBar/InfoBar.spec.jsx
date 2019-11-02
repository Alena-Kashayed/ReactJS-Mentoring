import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import InfoBar from '../../src/InfoBar/InfoBar';

const mockStore = configureStore();

describe('InfoBar', () => {
  it('is rendered correctly', () => {
    const wrapper = shallow(<InfoBar
      store={mockStore({
        currentFilm: {},
        films: { results: [] },
      })}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
