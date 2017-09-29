import React, { Component } from 'react';
import { Container } from 'flux/utils';
import ClockActions from '../actions/ClockActions';
import ClockStore from '../stores/ClockStore';
import ClockView from '../views/ClockView';

export class ClockContainer extends Component {

    static getStores() {
        return [ClockStore];
    }

    static calculateState(prevState) {
        return {
            clock: ClockStore.getState(),
            onTick: ClockActions.onTick,
            onReset: ClockActions.onReset,
        };
    }

    render() {
        return <ClockView {...this.state} />
    }

}

export default Container.create(ClockContainer);