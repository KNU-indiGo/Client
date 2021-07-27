import * as types from './actionTypes';

export function setCurrentPlace(index) {
    return {
        type: types.SET_CURRENT_PLACE,
        payload: index
    };
}

export function setPeople() {
    return {
        type: types.SET_PEOPLE
    };
}

export function setTemperature() {
    return {
        type: types.SET_TEMPERATURE
    };
}

export function changeStatusFire(index) {
    return {
        type: types.CHANGE_STATUS_ONGOING,
        payload: index
    };
}

export function changeStatusOngoing(index) {
    return {
        type: types.CHANGE_STATUS_ONGOING,
        payload: index
    };
}

export function changeStatusComplete(index) {
    return {
        type: types.CHANGE_STATUS_COMPLETE,
        payload: index
    };
}