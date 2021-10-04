import {ApplicationRouter} from '@router/index';
import {useSetup} from '@shared/hooks';
import React from 'react';
const ContentWrapper = () => {
    const initialized = useSetup();

    return (
        <div className="layout-wrapper main-container-style">
            {initialized && <ApplicationRouter />}
        </div>
    );
};

export default ContentWrapper;
