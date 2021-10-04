import React, {ReactElement} from 'react';
import HomeHeader from './home-header.component';
import './home.component.scss';
interface IHomeWrapper {
    children: ReactElement;
}

const HomeWrapper = (props: IHomeWrapper) => {
    return (
        <div className="home-wrapper">
            <HomeHeader />
            <div className="home-content">{props.children}</div>
        </div>
    );
};
export default HomeWrapper;
