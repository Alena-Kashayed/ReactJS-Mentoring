import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MovieAsset from '../../../src/MovieList/MovieAsset/MovieAsset';

describe('MovieAsset', () => {
  it('is rendered correctly', () => {
    const asset = {
      id: 1,
      title: 'Title',
      release_date: '2017-01-01',
      first_air_date: '2017-01-01',
      poster_path: '/123.jpg',
    };
    const typeOfQuery = 'movie';
    const wrapper = shallow(<MovieAsset
      asset={asset}
      typeOfQuery={typeOfQuery}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
