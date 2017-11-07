import { LOADING } from './constans';

const startLoading = status => ({
  type: LOADING,
  status,
});

export default startLoading;
