import * as R from 'ramda';
import { FETCH_ACTIVITY_SUCCESS } from '../actions/actionTypes';

const initialState = {
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ACTIVITY_SUCCESS:
      const tracks = R.compose(
        R.pluck('Title'), 
        R.uniq(), 
        R.map(R.prop('Track')));
      let newVal = tracks(payload).map((item, indx) => ({
        title: item,
        key: R.inc(indx)
      }));
      return R.merge(state, newVal);
    default:
      return state;
  }
};
