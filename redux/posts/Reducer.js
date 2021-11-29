import {
    GET_POSTS_LIST,
    GET_POSTS_LIST_LOADING
} from "./Actions";

const defaultState = {
    posts: null,
    postsLoading: false
};

export default (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_POSTS_LIST:
            return {
                ...state,
                posts: (payload.isServer || payload.current_page == 1) ? { ...payload } :
                    {
                        data: [...state.posts.data, ...payload.data],
                        per_page: payload.per_page,
                        current_page: payload.current_page,
                        from: payload.from ,
                        to: payload.to ,
                        total: payload.total,
                        last_page: payload.last_page
                    },
                    postsLoading: false
            }
        case GET_POSTS_LIST_LOADING:
            return {
                ...state,
                postsLoading: true
            }

        default:
            return state;
    }
};