import React, { Component } from 'react';

import UserList from './UserList';

export default class UserMain extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=10&?seed=super")
            .then(result => result.json())
            .then(data => {
                this.setState({
                    users: data.results
                });
            });
    }

    render() {
        return (
            <div>
                <input type="search" placeholder="buscar..." />

                <UserList users={ this.state.users } />
            </div>
        );
    }

}