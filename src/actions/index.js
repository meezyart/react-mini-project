import {
  FETCH_ACTIVITY_START,
  FETCH_ACTIVITY_SUCCESS,
  FETCH_ACTIVITY_FAIL
} from './actionTypes';
import { fetchActivity as fetchActivityAPI } from '../api';

export const fetchActivity = () => async dispatch => {
  dispatch({ type: FETCH_ACTIVITY_START });
  try {
    const content = await fetchActivityAPI();
    dispatch({ type: FETCH_ACTIVITY_SUCCESS, payload: content });
  } catch (err) {
    dispatch({
      type: FETCH_ACTIVITY_FAIL,
      payload: err,
      error: true
    });
  }
};


