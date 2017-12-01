import React from 'react';
import PropTypes from 'prop-types';
import DefaultSpinner from '../common/DefaultSpinner';

import FetchedItem from './FetchedItem';
import RaisedButton from '../../elements/Button/RaisedButton';

import styled from 'styled-components';

import AdhocModel from '../common/AdhocModel';

// When `intervalInSeconds` > 0 is recieved then requests will be made every
// nth `intervalInSeconds` passed. `fetching` and `loading` describes the current
// state of the component when inspected.
const getDefaultProps = () => {
    return {
        data: {},
        error: null,
        isLoading: false,
        intervalInSeconds: 0
    }
}

/**
 * Container that fetches and renders the fetched data as an item feed.
 */
export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = getDefaultProps();
        this.nextClickHandler = this.nextClickHandler.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    // Pre method invoked when attaching component to DOM, before `render()`
    // and by calling `setState()` triggers the re-rendering process.
    componentWillMount() {
        this.setState({ isLoading: true });

        // Updates state on response success or error
        this.fetchData();
        //console.log('componentWillMount');
    }

    componentWillReceiveProps(props) {
    }

    // Get data and set new state
    fetchData() {
        const self = this;
        this.setState({ isLoading: true });

        // Updates state on response success or error
        fetch('https://api.chucknorris.io/jokes/random').then(response => {
            if (response.ok) {
                return response;
            } else {
                // 404's
                const error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
        }).then(results => results.json()).then(data => {
            AdhocModel.add(data.id, data);
            //console.log(AdhocModel);

            self.setState({
                data,
                isLoading: false
            });
        }).catch(
            error => self.setState({
                error,
                isLoading: false
            })
        );
    }

    // Triggers new data fetch
    nextClickHandler(event) {
        this.fetchData();
    }

    // Render an item feed or loader.
    render() {
        const {data, error, isLoading} =  this.state;
        if (isLoading) {
            return (
                <DefaultSpinner/>
            );
        }

        return (
            <FetchedItem data={data} error={error} isLoading={isLoading}>
                <RaisedButton onClick={this.nextClickHandler}>Next</RaisedButton>
            </FetchedItem>
        );
    }
}
