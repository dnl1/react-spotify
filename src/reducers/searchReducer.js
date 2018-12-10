export const searchReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SEARCH_SUCCESS':
            return {
                ...state,
                ...action.payload,
                query: action.query
            }

        case 'SEARCH_ERROR':
            return {
                ...state,
                reason: action.reason
            }
        default:
            return state;
    }
}

export default searchReducer;