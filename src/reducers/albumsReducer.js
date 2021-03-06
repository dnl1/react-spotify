export const albumsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_ALBUM_BY_ID_SUCCESS':
            return {
                ...state,
                ...action.payload,
                query: action.query,
                loading: false
            }

        case 'FETCH_ALBUM_BY_ID_ERROR':
            return {
                ...state,
                reason: action.reason,
                loading: false
            }

        case 'FETCHING_ALBUM_BY_ID':
            return {
                ...state,
                loading: true
            }

        case 'FETCH_TRACK_BY_ALBUM_ID_SUCCESS':
            return {
                ...state,
                ...action.payload,
                loading: false
            }

        case 'FETCHING_TRACK_BY_ALBUM_BY_ID':
            return {
                ...state,
                loading: true
            }

        case 'FETCH_TRACK_BY_ALBUM_ID_ERROR':
            return {
                ...state,
                reason: action.reason,
                loading: false
            }

        case 'RESET_ALBUM':
            return {}

        default:
            return state;
    }
}

export default albumsReducer;