import React, { Component } from 'react';

import './Post.css';

import PostBuilder from './PostBuilder';
import PostList from './PostList';

export default class PostController extends Component {

    render() {
        return <div className="post-controller">
            <PostBuilder />
            <PostList />
        </div>
    }

}