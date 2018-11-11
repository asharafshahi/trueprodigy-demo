import {
    FETCH_PROPERTIES_PENDING,
    FETCH_PROPERTIES_FULFILLED,
    FETCH_PROPERTIES_REJECTED
} from '../actions/PropertiesActions';


// INITIALIZE STATE
const initialState = {
    properties: [],
    fetching: false,
    fetched: false,
    failed: false
};


// REDUCER
export const FetchPropertiesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PROPERTIES_PENDING:
            return {
                ...state,
                properties: [],
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_PROPERTIES_FULFILLED:
            return {
                ...state,
                properties: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case FETCH_PROPERTIES_REJECTED:
            return {
                ...state,
                properties: [],
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};