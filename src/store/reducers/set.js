import * as types from '../actions/actionTypes';

const initialState = {
    current: 0,
    people: 5,
    temperature: 28
}

export default function set(state = initialState, action) {
    switch (action.type) {
        case types.SET_CURRENT_PLACE:
            return { ...state, current: action.payload }
        case types.SET_PEOPLE:
            return { ...state, people: state.people + 1 };
        case types.SET_TEMPERATURE:
            return { ...state, temperature: state.temperature + 1 };
        default: 
            return state;
    }
}