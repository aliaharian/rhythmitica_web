import axios from "axios";

export const GET_POSTS_LIST = "getPostsList";
export const GET_POSTS_LIST_LOADING = "getPostsListLoading";


export const getPostsList = (isServer, payload, filter, page = 1, max = 10) => async (dispatch) => {
    try {
        if (isServer) {
            dispatch({
                type: GET_POSTS_LIST,
                payload: {
                    ...payload,
                    isServer
                },
            });
            return;
        }

        if (page == 1) {
            dispatch({
                type: GET_POSTS_LIST_LOADING,
                payload: true
            });
        }

        let filterParam = ``
        let searchQ = '--'
        if (filter.q)
            searchQ = `${filter.q}`
        if (filter.cat_id)
            filterParam += `&cat_id=${filter.cat_id}`

        const response = await axios.get(
            `/v1.0/blog/posts/search/${searchQ}?page=${page}&max=${max}${filterParam}`
        );
        dispatch({
            type: GET_POSTS_LIST,
            payload: {
                ...response.data,
                isServer
            },
        });

    } catch (e) {
        dispatch(errorSnackbar(e));
    }
};
