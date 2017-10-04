import React, { Component } from 'react';

import Post from './Post';

export default class PostList extends Component {

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