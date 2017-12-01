import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BasePencilDiv } from '../../elements/Div/index';

import Container from './Container';

const InfiniteStreamWrapper = styled(BasePencilDiv)`
    background: #ffdbb6;
    color: #41403E;
    font-size: 2rem;
    letter-spacing: 1px;
    border: solid 7px #bbd186;
    min-height: 300px;

    -webkit-box-shadow: 0px 10px 15px 5px rgba(0,0,0,0.75);
    box-shadow: 0px 10px 15px 5px rgba(0,0,0,0.75);
    transition: all 0.6s ease
    -webkit-transition: all 0.6s ease;

    &:hover {
        box-shadow: 2px 8px 4px -6px rgba(0, 0, 0, 0.5);
    }
`;

const CategoryHeader = styled.h1`

`;

export default function InfiniteStream(props) {
    return (
        <InfiniteStreamWrapper>
            {props.children}
            <CategoryHeader>{props.category}</CategoryHeader>
            <Container/>
        </InfiniteStreamWrapper>
    );
}
