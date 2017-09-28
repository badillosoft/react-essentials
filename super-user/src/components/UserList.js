import React, { Component } from 'react';

export default class UserList extends Component {

    render() {
        const users = this.props.users.map(user => {
            return {
                key: `${user.id.name}-${user.id.value}`,
                displayName: `${user.name.title} ${user.name.first} ${user.name.last}`,
                email: user.email,
                phoneNumber: user.cell,
                address: `${user.location.street}, ${user.location.city}. ${user.location.postcode}, ${user.location.state}`,
                picture: user.picture.medium
            };
        }).map(user => {
            return <User key={user.key} displayName={user.displayName} email={user.email} phoneNumber={user.phoneNumber}
                address={user.address} picture={user.picture} />
        });

        if (users.length === 0) {
            return <div>No se encontraron usuarios</div>
        }

        return (
            <ul>{users}</ul>
        );
    }

}