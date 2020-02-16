import React from 'react';

import classes from './Download.module.scss';
import appleLogo from 'assets/images/apple-logo.png';
import androidLogo from 'assets/images/android-logo.png';

export default function Download() {
    return (
        <div className={classes.container}>
            <div className="orangeBoxLeft" />
            <div className={classes.middleBox}>
                <h3 className="title">TÖLTSD LE</h3>
                <p className="sub-title">Alkalmazásunk elérhető iOS és Android platformon is</p>
                <div className={classes.downloadsContainer}>
                    <div className={classes.downloadItem}>
                        <img className={classes.img} src={appleLogo} alt="Apple logo" />
                        <h6 className="sub-title">iOS</h6>
                    </div>
                    <div className={classes.downloadItem}>
                        <img className={classes.img} src={androidLogo} alt="android logo" />
                        <h6 className="sub-title">ANDROID</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
