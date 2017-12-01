import React from 'react';
import styled from 'styled-components';

const BackgroundDiv = styled.div`
  width: 100%;
  max-height: 100%;
  text-align: center;
  background-image: ${((props) => props['background-image'] ? props['background-image'] : '')};
`;

function Background(props) {
  return (
    <BackgroundDiv {...props} />
  );
}

export default Background;
