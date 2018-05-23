import * as R from 'ramda';


export const getActivitiesById = (state, id) => R.prop(id, state.activity)

export const getActivity = state => {
  const activity = R.map(id => getActivitiesById(state, id), state.activityPage.ids)
  // console.log('selectas',activity)
  return activity
}

