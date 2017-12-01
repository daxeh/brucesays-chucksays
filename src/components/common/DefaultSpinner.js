import React from 'react';
import styled from 'styled-components';
import Spinner from 'react-spinkit';

const SpinWrap = styled.div`
    position: relative;
    display: block;
    margin: 0 auto;
    width: 100%;
    left: 50px;
    right: 0;
`;

export default function DefaultSpinner() {
    return (
        <SpinWrap>
            <Spinner className="SpinWrapper"
                     name="ball-scale-multiple"
                     color="#4dd7be"
                     width="40px"/>
            <Spinner className="SpinWrapper"
                     name="ball-scale-multiple"
                     color="#4dd7be"
                     width="40px"/>
        </SpinWrap>
    );
}

