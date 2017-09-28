import React, { Component } from 'react';

import UserList from './UserList';

export default class UserMain extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            _users: []
        };
    }

    componentDidMount() {
        this.refreshUsers();
    }

    refreshUsers() {
        fetch("https://randomuser.me/api/?results=1000&seed=superfoo")
            .then(result => result.json())
            .then(data => {
                this.setState({
                    users: data.results,
                    _users: data.results
                });
            });
    }

    updateSearch(query) {
        if (!query) {
            this.refreshUsers();
            return;
        }

        const users = this.state._users.filter(user => {
            const re = new RegExp(query, "i");
            return user.name.first.match(re) || user.name.last.match(re) || user.email.match(re);
        });

        this.setState({
            users: users
        });
    }

    render() {
        return (
            <div>
                <input onChange={ e => this.updateSearch(e.target.value) } type="search" placeholder="buscar..." />

                <UserList users={ this.state.users } />
            </div>
        );
    }

}