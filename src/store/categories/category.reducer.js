import USER_CATEGORIES_TYPE from "./category.types";

export const CATEGORIES_INITIAL_STATE = {
    categoriesMap: [],
    isLoading: false,
    error: null,
}

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
    const { type, payload } = action
    switch (type) {
        case USER_CATEGORIES_TYPE.FETCH_CATEGORIES_START:
            return { ...state, isLoading: true }
        case USER_CATEGORIES_TYPE.FETCH_CATEGORIES_SUCCESS:
            return { ...state, categoriesMap: payload, isLoading: false }
        case USER_CATEGORIES_TYPE.FETCH_CATEGORIES_FAILED:
            return { ...state, error: payload, isLoading: false }

        default:
            return state;
    }
}