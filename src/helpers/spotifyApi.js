import Http from "./http";

class SpotifyApi {
    constructor() {
        this.authorization = JSON.parse(localStorage.getItem('authorization'));
        this.http = new Http({
            baseUrl: process.env.REACT_APP_SPOTIFY_API_BASE_URL,
            headers: {
                'Authorization': `Bearer ${this.authorization.access_token}`
            }
        });
    }

    search(query) {
        return this.http.get(`search?q=${query}&type=album`);
    }

    getAlbumById(id) {
        return this.http.get(`albums/${id}`);
    }

    getTrackByAlbumById(id) {
        return this.http.get(`albums/${id}/tracks`);
    }
}

export default SpotifyApi;