import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    -webkit-animation: sweepright 8s infinite;
    animation: sweepright 8s infinite;
    -webkit-animation-duration: 15s;
    animation-duration: 15s;
    animation-direction: normal;
    -webkit-animation-direction: normal;
    box-shadow: 0 5px 15px rgba(0,0,0,0.6);
    border-radius

    &:hover {
        box-shadow: 0 1px 2px rgba(0,0,0,0.15);
        -webkit-animation: none;
        animation: none;
    }
`;

const Image = styled.img`
    position: absolute;
    bottom: 12px;
`;

export default function AnimatedPixel(props) {
    return (
        <Wrapper>
            <Image {...props}/>
        </Wrapper>
    );
}
