import {Action} from 'redux';
import {Dictionary} from 'lodash';
export interface IAction<T = any> extends Action {
    data?: T;
}
export interface INavigationAction extends IAction<string> {
    params?: string[] | Dictionary<string>;
}
