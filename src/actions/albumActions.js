import SpotifyApi from "../helpers/spotifyApi";

export const fetchAlbumByIdSuccess = (payload, query) => {
  return {
    type: "FETCH_ALBUM_BY_ID_SUCCESS",
    payload,
    query
  };
};

export const fetchingAlbumById = () => {
  return {
    type: "FETCHING_ALBUM_BY_ID"
  };
};

export const fetchAlbumByIdError = reason => {
  return {
    type: "FETCH_ALBUM_BY_ID_ERROR",
    reason: reason
  };
};

export const fetchTrackByAlbumIdSuccess = (payload, query) => {
  return {
    type: "FETCH_TRACK_BY_ALBUM_ID_SUCCESS",
    payload,
    query
  };
};

export const fetchingTrackByAlbumId = () => {
  return {
    type: "FETCHING_TRACK_BY_ALBUM_BY_ID"
  };
};

export const fetchTrackByAlbumIdError = reason => {
  return {
    type: "FETCH_TRACK_BY_ALBUM_ID_ERROR",
    reason: reason
  };
};

export const getAlbumById = id => {
  return dispatch => {
    const api = new SpotifyApi();

    dispatch(fetchingAlbumById());

    api
      .getAlbumById(id)
      .then(result => {
        dispatch(fetchAlbumByIdSuccess(result.data, id));
      })
      .catch(reason => {
        dispatch(fetchAlbumByIdError(reason));
      });
  };
};

export const getTrackByAlbumById = id => {
  return dispatch => {
    const api = new SpotifyApi();

    api
      .getTrackByAlbumById(id)
      .then(result => {
        dispatch(fetchTrackByAlbumIdSuccess(result.data, id));
      })
      .catch(reason => {
        dispatch(fetchTrackByAlbumIdError(reason));
      });
  };
};
