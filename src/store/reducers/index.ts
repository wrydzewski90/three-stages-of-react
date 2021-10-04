import {combineReducers} from 'redux';
import CoreReducer, {ICoreState} from './core.reducer';

export interface IAppState {
    core: ICoreState;
}

const reducers = combineReducers({
    core: CoreReducer,
});

export default reducers;
