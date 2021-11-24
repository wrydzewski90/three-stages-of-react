import React from 'react';
import '../Work/Work.scss';
import Car from '../Work/car.jpg';
const Work = () => {
    return (
        <div className="work-wrapper">
            <p className="exp">experience</p>
            <div className="brand">
                <p className="skoda">Skoda Motorpol Wroclaw 10.2016-12.2020 </p>
                <img className="skodaImage" src={Car} />
            </div>
        </div>
    );
};

export default Work;
