import React, { Component } from 'react';

import './Post.css';

export default class Post extends Component {

    render() {
        return (
            <div className="post">
                <div className="post-avatar">
                    <img src={this.props.post.user.picture} alt="profile" />
                    <a href="#!">{this.props.post.user.displayName}</a>
                    <span><small>{this.props.post.left}</small></span>
                </div>
                <div className="post-content">
                    {this.props.post.content}
                </div>
                <div className="post-footer">
                    <span className="badge badge-primary">me gusta</span>
                    <span className="badge badge-primary">comentar</span>
                </div>
            </div>
        );
    }

}