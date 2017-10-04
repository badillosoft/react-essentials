import React, { Component } from 'react';

import Post from './Post';

export default class PostList extends Component {

    componentWillMount() {
        this.props.getPosts();

        setInterval(() => {
            this.props.getPosts();
        }, 10000);
    }

    render() {
        const posts = this.props.posts.map(post => {
            return <li key={post.id}><Post post={post} /><hr /></li>
        });

        return (
            <div className="post-list">
                <ul>{posts}</ul>
            </div>
        );
    }

}