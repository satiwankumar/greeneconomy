import statesReducer from './statesReducer';
import {combineReducers} from 'redux';
import stopsReducer from './stopsReducer';

const allreducers = combineReducers({
    states: statesReducer,
    stops: stopsReducer
})
export default allreducers