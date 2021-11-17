import axios from "axios";

export const GET_EVENTS_LIST = "getEventList";
export const GET_EVENTS_LIST_LOADING = "getEventListLoading";


export const getEventsList = (isServer, payload, filter, page = 1, max = 10) => async (dispatch) => {
    try {
        if (isServer) {
            dispatch({
                type: GET_EVENTS_LIST,
                payload: {
                    ...payload,
                    isServer
                },
            });
            return;
        }

        if (page == 1) {
            dispatch({
                type: GET_EVENTS_LIST_LOADING,
                payload: true
            });
        }

        let filterParam = ``
        if (filter.q)
            filterParam += `&q=${filter.q}`

        if (filter.view)
            filterParam += `&view=${filter.view}`

        if (filter.package_ids)
            filterParam += `&package_ids=${filter.package_ids}`
        if (filter.event_type && filter.event_type!=0)
            filterParam += `&event_type=${filter.event_type}`

        const response = await axios.get(
            `/v1.0/workshops/search?page=${page}&max=${max}${filterParam}`
        );
        dispatch({
            type: GET_EVENTS_LIST,
            payload: {
                ...response.data,
                isServer
            },
        });

    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};
