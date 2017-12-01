import styled from 'styled-components';

export const BaseTipDiv = styled.div`
    position: absolute;
    top: 5px;
    left: 50%;
    bottom: 150%;
    margin-bottom: 5px;
    margin-left: 20px;
    padding: 7px;
    width: 160px;
    height: 80px;
    opacity: 0;
    background-color: #000;
    background-color: hsla(0,0%,20%,0.9);
    color: #fff;
    content: attr(data-tooltip);
    text-align: center;
    font-size: 14px;
    line-height: 1.2;

    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;

     -webkit-transition: opacity .5s ease-in;
    transition: opacity .5s ease-in;
    transition: opacity .5s ease-in;
    transition: opacity .5s ease-in;
`;

export const BasePencilDiv = styled.div`
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
    padding: 1rem 1rem;
    margin: 0 1rem;
    color: #41403E;
    font-size: 2rem;
    letter-spacing: 1px;
    outline: none;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    border: solid 7px #bbd186;
`;
