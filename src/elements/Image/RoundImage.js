import React from 'react';
import styled from 'styled-components';

import { BaseStyledImage } from './BaseStyle';

// Compose a bordered round image style
const StyledRoundImage = BaseStyledImage.extend`
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  -webkit-box-shadow: 0px -22px 30px 0px rgba(50,50,50,0.75);
  -moz-box-shadow: 0px -22px 30px 0px rgba(50,50,50,0.75);
  box-shadow: 0px -22px 30px 0px rgba(50,50,50,0.75);
`;

function RoundImage(props) {
  return (
    <StyledRoundImage src={props.img}/>
  );
}

export default RoundImage;
