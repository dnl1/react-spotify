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
  return (dispatch, getState) => {
    const api = new SpotifyApi();
    const state = getState();

    const cachedResult = state.searchReducer.cache.filter(item => item.query === query)[0];

    if (cachedResult) {
      dispatch(fetchSuccess(cachedResult.payload, cachedResult.query));
      return;
    }

    if (query.length === 0) {
      dispatch(fetchSuccess({
        albums: {
          items: []
        }
      }, ""));
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