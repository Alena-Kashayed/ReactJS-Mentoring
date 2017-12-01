import { START_LOADING, STOP_LOADING } from './constans';

export const startLoading = {
  type: START_LOADING,
  status: true,
};

export const stopLoading = {
  type: STOP_LOADING,
  status: false,
};
