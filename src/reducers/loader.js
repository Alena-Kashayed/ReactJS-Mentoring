import { LOADING } from '../actions/constans';

const initialState = {
  status: false,
};

const loader = (state = initialState, action) => (
  (action.type === LOADING) ?
    {
      ...state,
      status: action.status,
    } : state
);

export default loader;
