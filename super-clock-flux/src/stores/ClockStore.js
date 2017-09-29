import { ReduceStore } from 'flux/utils';
import ClockDispatcher from '../dispatchers/ClockDispatcher';
import ClockActionTypes from '../actions/ClockActionTypes';

export class ClockStore extends ReduceStore {

    constructor() {
        super(ClockDispatcher);
    }

    getInitialState() {
        return {
            seconds: 0,
            minutes: 0
        };
    }

    onTick({ seconds, minutes }) {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
            }
        }
        console.log("ClockStore/tick", seconds, minutes);
        return { seconds, minutes };
    }

    onReset() {
        return {
            seconds: 0,
            minutes: 0
        }
    }

    reduce(state, action) {
        switch (action.type) {
            case ClockActionTypes.TICK:
                return this.onTick(state);
            case ClockActionTypes.RESET:
                return this.onReset();
            default:
                return state;
        }
    }

}

export default new ClockStore();