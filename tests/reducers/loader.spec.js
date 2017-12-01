import { loader } from '../../src/reducers';
import { START_LOADING, STOP_LOADING } from '../../src/actions/constans';

describe('loader', () => {
  it('should handle initial state', () => {
    expect(loader(undefined, {
      status: false,
    })).toEqual({
      status: false,
    });
  });
  it('should handle START_LOADING', () => {
    expect(loader({}, {
      type: START_LOADING,
      status: true,
    })).toEqual({
      status: true,
    });
  });
  it('should handle STOP_LOADING', () => {
    expect(loader({}, {
      type: STOP_LOADING,
      status: false,
    })).toEqual({
      status: false,
    });
  });
});
