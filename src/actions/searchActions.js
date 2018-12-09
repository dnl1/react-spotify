import SpotifyApi from "../helpers/spotifyApi";

export const fetchSuccess = (payload, query) => {
    return {
        type: 'SEARCH_SUCCESS',
        payload,
        query
    }
}

export const fetch = (query) => {
  return dispatch => {
    const api = new SpotifyApi();

    api.search(query).then(result => {
      dispatch(fetchSuccess(result.data, query));
    }).catch((reason) =>{
        console.log('reason', reason);
    });
  };
};
