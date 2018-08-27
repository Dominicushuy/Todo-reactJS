import { combineReducers } from 'redux';
import data from './data';
import tasks from './tasks';

const appReducers = combineReducers({
    data,
    tasks
})

export default appReducers;