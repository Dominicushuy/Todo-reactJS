import * as types from './../constants/actionTypes';

let initialState = [];

const tasks = (state = initialState, action) =>{
    switch (action.type) {
        case types.GET_DATA :
            state = action.data;
            localStorage.setItem("tasks", JSON.stringify(state));
            return [...state];    
        default: return [...state]
    }
}
export default tasks;