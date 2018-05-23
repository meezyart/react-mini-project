import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import pages from './reducer_pages';
import nav from './reducer_navbar';
import section from './reducer_section';


export default combineReducers({
    routing: routerReducer,
    pages,
    nav,
    section
})