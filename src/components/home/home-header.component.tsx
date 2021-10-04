import React from 'react';
import {useHistory} from 'react-router';
import './home.component.scss';

const HomeHeader = () => {
    const history = useHistory();
    return (
        <div className="home-header">
            <div className="project-name">React z rana jak śmietana</div>
            <div className="routing-buttons-container">
                <button onClick={() => history.push('/task1')} className="routing-button">
                    Zadanie 1
                </button>
                <button onClick={() => history.push('/task2')} className="routing-button">
                    Zadanie 2
                </button>
                <button onClick={() => history.push('/task3')} className="routing-button">
                    Zadanie 3
                </button>
            </div>
        </div>
    );
};
export default HomeHeader;
