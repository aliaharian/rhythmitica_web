import {
    SET_USER_IP,
    SET_TIMEZONES
} from "./Actions";

const defaultState = {
    userIp: null,
    timezones: null
};

export default (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_USER_IP:
            return {
                ...state,
                userIp: payload
            }
        case SET_TIMEZONES:
            return {
                ...state,
                timezones: payload
            }

        default:
            return state;
    }
};