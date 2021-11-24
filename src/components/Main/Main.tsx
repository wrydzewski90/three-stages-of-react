import React from 'react';
import '../Main/Main.scss';
import Background from '../Main/pic.jpg';
interface IMain {
    name: string;
}
const Main = ({name}: IMain) => {
    return (
        <div className="main-wrapper">
            <p className="name">{name}</p>
            <p className="introduce">
                Multidisciplinary designer who hacks at, makes and occasionally breaks things.
                Product Design Director on the team behind matrix.org. Less moody in real life. ✌️
            </p>
            <a href="./">learn more </a>
            <div className="pic">
                <img className="pic" src={Background} />
            </div>
        </div>
    );
};

export default Main;
