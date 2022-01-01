import { combineReducers } from 'redux';
import { noteReducer } from './reducers/noteStorage/noteReducer';
import { createStore } from 'redux';
import { modeReducer } from './reducers/modeReducer/modeReducer';


const rootReducer = combineReducers({
    notes: noteReducer,
    mode: modeReducer,
});

export default store = createStore(rootReducer);