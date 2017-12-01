import styled, { css } from 'styled-components';

/**
 * Media query targets
 *
 * @type {{handheld: media.handheld, tablet: media.tablet, desktop: media.desktop}}
 * @link https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md
 */
export const media = {
    handheld: (...args) => css`
        @media (max-width: 480px) {
          ${ css(...args) }
        }
      `,
    tablet: (...args) => css`
        @media (max-width: 600px) {
          ${ css(...args) }
        }
      `,
    desktop: (...args) => css`
        @media (max-width: 980px) {
          ${ css(...args) }
        }
      `
}

export const Column3 = styled.div`
    padding: 10px;
    width: 960px;
	margin: 20px auto;
	line-height: 1.25;

    ${ media.desktop`
        width: 94%;
    `}
`;

export const Column3Header = styled.header`
    height: 100px;
    padding: 0 15px;
    text-align: center;
    font-size: 1em;
    margin-bottom: 5px;

    ${ media.handheld`
        height: auto;
        font-size: 1em;
    `}

    ${ media.desktop`
        padding: 1% 4%;
    `}
`;

export const Column3Left = styled.section`
    width: 220px;
    float: left;
    padding: 5px 15px;
    margin-bottom: 5px;

    ${ media.handheld`
		float: none;
    `}

    ${ media.tablet`
        width: auto;
        float: none;
    `}

    ${ media.desktop`
        width: 48%;
		padding: 1% 4%;
    `}
`;

export const Column3Middle = styled.section`
    width: 390px;
    float: left;
    min-height: 290px;
    padding: 5px 15px;
    margin: 0px 5px 5px 5px;
    overflow-y: auto;

    ${ media.handheld`
		float: none;
    `}

    ${ media.tablet`
        width: 100%;
        float: none;
		margin-left: 0px;
    `}

    ${ media.desktop`
        width: 48%;
		padding: 1% 4%;
		margin: 0px 0px 5px 5px;
		float: right;
    `}
`;

export const Column3Right = styled.aside`
    width: 220px;
    float: left;
    padding: 5px 15px;

    ${ media.handheld`
        display: none;
    `}

    ${ media.tablet`
        width: auto;
		float: none;
    `}

    ${ media.desktop`
        clear: both;
		padding: 1% 4%;
		width: auto;
		float: none;
    `}
`;

export const Column3Footer = styled.footer`
    clear: both;
    padding: 0 15px;

    ${ media.desktop`
        padding: 1% 4%;
    `}
`;
