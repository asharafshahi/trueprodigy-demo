import { fetchProperties } from '../../../services/PropertiesService';

// FETCH PROPERTIES ACTION NAMES

export const FETCH_PROPERTIES = 'FETCH_PROPERTIES';
export const FETCH_PROPERTIES_PENDING = 'FETCH_PROPERTIES_PENDING';
export const FETCH_PROPERTIES_FULFILLED = 'FETCH_PROPERTIES_FULFILLED';
export const FETCH_PROPERTIES_REJECTED = 'FETCH_PROPERTIES_REJECTED';


// ACTION GENERATORS
const fetchPropertiesAction = () => async dispatch => {
    dispatch({ type: FETCH_PROPERTIES_PENDING });
    try {
        const properties = await fetchProperties();
        dispatch({
            type: FETCH_PROPERTIES_FULFILLED,
            payload: properties,
        });
    } catch (err) {
        dispatch({ type: FETCH_PROPERTIES_REJECTED });
    }
};


// EXPORT ACTIONS
export { fetchPropertiesAction as fetchProperties };