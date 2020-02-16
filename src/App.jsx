import React from 'react';

import './App.scss';
import Header from 'components/Header/Header';
import AboutUs from 'components/AboutUs/AboutUs';
import OurService from 'components/OurService/OurService';
import Download from 'components/Download/Download';
import Contacts from 'components/Contacts/Contacts';

function App() {
    return (
        <div className="App">
            <Header />
            <AboutUs />
            <OurService />
            <Download />
            <Contacts />
        </div>
    );
}

export default App;
