import React from 'react';

import classes from './Header.module.scss';

export default function Header() {
    return (
        <div className={classes.header}>
            <div className="orangeBoxRight" />
            <div className={classes.heroTextBox}>
                <h1 className={classes.mainTitle + " title"}>MyWedding</h1>
                <h6 className="sub-title">DIGITAL WEDDING PLANNER</h6>
            </div>
        </div>
    );
}
