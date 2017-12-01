/**
 * Truncate text with an ellipsis in div
 * @usage
 *  import { truncate } from '../utils/styles';
 *
 *  const Box = styled.div`
 *      ${ truncate('250px') }
 *      background: papayawhip;
 *  `;
 * @param width
 * @returns {*}
 * @link github.com/styled-components
 */
export function truncate(width) {
    return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
}

/**
 * Set background image in div
 * @usage
 *  import { bgimg } from '../utils/styles';
 *  import image from './assets/images/pic.jpg';
 *
 *  const Box = styled.div`
 *      ${ bgimg(image) }
 *  `;
 * @param url
 */
export function bgimg(url) {
    if (url) {
        return `
        background-image: url(${url});
        background-size: cover;
        background-color: transparent;
        background-repeat: no-repeat;
    `;
    }
}
