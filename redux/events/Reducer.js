import {
    GET_EVENTS_LIST,
    GET_EVENTS_LIST_LOADING
} from "./Actions";

const defaultState = {
    events: null,
    eventsLoading: false
};

export default (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_EVENTS_LIST:
            return {
                ...state,
                events: (payload.isServer || payload.current_page == 1) ? { ...payload } :
                    {
                        data: [...state.events.data, ...payload.data],
                        per_page: payload.per_page,
                        current_page: payload.current_page,
                        from: payload.from ,
                        to: payload.to ,
                        total: payload.total,
                        last_page: payload.last_page
                    },
                    eventsLoading: false
            }
        case GET_EVENTS_LIST_LOADING:
            console.log('hello')
            return {
                ...state,
                eventsLoading: true
            }

        default:
            return state;
    }
};