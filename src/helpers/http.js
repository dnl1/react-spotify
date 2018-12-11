import axios from 'axios';

class Http {
    constructor(options) {
        this.options = options || {
            timeout: 5000
        };

        this.defaultHeaders = {
            'Content-Type': this.options.contentType || 'application/json; charset=utf-8'
        }

        if(!this.options.baseUrl) throw Error('BaseUrl not found');

        this._instance = axios.create({
            baseURL: this.options.baseUrl,
            timeout: this.options.timeout,
            headers: this.options.headers
        })
    }

    get(url, headers) {
        return this._instance.get(url, {
            headers: { ...headers, ...this.defaultHeaders }
        });
    }

    post(url, data, headers) {
        return this._instance.post(url, data, {
            headers: { ...headers, ...this.defaultHeaders }
        });
    }
}

export default Http;