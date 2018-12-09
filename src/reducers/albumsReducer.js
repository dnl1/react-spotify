export const albumsReducer = (state = {}, action) => {
    console.log('state', state);
    console.log('action', action);
    switch (action.type) {
        case 'SEARCH_SUCCESS':
            return {
                ...state,
                ...action.payload,
                query: action.query
            }
        default:
            return state;
    }
}

export default albumsReducer;