const ADD = 'ADD';

export const noteReducer = (state = [], action) => {
    switch(action.type) {
        case ADD:
            return [...state, action.payload];
        default: 
            return state;
    }
};

export const addNoteAction = (payload) => ({type: ADD, payload}); 