import { combineReducers } from 'redux';
import { noteReducer } from './reducers/noteStorage/noteReducer';
import { createStore } from 'redux';

const rootReducer = combineReducers({
    notes: noteReducer,
});

export const store = createStore(rootReducer);