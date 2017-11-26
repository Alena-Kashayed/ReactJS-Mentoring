import { START_LOADING, STOP_LOADING } from '../actions/constans';

const initialState = {
  status: false,
};

const loader = (state = initialState, action) => {
  const { status, type } = action;
  switch (type) {
    case START_LOADING:
      return {
        status,
      };
    case STOP_LOADING:
      return {
        status,
      };
    default:
      return state;
  }
};

export default loader;
