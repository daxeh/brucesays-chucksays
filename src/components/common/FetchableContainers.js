import React from 'react';

/**
 * Returns a function to produce FetchableContainer, composable
 * component to fetch data. If stateless component is not given,
 * apply default Container.
 *
 * @param url location where the container will fetch data from
 * @param httpOptions
 * @returns fn
 */
const createFetchableContainer = (url, httpOptions) => (Comp) =>
    class FetchableContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: {},
                isLoading: false,
                error: null
            };
            this.fetchData = this.fetchData.bind(this);
        }

        // Callable fetch method to supplied url endpoint
        fetchData() {
            const self = this;
            this.setState({ isLoading: true });

            // Updates state on response success or error
            fetch(url, httpOptions = {}).then(response => {
                if (response.ok) {
                    return response;
                } else {
                    // 404's
                    const error = new Error(response.statusText);
                    error.response = response;
                    throw error;
                }
            }).then(results => results.json()).then(data => {
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

        render() {
            return <Comp { ...this.props } { ...this.state } />
        }
    }

/**
 * Presenter (StatelessComponent)
 * @param data
 * @param isLoading
 * @param error
 * @constructor
 */
const Container = ({data, isLoading, error, ...props}) => {
    if (error) {
        return <p>error.message</p>
    }
    return <div {...props.children}/>
}

/**
 * Factory function
 * @usage
 *  const fn = createFetchableContainer(url, options)(StatelessComponent);
 * @return fn
 */
export default createFetchableContainer;
