import * as types from '../actions/actionTypes';

const initialState = {
    people: 0,
    temperature: 28
}

export default function set(state = initialState, action) {
    switch (action.type) {
        case types.SET_PEOPLE:
            return { ...state, people: state.people + 1 };
        case types.SET_TEMPERATURE:
            return { ...state, temperature: state.temperature + 1 };
        default: 
            return state;
    }
}