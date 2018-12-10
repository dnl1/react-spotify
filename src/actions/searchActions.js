import SpotifyApi from "../helpers/spotifyApi";

export const fetchSuccess = (payload, query) => {
  return {
    type: "SEARCH_SUCCESS",
    payload,
    query
  };
};

export const fetchError = reason => {
  return {
    type: "SEARCH_ERROR",
    reason: reason
  };
};

export const fetch = query => {
  return dispatch => {
    const api = new SpotifyApi();

    if (query.length === 0) {
      dispatch(fetchSuccess({}, ""));
      return;
    }

    api
      .search(query)
      .then(result => {
        dispatch(fetchSuccess(result.data, query));
      })
      .catch(reason => {
        dispatch(fetchError(reason));
      });
  };
};
