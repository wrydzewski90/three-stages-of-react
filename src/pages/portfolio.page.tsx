import React from 'react';
import './home.page.scss';
import Navbar from '../components/Navbar/Navbar';
import Main from '../components/Main/Main';
import Work from '@components/Work/Work';
import Form from '@components/Form/Form';
import Tables from '@components/Tables/Tables';
const PortfolioPage = () => {
    return (
        <div>
            <Navbar />
            <Main name="i am wiktor rydzewski" />
            <Work />
            <Tables />
            <Form />
        </div>
    );
};

export default PortfolioPage;
