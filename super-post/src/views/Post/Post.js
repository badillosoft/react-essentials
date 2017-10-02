import React, { Component } from 'react';

import './Post.css';

export default class Post extends Component {

    render() {
        return (
            <div>
                <div className="avatar">
                    <img src="https://orig00.deviantart.net/06cf/f/2016/191/e/8/ash_ketchum_render_by_tzblacktd-da9k0wb.png" />
                    <a href="#">Ash Ketchum</a>
                    <span><small>37 min</small></span>
                </div>
            </div>
        );
    }

}