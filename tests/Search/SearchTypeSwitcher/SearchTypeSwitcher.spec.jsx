import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchTypeSwitcher from '../../../src/Search/SearchTypeSwitcher/SearchTypeSwitcher';

describe('SearchTypeSwitcher', () => {
  it('is rendered correctly', () => {
    const typeOfQuery = 'movie';
    const wrapper = shallow(<SearchTypeSwitcher
      typeOfQuery={typeOfQuery}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
