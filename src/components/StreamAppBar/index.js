import React from 'react';
import PropTypes from 'prop-types';
import config from '../../config';
import styled from 'styled-components';

import PulseButton from '../PulseButton/index';
import Icon, {BaseIconStyle} from '../../elements/Icon/index';
import { BasePencilDiv } from '../../elements/Div/index';

import { getRandomInt, getTimestampFn } from '../../utils/functions';

import createFetchableContainer from '../common/FetchableContainers';
import DefaultSpinner from '../common/DefaultSpinner';
import AdhocModel from '../common/AdhocModel';

// Display vertical reaction icons/buttons
const ReactionBar = BasePencilDiv.extend`
    background-color: #555;
    position: absolute;
    height: auto;
    width: 60px;
    line-height: 10px;
    display:table-cell;
    border: solid;
    border-width: 1px;
    margin: 0 auto;
    padding: 5px;
    margin-left: -90px;

    &: ${A}
`;

const A = styled.a`
    display: block;
    text-align: center;
    padding: 10px;
    transition: all 0.3s ease;
    color: white;
    font-size: 20px;

    &:hover {
        background-color: #000;
    }
`;

const Active = A.extend`
    background-color: #4CAF50 !important;
`;

const Badge = styled.span`
    font-size: 12px;
    top: 0;
    right: 0;
    margin: 0 auto;
`;

// Mixin our presenter to a container that has fetch features
createFetchableContainer('https://api.chucknorris.io/jokes/categories')(CategoryList);

// One off request to populate category list
// HTTP GET
// Response 200
// [...categories]
const CategoryList = ({data, isLoading, error}) => {
    return data.map(createCategoryList);
}

function createCategoryList(cat) {
    return <div>{cat}</div>
}

/**
 * Multi purpose app bar, provides access to application settings/options including vote functions
 * Categories are added to fulfill requirements with no design morale.
 * @TODO: add emoji reactions for reaction counts
 */
export default class StreamAppBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            isLoading: false
        };
        this.clickHandler = this.clickHandler.bind(this);
    }

    // Load reactions for this artifact
    componentDidMount() {
        // TODO: adhoc in-mem storage or mock json responses
        const data = {
            id: `${getTimestampFn()}-${getRandomInt(0, 1000)}`,
            heart_counts: getRandomInt(0, 50),
            star_counts: getRandomInt(0, 50),
            comment_counts: getRandomInt(0, 10)
        }
        AdhocModel.add(data.id, data);
        //console.log(AdhocModel);

        this.setState({
            isLoading: false,
            data
        });
    }

    clickHandler(event) {
        // TODO: post
        //console.log('clicked', event);
    }

    render() {
        const { data, isLoading } = this.state;

        if (isLoading) {
            return <DefaultSpinner/>
        }

        return (
            <ReactionBar onClick={this.clickHandler}>
                <Active href="#" title="Heart"><i
                    class="fa fa-heart-o"></i><Badge>{data.heart_counts}</Badge></Active>
                <A href="#" title="Fav"><i
                    class="fa fa-star-o"></i><Badge>{data.star_counts}</Badge></A>
                <A href="#" title="Comment"><i
                    class="fa fa-comment-o"></i><Badge>{data.comment_counts}</Badge></A>
                <A href="#" title="Leaderboard"><i class="fa fa-bar-chart"></i></A>
                <A href="#" title="Categories"><i class="fa fa-sort-alpha-asc"></i></A>
                <A href="#" title="Settings"><i class="fa fa-cog"></i></A>
                <PulseButton
                    id="vote-pulse" top="-150px" left="-250px"
                    size="200px"
                    title={'How heart works?'}
                    message={'Chucks says joke, Bruce says a better joke, collect hearts for being a hillarious comeback, grow hearts and maintain leaderboard rank, realtime rank updates'}/>
            </ReactionBar>
        );
    }
}
