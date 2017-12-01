import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RaisedButton from '../../elements/Button/RaisedButton';
import { Background } from '../../elements/Image/index';
import animatedError from '../../assets/images/rolf_pink.gif';

const ItemWrapper = styled.div`
    margin: 0 auto;
    font-size: 20px;
    margin-bottom: 30px;
    text-align: center;
`;

const ErrorItemWrapper = styled(ItemWrapper)`
    background-image: ${((props) => props['background-image'] ? props['background-image'] : '') };
    color: #f04816;
    height: 100%;
    width: 100%;
`;

/**
 * The structure of item to be rendered
 * HTTP GET /jokes/random
 * Ex. Response 200
 * {
 *      "category": null,
 *      "icon_url": "https:\/\/assets.chucknorris.host\/img\/avatar\/chuck-norris.png",
 *      "id": "KmJpEStfTw-IjlR5xAHPhw",
 *      "url": "http:\/\/api.chucknorris.io\/jokes\/KmJpEStfTw-IjlR5xAHPhw",
 *      "value": "God is love. Chuck Norris is fucking awesome.q"
 * }
 * @param data
 * @param error
 * @param isLoading
 * @returns {XML}
 */
export default function FetchedItem({data, error, ...otherProps}) {
    if (error) {
        return (
            <ErrorItemWrapper>
                {error.message}
                {otherProps.children}
                <Background background-image={animatedError}></Background>
            </ErrorItemWrapper>
        );
    } else {
        return (
            <ItemWrapper id={data.id}>
                {data.value}
                {otherProps.children}
            </ItemWrapper>
        );
    }
}


