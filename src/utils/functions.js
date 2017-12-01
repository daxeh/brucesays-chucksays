/**
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Generate current unix time
 * @returns {number}
 * @link http://www.jstips.co/en/javascript/extract-unix-timestamp-easily/
 */
export const getTimestampFn = () => {
    const dateTime = new Date().getTime();
    return Math.floor(dateTime / 1000);
}
