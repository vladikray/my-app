import {useParams} from "react-router-dom";
import React from 'react';
import withRouter from "./WrappedComponent";


class EmployeeFullInformation extends React.Component {

    constructor(props) {
        super(props);
        const userId = this.props.params.userId;
        this.state = {
            error: null,
            isLoaded: false,
            item: {},
            userId
        };
    }

    handlePromise(res) {
        return res.json();
    }

    componentDidUpdate(prevProps) {
        const prevUserId = prevProps.params.userId;

        if (prevUserId !== this.props.params.userId) {
            const userId = this.props.params.userId;
            let responsePromise = fetch(`http://localhost:8000/api/posts/${userId}`, {headers: {'Content-Type': 'application/json'}});
            responsePromise
                .then(this.handlePromise)
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            item: result.data,
                            userId: userId
                        });
                        this.props.setPostToUpdate(result.data)
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


    render() {
        return <div>
            {this.state.userId}
        </div>
    }

}

export default withRouter(EmployeeFullInformation)