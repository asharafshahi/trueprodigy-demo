
import { combineReducers } from 'redux';
import { FetchPropertiesReducer } from '../reducers/FetchPropertiesReducer';


// EXPORT APP REDUCER
export const AppReducer = combineReducers({
    properties: FetchPropertiesReducer
});