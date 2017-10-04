import React, { Component } from 'react';

export default class Post extends Component {

    render() {
        const left_s = Math.floor((new Date() - new Date(this.props.post.at)) / 1000);

        let left = `hace un momento`;

        if (left_s >= 60) {
            const left_m = Math.floor(left_s / 60);
            left = `${left_m} min`;
            if (left_m >= 60) {
                const left_h = Math.floor(left_m / 60);
                left = `${left_h} horas`;

                if (left_h >= 24) {
                    const left_d = Math.floor(left_h / 24);
                    left = `${left_d} dias`;
                }
            }
        }

        return (
            <div className="post">
                <div className="post-avatar">
                    <img src={this.props.post.user.picture} alt="profile" />
                    <a href="#!">{this.props.post.user.displayName}</a>
                    <span><small>{left}</small></span>
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