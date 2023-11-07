import React from 'react';


export class CreateEmployees extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            post: {
                title: '',
                body: ''
            },
            createPost: {}
        }
    }

    updateInputValue(propertyName, event) {
        const value = event.target.value;
        const post = {...this.state.post, ...{[propertyName]: value}};

        this.setState({ post: post});
    }

    componentDidUpdate(prevProps) {
        const postToUpdate = prevProps.postToUpdate;
        if (postToUpdate !== this.props.postToUpdate) {
            if (postToUpdate.id) {
                this.setState({post: this.props.postToUpdate, id: this.props.postToUpdate.id});
            }
        }
    }


    onCreate = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.post)
        };
        fetch('http://localhost:8000/api/posts', requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({ createPost: data.data});
                this.props.userAdded(data.data)});

    }

    onUpdate = () => {
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.post)
        };
        fetch( `http://localhost:8000/api/posts/${this.state.id}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({ createPost: data.data});
                this.props.userAdded(data.data)});
    }

    render() {
        return (
            <div className="container">
            <div>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter title" value={this.state.post.title} onChange={evt => this.updateInputValue('title',evt)}/>
                </div>
                <div className="form-group">
                    <label>Body</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" value={this.state.post.body} placeholder="Body" onChange={evt => this.updateInputValue('body',evt)}/>
                </div>
                <button className="btn btn-primary" onClick={this.state.id ? this.onUpdate : this.onCreate}>Submit</button>
            </div>
            </div>);
    }
}