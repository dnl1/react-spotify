export const searchReducer = (
    state = {
        query: '',
        cache: [],
        albums: { items: [] }
    }, action) => {
    switch (action.type) {
        case 'SEARCH_SUCCESS':
            state.cache.push({ query: action.query, payload: action.payload });
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