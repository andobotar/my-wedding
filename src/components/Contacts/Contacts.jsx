import React from 'react'

import classes from './Contacts.module.scss';

export default function Contacts() {
    return (
        <div className={classes.container}>
            <div className="orangeBoxRight" />
            <div className={classes.text}>
                <h3 className="title">KAPCSOLAT</h3>
                <p>Email: info@mywedding.hu</p>
                <p>Telefon: 06 90 555 44 22</p>
            </div>
        </div>
    );
}
