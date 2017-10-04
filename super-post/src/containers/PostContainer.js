import React, { Component } from 'react';
import { Container } from 'flux/utils';

import LoginStore from '../stores/LoginStore';
import PostStore from '../stores/PostStore';
import PostActions from '../actions/PostActions';
import PostBuilder from '../views/Post/PostBuilder';
import PostList from '../views/Post/PostList';

import '../views/Post/Post.css';

class PostContainer extends Component {

    static getStores() {
        return [ LoginStore, PostStore ];
    }

    static calculateState() {
        return {
            loginStore: LoginStore.getState(),
            postStore: PostStore.getState(),
            addPost: PostActions.addPost,
            getPosts: PostActions.getPosts,
        };
    }

    render() {

        if (this.state.loginStore.logout) {
            return null;
        }

        return <div className="post-container">
            <PostBuilder addPost={ content => this.state.addPost(this.state.loginStore.username, content) } />
            <PostList posts={this.state.postStore.posts} getPosts={ () => this.state.getPosts() } />
        </div>
    }

}

export default Container.create(PostContainer);