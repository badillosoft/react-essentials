import React, { Component } from 'react';

import Post from './Post';

export default class PostList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentWillMount() {
        fetch("http://badillosoft.herokuapp.com/api/posts")
            .then(result => result.json())
            .then(data => {
                this.setState({
                    posts: data
                });
            });
    }

    render() {
        const posts = this.state.posts.map(post => {
            return <li key={post.id}><Post post={post} /><hr /></li>
        });

        return (
            <div className="post-list">
                <ul>{posts}</ul>
            </div>
        );
    }

}