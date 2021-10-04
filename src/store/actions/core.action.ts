export const CoreActions = {
    HANDLE_ERROR: '[Core] Handle error',
    HANDLE_SUCCESS: '[Core] Handle success',
    TOAST_CREATED: '[Core] Toast created',
    GO: '[Core] Go',
    NAVIGATED_TO: '[Core] Navigated to',
    REDIRECT: '[Core] Redirect',
};

export const handleError = (data: string | Record<string, any>) => ({
    type: CoreActions.HANDLE_ERROR,
    data: data,
});

export const handleSuccess = (title: string, message: string) => ({
    type: CoreActions.HANDLE_SUCCESS,
    data: {title, message},
});

export const toastCreated = () => ({
    type: CoreActions.TOAST_CREATED,
});

export const go = (data: string, params?: any) => ({
    type: CoreActions.GO,
    data,
    params,
});

export const navigatedTo = (data: string) => ({
    type: CoreActions.NAVIGATED_TO,
    data,
});
