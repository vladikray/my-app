import React from 'react';
import Employee from "./Employee";


export default class EmployeesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    handlePromise(res) {
        return res.json();
    }

    componentDidUpdate(prevProps) {
        const createdPost = prevProps.createdPost;
        const deletedPostId = prevProps.deletedPostId;

        if (createdPost !== this.props.createdPost || deletedPostId !== this.props.deletedPostId) {
            let responsePromise = fetch("http://localhost:8000/api/posts", {headers: {'Content-Type': 'application/json'}});
            responsePromise
                .then(this.handlePromise)
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            items: result.data
                        });
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
        }
    }

    componentDidMount() {
        let responsePromise = fetch("http://localhost:8000/api/posts", {headers: {'Content-Type': 'application/json'}});
        responsePromise
            .then(this.handlePromise)
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <Employee key={item.id} id={item.id} body={item.body} title={item.title} postToDelete={this.props.setPostToDelete} />
                    ))}
                </ul>
            );
        }
    }
}