import React, { Component } from 'react';

export default class ClockView extends Component {

    componentWillMount() {
        this.start();
    }

    componentWillUnmount() {
        this.stop();
    }

    start() {
        const id = setInterval(() => {
            this.props.onTick();
        }, 1000);

        this.setState({ id });
    }

    stop() {
        const { id } = this.state;

        if (id) {
            clearInterval(id);
        }
    }

    onReset() {
        this.stop();
        this.start();
        this.props.onReset();
    }

    render() {
        return (
            <div>
                <h1>{this.props.clock.minutes}m {this.props.clock.seconds}s</h1>
                <button onClick={e => this.onReset()}>reset</button>
            </div>
        );
    }
}