import React from 'react';

import './assets/styles/App.css';

import PulseButton from './components/PulseButton';
import InfiniteStream from './components/InfiniteStream';
import ThemedStickyFoot from './components/ThemedStickyFoot';
import { Column, Content } from './elements/Layout/index';
import StreamAppBar from './components/StreamAppBar/index';

/**
 * The configured layouts for each feature of this application is described here.
 *
 *  - Activity/Data feed
 *  - Query Results
 *  - Leaderboard
 */
class App extends React.Component {
    render() {
        return (
            <Column>
                <h1>{'Bruce says, Chuck says'}</h1>
                <Content>
                    <PulseButton id="timer-pulse" top="0" left="300px" title={'Coming soon!'}
                                 message={'Load a new joke every 20secs'}/>
                    <InfiniteStream>
                        <StreamAppBar/>
                    </InfiniteStream>
                </Content>
                <ThemedStickyFoot
                    background-color={'#2b3e51'}
                    color={'#fff'}
                />
            </Column>
        )
    }
}

export default App;
