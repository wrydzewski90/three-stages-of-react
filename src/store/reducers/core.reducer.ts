import {IAction} from '@shared/interfaces';

export interface ICoreState {
    core: null;
}

const initialState = {
    core: null,
};

const CoreReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default CoreReducer;
