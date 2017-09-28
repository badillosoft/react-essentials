import React, { Component } from 'react';

import UserList from './UserList';

export default class UserMain extends Component {

    render() {
        return (
            <div>
                <input type="search" placeholder="buscar..." />

                <UserList users={ [] } />
            </div>
        );
    }

}