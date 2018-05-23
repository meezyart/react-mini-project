import * as R from 'ramda';
import { FETCH_ACTIVITY_SUCCESS } from '../actions/actionTypes';

const initialState = {};
export default (state = initialState, { type, payload, getState }) => {
  switch (type) {
    case FETCH_ACTIVITY_SUCCESS:
      const groups = R.groupBy(item => {
        return item.Track.Title;
      });
      return R.merge(state, groups(payload));
    default:
      return state;
  }
};
