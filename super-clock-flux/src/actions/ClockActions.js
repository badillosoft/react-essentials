import ClockDispatcher from '../dispatchers/ClockDispatcher';
import ClockActionTypes from './ClockActionTypes';

export class ClockActions {

    onTick() {
        ClockDispatcher.dispatch({
            type: ClockActionTypes.TICK
        });
    }

    onReset() {
        ClockDispatcher.dispatch({
            type: ClockActionTypes.RESET
        });
    }

}

export default new ClockActions();