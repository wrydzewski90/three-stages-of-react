import {ofType} from 'redux-observable';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {IAction, INavigationAction} from '@shared/interfaces';
import {CoreActions, navigatedTo, toastCreated} from '@store/actions';
import {ToastService, NavigationService} from '@shared/services';

const onHandleError$ = (actions$: Observable<IAction>) =>
    actions$.pipe(
        ofType(CoreActions.HANDLE_ERROR),
        switchMap((action: IAction) => {
            ToastService.error(action.data);
            return of(toastCreated());
        }),
    );
const onHandleSuccess$ = (actions$: Observable<IAction>) =>
    actions$.pipe(
        ofType(CoreActions.HANDLE_SUCCESS),
        switchMap((action: IAction) => {
            ToastService.success(action.data.title, action.data.message);
            return of(toastCreated());
        }),
    );
const onGo$ = (actions$: Observable<INavigationAction>) =>
    actions$.pipe(
        ofType(CoreActions.GO),
        switchMap((action) => {
            NavigationService.navigate(
                action.data as string,
                action.params as string[] | undefined,
            );
            return [navigatedTo(action.data as string)];
        }),
    );
export const core = [onHandleError$, onHandleSuccess$, onGo$];
