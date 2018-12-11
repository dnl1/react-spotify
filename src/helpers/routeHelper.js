export const resolvePath = (path) => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return path;
    } else {
        // production code
        var splited = window.location.pathname.split('/');
        var baseUrl = splited[1];

        let finalUrl = `/${baseUrl}${path}`;
        return finalUrl;
    }
}