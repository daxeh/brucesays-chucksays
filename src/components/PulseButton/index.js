import React from 'react';
import styled from 'styled-components';

import {BaseTipDiv } from '../../elements/Div/index';
import './index.css';

/**
 * @see license
 */
const PulseContainer = styled.section`
    position: ${(props) => props.position ? props.position : 'relative'};
    top: ${(props) => props.top ? props.top : '100px'};
    left: ${(props) => props.left ? props.left : '100px'};

    &:hover .ring {
      -webkit-animation: none;
      animation: none;
    }

    &:active .ring {
        -webkit-animation: stop-pulsate 0.3s;
        animation: stop-pulsate 0.3s;
    }

    & > .circle {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 32px;
      height: 32px;
      margin: -0.666em auto auto -0.666em;
      background: #FF0000;
      border-radius: 50%;
      opacity: 0.6;
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-transition: opacity .2s ease-in, -webkit-transform .1s ease-out;
      transition: opacity .2s ease-in, -webkit-transform .1s ease-out;
      transition: opacity .2s ease-in, transform .1s ease-out;
      transition: opacity .2s ease-in, transform .1s ease-out, -webkit-transform .1s ease-out;
      color: white;
      font-size: 1.5em;
      padding: 0;
      text-align: center;
      line-height: 32px;
      overflow: hidden;
      -webkit-box-shadow: 0px 10px 24px -4px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 10px 24px -4px rgba(0,0,0,0.75);
      box-shadow: 0px 10px 24px -4px rgba(0,0,0,0.75);

      &:hover {
        opacity: 0.75;
        cursor: pointer;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);

        -webkit-animation: none;
        animation: none;
      }

      &:active {
        -webkit-transform: scale(0.875);
        transform: scale(0.875);
      }
    }

    & > .ring {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 2em;
      height: 2em;
      margin: -1em auto auto -1em;
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      border-radius: 50%;
      border: 1px solid #ea2d44;
      opacity: 0;
      -webkit-animation: pulsate 2s ease-out infinite;
      animation: pulsate 2s ease-out infinite;

      &:active {
        -webkit-animation: stop-pulsate 0.2s;
        animation: stop-pulsate 0.2s;
      }

      &:hover {
        -webkit-animation: none;
        animation: none;
      }
   }
`;

const PulseButtonTip = styled(BaseTipDiv)`
    min-width: ${(props) => props.size ? props.size : '160px'};
    width: 300px;
    position: absolute;
    top: 5px;
    left: 50%;
    bottom: 150%;
    margin-bottom: 5px;
    margin-left: 20px;
    padding: 7px;
    min-height: 150px;
    height: auto;

    ${PulseContainer}:hover & {
        opacity: 1;
    }
`;

export default function PulseButton(props) {
  const {title, message, ...otherProps} = props;
  return (
      <PulseContainer {...otherProps}>
          <span className="ring"/>
          <span className="circle"/>
          <PulseButtonTip>
              <p>{title}</p>
              {message}
          </PulseButtonTip>
      </PulseContainer>
  );
}
