const SET = 'SET';
const ALL = 'ALL';

export const modeReducer = (state = ALL, action) => {
    switch(action.type){
        case SET:
            return action.payload;
        default: 
            return state;
    }
};

export const setModeAction = (payload) => ({type: SET, payload});