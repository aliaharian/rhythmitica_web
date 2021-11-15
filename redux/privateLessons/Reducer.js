import {
    GET_STAFF_LIST,
    GET_STAFF_LIST_LOADING
} from "./Actions";

const defaultState = {
    staffs: null,
    staffsLoading: false
};

export default (state = defaultState, action) => {
    const { type, payload } = action;
    // data: [{package_id: 84, package_name: "santoor", category_id: 25, category_name: "Persian Music",…},…]
    // max: "10"
    // message: "Fetched successfully."
    // page: "1"
    // page_items: 10
    // total_items: 25
    // total_pages: 3
    switch (type) {
        case GET_STAFF_LIST:
            return {
                ...state,
                staffs: (payload.isServer || payload.page == 0) ? { ...payload } :
                    {
                        data: [...state.staffs.data, ...payload.data],
                        max: payload.max,
                        message: payload.message,
                        page: payload.page,
                        page_items: payload.page_items,
                        total_items: payload.total_items,
                        total_pages: payload.total_pages
                    },
                staffsLoading: false
            }
        case GET_STAFF_LIST_LOADING:
            return {
                ...state,
                staffsLoading: true
            }

        default:
            return state;
    }
};