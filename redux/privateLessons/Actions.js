import axios from "axios";

export const GET_STAFF_LIST = "getStaffList";
export const GET_STAFF_LIST_LOADING = "getStaffListLoading";


export const getStaffList = (isServer, payload, filter, page = 0, max = 10) => async (dispatch) => {
    try {
        if (isServer) {
            dispatch({
                type: GET_STAFF_LIST,
                payload: {
                    ...payload,
                    isServer
                },
            });
            return;
        }

        if (page == 0) {
            dispatch({
                type: GET_STAFF_LIST_LOADING,
                payload: true
            });
        }

        let filterParam = ``
        console.log('filter',filter)
        if (filter.q)
            filterParam += `&q=${filter.q}`

        if (filter.sort)
            filterParam += `&sort=${filter.sort}`

        if (filter.package_ids)
            filterParam += `&package_ids=${filter.package_ids}`

        const response = await axios.get(
            `/v1.0/tags/search?page=${page}&max=${max}${filterParam}`
        );
        dispatch({
            type: GET_STAFF_LIST,
            payload: {
                ...response.data,
                isServer
            },
        });

    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};
