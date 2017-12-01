import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import Loader from '../../src/Loader/Loader';

const mockStore = configureStore();

describe('Loader', () => {
  it('is shown', () => {
    const wrapper = shallow(<Loader
      store={mockStore({
        loader: { status: true },
      })}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('is hidden', () => {
    const wrapper = shallow(<Loader
      store={mockStore({
        loader: { status: false },
      })}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
