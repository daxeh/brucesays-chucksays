import React from 'react';
import styled from 'styled-components';

/**
 * Stolen Codrop designs
 * @link https://tympanus.net/codrops/2013/06/13/creative-button-styles/
 */
const BaseRaisedButton = styled.button`
    border: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background: none;
    cursor: pointer;
    padding: 25px 80px;
    display: inline-block;
    margin: 15px 30px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    outline: none;
    position: relative;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
`;

const StyledRaisedButton = styled(BaseRaisedButton)`
    background: #cb4e4e;
    color: #fff;
    box-shadow: 0 6px #ab3c3c;
    -webkit-transition: none;
    -moz-transition: none;
    transition: none;

    border-radius: 40px;

    &:hover {
        box-shadow: 0 4px #ab3c3c;
        top: 2px;
    }

    &:active {
        box-shadow: 0 0 #ab3c3c;
        top: 6px;
    }
`;

export default function RaisedButton(props) {
    return (
        <StyledRaisedButton {...props} />
    );
}
