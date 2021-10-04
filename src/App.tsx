import React from 'react';
import './App.scss';
import {Provider} from 'react-redux';
import {ContentWrapper} from '@core/index';
import {store, persistor} from '@store/Store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ContentWrapper />
            </PersistGate>
        </Provider>
    );
};

export default App;
