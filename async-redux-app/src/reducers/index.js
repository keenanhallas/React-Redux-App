const initialState = {
    genre: null,
    isFetching: false,
    isLoading: false,
    error: ""
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCHING_GENRE_START":
            return {
                ...state,
                isFetching: true,
                isLoading: true,
                error: ""
            };
        case "FETCHING_GENRE_SUCCESS":
            return {
                ...state,
                genre: action.payload,
                isFetching: false,
                isLoading: false
            };
        case "FETCHING_GENRE_FAILURE":
            return {
                ...state,
                isFetching: false,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}