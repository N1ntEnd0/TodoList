const ADD = 'ADD';
const DELETE = 'DELETE';
const SET_SELECTION = 'SET_SELECTION';

export const noteReducer = (state = [], action) => {
    switch(action.type) {
        case ADD:
            return [{
                id: Math.random().toString(36).substring(7 ),
                text: action.payload,
                selected: false,
                },
                ...state, 
            ];
        case DELETE:
            return state.filter(state => state.id != action.payload.id);
        case SET_SELECTION: 
            let index = state.indexOf(action.payload);
            if ( ~index ) {
                let copyList = [...state];
                action.payload.selected = !action.payload.selected;
                copyList[index] = action.payload;
                return [...copyList];
            }
            return state;
        default: 
            return state;
    }
};

export const addNoteAction = (payload) => ({type: ADD, payload}); 
export const deleteNoteAction = (payload) => ({type: DELETE, payload});
export const setSelectionAction = (payload) => ({type: SET_SELECTION, payload});