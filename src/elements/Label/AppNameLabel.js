import React from 'react';
import styled from 'styled-components';

/**
 * Using styled-components, the following passes interpolations to the template literal
 * to adapt to props, where defaults are yes... ternary style code
 */
const FloatLabel = styled.label`
  color:  ${(props) => props.color ? props.color : '#000'};
  font-size:  ${(props) => props[ 'font-size' ] ? props[ 'font-size' ] : '48px'};
  width: ${(props) => props.width ? props.width : '350px'};
  float : ${(props) => props.float ? props.float : 'none'};
  position: absolute;
  font-weight: bold;
  right: 0.1em;
  top: 0.3em;
  text-align: center;
  display: block;
`;

/**
 * A simple functional component to demonstrate a simple component's lifecycle
 * and how additional props are parsed using `spread` function;
 *
 *  a. When element is rendered by ReactDOM,
 *  b. The component called by React with the list of props
 *  c. The component returns an element to React
 *  d. React updates the DOM efficiently.
 */
function AppNameLabel(props) {
  return <FloatLabel {...props}>{props.name}</FloatLabel>;
}

export default AppNameLabel;


