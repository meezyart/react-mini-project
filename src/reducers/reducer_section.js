import * as R from 'ramda';

const initialState = {
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case '@@router/LOCATION_CHANGE':
      const newval = R.split('/', R.prop('pathname', payload));
      return R.merge(state, { title: newval[1] ? newval[1] : 'Build' });//ToDo: unhardcodethis

    default:
      return state;
  }
};
