import axios from "axios";

export const SET_USER_IP = "setUserIp";
export const SET_TIMEZONES = "setTimezones";

export const setUserIp = ( isServer , payload) => async (dispatch) => {
    try {
        if (isServer) {
            dispatch({
                type: SET_USER_IP,
                payload: payload
            });
            return;
        }

    } catch (e) {
        console.log(e)
    }
};
export const setTimezones = ( isServer , payload) => async (dispatch) => {
    try {
        if (isServer) {
            dispatch({
                type: SET_TIMEZONES,
                payload: payload
            });
            return;
        }

    } catch (e) {
        console.log(e)
    }
};
