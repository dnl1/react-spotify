export const resolvePath = (path) => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return path;
    } else {
        let finalUrl = `/${process.env.PUBLIC_URL}${path}`;
        return finalUrl;
    }
}