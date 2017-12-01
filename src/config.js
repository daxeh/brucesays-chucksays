/**
 * Adhoc tmp endpoint lookup in absence of API server
 * @returns {baseUrl, resource { Callables }} object
 */
const config = () => {
    const o = {
        baseUrl: 'https://api.chucknorris.io/',
        resource: {
            random: () => 'jokes/random',
            category: (categoryName) => `jokes/random?category=${categoryName}`,
            search: (query) => `jokes/search?query=${query}`
        }
    }
    Object.freeze(o);
    return o;
}

export default config;
