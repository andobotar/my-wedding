import React from 'react'

import classes from './AboutUs.module.scss';

export default function AboutUs() {
    return (
        <div className={classes.aboutUs}>
            <div className="orangeBoxLeft" />
            <div className={classes.text}>
                <h3 className="title">RÓLUNK</h3>
                <p>Tervezd meg a saját esküvőd egyetlen app segítségével!</p>
                <p>Foglald le a helyszínt, a szolgáltatókat és minden mást, amire csak szükségetek lehet!</p>
            </div>
        </div>
    );
}
