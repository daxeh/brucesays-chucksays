import React from 'react';
import styled from 'styled-components';

import animatedBruce from '../../assets/images/fighter.gif';
import AnimatedPixel from './AnimatedPixel';
import Icon, { BaseIconStyle } from '../../elements/Icon/index';

const Content = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;

const Section = styled.section`
   margin-bottom: 5px;
`;

const Footer = styled.footer`
    position: ${(props) => props.position ? props.position : 'absolute'};
    left: ${(props) => props.left ? props.left : '0'};
    right: ${(props) => props.right ? props.right : '0'};
    bottom: 0;
    color: ${(props) => props['color'] ? props['color'] : '#000'};
    background-color: ${(props) => props['background-color'] ? props['background-color'] : '#efefef'};
    padding: 1rem;
    text-align: center;
    font-size: 12px;
`;

const IconWrapper = styled(BaseIconStyle)`
    cursor: pointer;
    height: 30px;
    width: 35px;
    border-radius: 50%;
    margin: 0 auto;
    background: #3d5772;
    vertical-align: middle;
    opacity: 0.7;

    &:hover {
        opacity: 1;
        background: #2b3e51;
    }
`;

export default function ThemedStickyFoot(props) {
    return (
        <Footer {...props}>
            <AnimatedPixel src={animatedBruce} alt="Pixelated Bruce" height="70px" width="auto" draggable="false"/>
            <Content>
                <Section>
                    <span><a href="https://brucesays-chucksays.herokuapp.com"> brucesays-chucksays.herokuapp.com</a> </span>
                    is free for as long as <span><a href="https://chucknorris.io"> chucknorris.io</a> </span> is.
                </Section>

                <Section><b>Attribution: </b>Artwork of Bruce Lee to good ol' Giphy.</Section>

                <a href="https://github.com/daxeh/brucesays-chucksays" target="_blank">
                    <Icon icon="github" color="#01ffd8"/>
                </a>

                <Section>
                    <p><b>Legal disclaimer: </b>
                        This website and its creators are not affiliated with Bruce Lee or Chuck Norris,
                        any motion picture corporation, any television corporation, parent, or affiliate corporation.
                        All motion pictures, products, and brands mentioned on this website are the respective trademarks
                        and copyrights of their owners. All material on this website is intended for humorous entertainment
                        (satire ) purposes only. The content on this website is not necessarily true and should not
                        be regarded as truth. This piece of legal disclaimer is of course scrapped off Chuck.</p>
                </Section>
                <span>(c) 2017 .:hex ... ....- -..- --- .-. .. xǝɥ:.</span>
            </Content>
        </Footer>
    );
}
